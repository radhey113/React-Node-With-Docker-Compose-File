
/**
 * @swagger
 * resourcePath: /User
 * description: User API's
 */

/** get Demand api
 * @swagger
 * path: /User
 * operations:
 *   -  httpMethod: POST
 *      summary: Register User
 *      notes: Register User
 *      responseClass: User
 *      nickname: User
 *      consumes:
 *        - text/html
 *      parameters:
 *        - in: body
 *          description: User
 *          name: body
 *          paramType: body
 *          dataType: User
 *          schema:
 *           $ref: "#/models/User"
 */


/**
 * @swagger
 * models:
 *   User:
 *     id: User
 *     properties:
 *       role:
 *         type: Number
 *         description: User Registration
 *
 */