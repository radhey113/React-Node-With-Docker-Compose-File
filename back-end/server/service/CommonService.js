/**
 * Created by Radhey Shyam on 11/14/17.
 */

const async         = require('async');
      CONSTANTS     = require('../util/constants');
      fs            = require('fs');
      MONGOOSE      = require('mongoose');
      BCRYPT        = require("bcryptjs");
      JWT           = require("jsonwebtoken");
      SEND_IN_BLUE  = require('sendinblue-api');


/**
 * incrypt password in case user login implementation
 * @param {*} userPassword 
 * @param {*} cb 
 */
let encryptPswrd = (userPassword, cb) => {
  BCRYPT.hash(userPassword, 10, (err, encryptPswrd) => {
    return err ? cb(err) : cb(null, encryptPswrd);
  });
};


/**
 * @param {** decrypt password in case user login implementation} payloadPassword 
 * @param {*} userPassword 
 * @param {*} cb 
 */
let decryptPswrd = (payloadPassword, userPassword, cb) => {
  BCRYPT.compare(payloadPassword, userPassword, (err, isMatched) => {
    return err ? cb(err) : cb(null, isMatched);
  });
};


/**
 * if will take any kind of error and make it in embedded format as per the project require
 * @param {*} data  (data could be object or string depecds upon the error type)
 */
