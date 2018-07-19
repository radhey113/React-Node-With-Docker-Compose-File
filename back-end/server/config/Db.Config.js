
'use strict';

/**
 * Db config handler
 * */ 

module.exports = {
    DATABASE    : "",
    PASSWORD    : "",
    DBURL       : process.env.dbUrl || "mongodb://127.0.0.1/demo_dev",
    HOST        : "127.0.0.1",
    PORT        : 27017,
    NAME        : "mongodb",
    CONNECTOR   : "mongodb",
}


