const expect = require('chai').expect;
const truncate = require('../index').truncate;

describe('.truncate', function() {
  context('when the string length is less than the max length', function() {
    const value = truncate('test', 100);

    it('returns the string', function() {
      expect(value).to.equal('test');
    });
  });

  context('when the string length is greater than the max length', function() {
    const value = truncate('test', 2);

    it('returns the truncated string plus an ellipsis', function() {
      expect(value).to.equal('te&hellip;');
    });
  });

  context('when the string length is equal to the max length', function() {
    const value = truncate('test', 4);

    it('returns the string', function() {
      expect(value).to.equal('test');
    });
  });
});
