const utils = require('./utils');
const expect = require('expect');

// Keep utils test in a separate block
describe('Utils', () => {
  describe('#add', () => {
    // Adding two numbers
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });
  });

  // Adding two numbers asyncronously
  it('should async add two numbers', (done) => {
    utils.asyncAdd(4,3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    })
  })

  // Squaring a number
  it('should square the number', () => {
    var res = utils.square(10);

    expect(res).toBe(100).toBeA('number');
  });

  // Squaring a number asyncronously
  it('should async square a number', (done) => {
    utils.asyncSquare(4, (square) => {
      expect(square).toBe(16).toBeA('number');
      done();
    })
  })

  // Various samples relating to comparing objects and arrays
  it('should expect some value', () => {
  //   expect(12).toNotBe(11);
  //   expect({name: 'Jake'}).toEqual({name: 'Jake'});
  //   expect([2,3,4]).toInclude(3);
  //   expect({
  //     name: 'Jake',
  //     age: 30,
  //     location: 'Chicago'
  //   }).toInclude({
  //     age: 30;
  //   });
  });

  // First and last name added into an object
  it('should verify first and last names set', () =>  {
    var user = {
      location: 'Chicago',
      age: 30,
    };
    var res = utils.setName(user, 'Jake Schweihs');

    expect(user).toInclude({
      firstName: 'Jake',
      lastName: 'Schweihs'
    });
  });
});
