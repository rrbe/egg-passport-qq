'use strict';
const qqStrategy = require('passport-qq').Strategy;

module.exports = app => {
    const config = app.config.passportQQ;
    config.passReqToCallback = true;
    config.clientID = config.key;
    config.clientSecret = config.secret;
    const client = 'loginByQQ';
    app.passport.use(client, new qqStrategy(config, (req, accessToken, refreshToken, profile, done) => {
        const user = {
            provider: 'qq',
            id: profile.id,
            displayName: profile.displayName,
            photo: profile.profileUrl,
            emails: profile.emails,
            accessToken: accessToken,
            refreshToken: refreshToken,
        };
        
        app.passport.doVerify(req, user, done);
    }));
};
