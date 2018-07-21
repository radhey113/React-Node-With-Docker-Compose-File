
'use strict';

/**
 * Db config handler
 * */ 

module.exports = {
    DATABASE    : "",
    PASSWORD    : "",
    DBURL       : process.env.DB_CON_STR || "mongodb://127.0.0.1/demo_dev" || "mongodb://<username>:<password>@<host>/demo_dev",
    HOST        : "127.0.0.1",
    PORT        : 27017,
    NAME        : "mongodb",
    CONNECTOR   : "mongodb",
}


