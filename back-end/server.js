'use strict';

/*********************************************************
 *********** www.js is a file from where our *************
 *** server will run and dbConnection for db connection **
 **************** db Config for connection ***************
 *********************************************************/
let WWW = require('./bin');
let Config = require('./server/config');


/***********************************
 * Database conectinvity before ****
 ** running server (WWW.Server()) **
 ***********************************/
WWW.DbConnection(Config.DbConfig.DBURL).then(resolve => {
    console.log(`*********DB is connected successfully*********`);
    WWW.Server();
}).catch(err => {
    console.log(`*********err*********  ${err}`);
});
