global.window = global;
global.assert = require('chai').assert;
require('../src/data.js');
require('./data.spec.js');

describe('filterForWomen',() => {
  it('debeia ser una funcion',() => {
    assert.equal(typeof filterForWomen,'function');
  });
});