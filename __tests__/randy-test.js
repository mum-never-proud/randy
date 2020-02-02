const randy = require('../src/randy');

describe('randy test', function() {
  it('should generate random id of given length', function() {
    expect(randy(12).length).toEqual(12);
  });

  it('should generate random id of 5 characters if no length is provided', function() {
    expect(randy().length).toEqual(5);
  });

  // to cover any value length than 5

  it('should generate random id of length 4', function() {
    expect(randy(4).length).toEqual(4);
  });

  it('should throw error for invalid radix', function() {
    expect(function() { randy(4, 1) }).toThrow();
  });
});
