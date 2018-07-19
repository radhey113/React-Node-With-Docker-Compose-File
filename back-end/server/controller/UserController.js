

'use strict';

let UserController = {};
/**
 * API Request/Route Handler 
 * @param {*} request API Request
 * @param {*} response API Response
 */
UserController.register = (request, response) => {
    response.jsonp({status: true, message: "reached"});
}


module.exports = UserController;


