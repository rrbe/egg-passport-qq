'use strict';

/**
 * egg-passport-qq default config
 * @member Config#passportQQ
 * @property {String} SOME_KEY - some description
 */
exports.passportQQ = {
    clientID: '',
    secret: '',
    callbackURL: '/passport/qq/callback',
    scope: 'get_user_info',
    response_type: 'code',
};
