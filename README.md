# egg-passport-qq

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-qq.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-qq
[travis-image]: https://img.shields.io/travis/eggjs/egg-passport-qq.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-passport-qq
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-passport-qq.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-passport-qq?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-passport-qq.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-passport-qq
[snyk-image]: https://snyk.io/test/npm/egg-passport-qq/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-qq
[download-image]: https://img.shields.io/npm/dm/egg-passport-qq.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-qq

<!--
Description here.
-->

## Install

```bash
$ npm i egg-passport-qq --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.passportQQ = {
  enable: true,
  package: 'egg-passport-qq',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.passportQQ = {
    key: '',
    secret: '',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

- Why and What: 
    该插件主要用于使用了 `egg-passport` 插件的情况下，第三方 qq oauth 协议登录，获取用户信息
- How: 
    首先客户端 / web 端需要唤起 qq 应用（web 端是访问 https://graph.qq.com/oauth2.0/authorize ）获取登录的 authorize_code
    之后在服务端示例代码如下：
    
    ```javascript
        // app/controller/oauth.js
        // 客户端拿到 code 之后，向服务端发起一个请求，服务端收到请求后，根据 code，构造 url，redirect 到那个url
        const url = `/path/you/set/for/qq/oauth?client_id=${QQClientID}&client_secret=${QQClientSecret}&grant_type=authorization_code&code=${yourCode}&redirect_uri=${参考qq开放平台文档注册url}`;
  
        // router.js
        app.get('/path/you/set/for/qq/oauth', app.passport.authenticate('loginByQQ', {
            successRedirect: '/path/for/qq/oauth/callback',
            failureRedirect: '/login',
        }));
        app.get('/path/for/qq/oauth/callback', app.controller.oauth.getDemoInformation);
      
        // app.js
        app.passport.verify(function* (ctx, user) {
            // 在这里可以拿到 user，user 构成看 egg-passport 文档或源码
            // 然后可以对 user 做一些持久化操作
            // 同时这个函数执行完以后，egg-passport 会自动帮我们设置 user 信息到 redis session（如果有）
        })
      
        // app/controller/oauth/getDemoInformation.js
        // 在这里可以获取 session 里面的信息
    ```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
