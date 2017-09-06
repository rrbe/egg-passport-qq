'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/passport-qq.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/passport-qq-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, passportQQ')
      .expect(200);
  });
});
