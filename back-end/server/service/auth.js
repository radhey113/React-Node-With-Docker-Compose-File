/**
 * Created by Radhey Shyam on 15/02/18.
 */

"use strict";
let velidateUser  = {},
    MODEL         = require("../models"),
    COMMON_FUN    = require("../util/commonFunction"),
    CONSTANTS     = require("../util/constants")
    JWT           = require("jsonwebtoken");


/** User Authentication */
velidateUser.UserAuth = (request, response, next) => {

  let status = JWT.decode(
    request.headers.authorization,
    CONSTANTS.SERVER.JWT_SECRET_KEY
  );

  status && status.role === CONSTANTS.DATABASE.USER_ROLES.ADMIN
    ? next()
    : response.jsonp(CONSTANTS.STATUS_MSG.ERROR.UNAUTHORIZED);
};

/* export userControllers */
module.exports = velidateUser;