let sendError = function (data) {

  if (typeof data == 'object' && data.hasOwnProperty('statusCode') && data.hasOwnProperty('customMessage')) {
    return data;
  } else {
    let errorToSend = '';
    if (typeof data == 'object') {

      if (data.name == 'MongoError' || data.name == 'BulkWriteError' ) {

        errorToSend += CONSTANTS.STATUS_MSG.ERROR.DB_ERROR.customMessage;

        if (data.code = 11000) {

          let duplicateValue = data.errmsg && data.errmsg.substr(data.errmsg.lastIndexOf('{ : "') + 5);
          duplicateValue = duplicateValue.replace('}', '');
          errorToSend += CONSTANTS.STATUS_MSG.ERROR.DUPLICATE.customMessage + " : " + duplicateValue;

          if (data.message.indexOf('customer_1_streetAddress_1_city_1_state_1_country_1_zip_1') > -1) {
            errorToSend = CONSTANTS.STATUS_MSG.ERROR.DUPLICATE_ADDRESS.customMessage;
          }
        }
      } else if (data.name == 'ApplicationError') {

        errorToSend += CONSTANTS.STATUS_MSG.ERROR.APP_ERROR.customMessage + ' : ';

      } else if (data.name == 'ValidationError') {

        errorToSend += CONSTANTS.STATUS_MSG.ERROR.APP_ERROR.customMessage + data.message;
        
        errorToSend = errorToSend.split("Path");
        errorToSend = errorToSend[1];

      } else if (data.name == 'CastError') {

        errorToSend += CONSTANTS.STATUS_MSG.ERROR.DB_ERROR.customMessage + CONSTANTS.STATUS_MSG.ERROR.INVALID_ID.customMessage + data.value;
      } else {

        errorToSend = data;
      }
    } else {

      errorToSend = data
    }
    let customErrorMessage = errorToSend;

    if (typeof customErrorMessage == 'string') {

      if (errorToSend.indexOf("[") > -1) {

        customErrorMessage = errorToSend.substr(errorToSend.indexOf("["));
      }

      customErrorMessage = customErrorMessage && customErrorMessage.replace(/"/g, '');
      customErrorMessage = customErrorMessage && customErrorMessage.replace('[', '');
      customErrorMessage = customErrorMessage && customErrorMessage.replace(']', '');
    }

    return {statusCode: 400, type: "Default",  customMessage: customErrorMessage }
  }
};

/**
 * Send success message to frontend
 * @param {*} successMsg 
 * @param {*} data 
 */
let sendSuccess =  (successMsg, data)=> {
  successMsg = successMsg || CONSTANTS.STATUS_MSG.SUCCESS.DEFAULT.customMessage;
  if (typeof successMsg == 'object' && successMsg.hasOwnProperty('statusCode') && successMsg.hasOwnProperty('customMessage')) {
    return { statusCode: successMsg.statusCode, message: successMsg.customMessage,  data: data || null };
  } else {
    return { statusCode: 200, customMessage: successMsg, data: data || null };
  }
};


/**
 * Check duplicate value in array
 * @param {*} request 
 * @param {*} reply 
 * @param {*} source 
 * @param {*} error 
 */
let checkDuplicateValuesInArray =  (array)=> {
    console.log('array',array)
    let storeArray = [];
    let duplicateFlag = false;
    if(array && array.length>0){
        for (let i=0; i<array.length;i++){
            if (storeArray.indexOf(array[i]) == -1){
                console.log('push',array[i])
                storeArray.push(array[i])
            }else {
                console.log('break')
                duplicateFlag = true;
                break;
            }
        }
    }
    storeArray = [];
    return duplicateFlag;
};


/** FailAction return to api routes */
let failActionFunction =  (request, reply, source, error)=> {
  let customErrorMessage = '';
  if (error.output.payload.message.indexOf("[") > -1) {
    customErrorMessage = error.output.payload.message.substr(error.output.payload.message.indexOf("["));
  } else {
    customErrorMessage = error.output.payload.message;
  }
  customErrorMessage = customErrorMessage.replace(/"/g, '');
  customErrorMessage = customErrorMessage.replace('[', '');
  customErrorMessage = customErrorMessage.replace(']', '');
  error.output.payload.message = customErrorMessage;
  delete error.output.payload.validation
  return reply(error);
};


/**
 * Generate random string according to the requirement, it will generate 7 character string
 */
let generateRandomString = ()=> {
  return randomstring.generate(7);
};


/**
 * Filter the array
 * @param {*} array 
 */
let filterArray =  (array) =>{
  return array.filter(function (n) {
    return n !== undefined && n !== ''
  });
};


/**
 * sanitizer for spliting a string corresponding to space if string has value otherwise it will join the space in it
 * @param {*} string 
 */
let sanitizeName =  (string) => {
  return filterArray(string && string.split(' ') || []).join(' ')
};


/**
 * Verify email is in correct format or not
 * @param {*} string 
 */
let verifyEmailFormat = (email)=> {
  return validator.isEmail(email);
};


/** check all fields are available */
let objProperties = (obj, callback)=>{
    for (i in obj) {
        if (!obj[i]) {
            return callback(i+CONSTANTS.STATUS_MSG.ERROR.CUSTOME_ERROR.customMessage);
        }
    }
    return callback(null);
};


/**
 * @param {*} errObj error obj from constants
 * @param {*} customMsg custom new msg
 * @param {*} callback callback back to api || controller || service || routes
 */
let customErrorResponse = (errObj, customMsg, callback)=>{
    errObj.message = customMsg;
    callback(errObj);
};

/** used for converting string id to mongoose object id */
let convertIdToMongooseId = (stringId)=>{
  return MONGOOSE.Types.ObjectId(stringId);
};


/** create jsonwebtoken **/
let createToken =  (objData)=>{
    return JWT.sign(objData, CONSTANTS.SERVER.JWT_SECRET_KEY , { expiresIn: 1 });
};

/** it will genrate random Alphanumeric string for KompleteCareId of n digit **/
let genrateCodeAlphaNumeric = function (number_of_digits)
{
    var text = "";
    var possible = "1234567890";

    for (var i = 0; i < number_of_digits; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};

/** it will genrate random number of 6 digit **/
let genrateCode = function ()
{
    var text = "";
    var possible = "1234567890";

    for (var i = 0; i < 6; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};

/**
 * Trim Body's sting elements and return the trimmed Body request
 * @param {Json Object} object 
 */
function jsonTrim(object) {
  if (typeof object === 'string') {
      return object.trim();
  } else if (typeof object === 'object') {
      for (var key in object) {
          object[key] = jsonTrim(object[key]);
      }
  }

  return object;
}



/***************************************
 **** Logger for error and success *****
 ***************************************/
let messageLogs = (error, success) => {
    if(error)
        console.log(`\x1b[31m`+error);
    else
        console.log(`\x1b[32m`+success);
};


/**
 * All service function manager
 * **/ 
module.exports = {
  sendError                     : sendError,
  sendSuccess                   : sendSuccess,
  encryptPswrd                  : encryptPswrd,
  decryptPswrd                  : decryptPswrd,
  checkDuplicateValuesInArray   : checkDuplicateValuesInArray,
  verifyEmailFormat             : verifyEmailFormat,
  filterArray                   : filterArray,
  sanitizeName                  : sanitizeName,
  customErrorResponse           : customErrorResponse,
  convertIdToMongooseId         : convertIdToMongooseId,
  objProperties                 : objProperties,
  createToken                   : createToken,
  genrateCode                   : genrateCode,
  jsonTrim                      : jsonTrim,
  messageLogs                   : messageLogs
};