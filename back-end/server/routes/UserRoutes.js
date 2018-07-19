
'use strict';
let Controller = require('../controller');


module.exports = (Application) => {

    Application.route('/User')
        .post(Controller.UserController.register);
        
}

