/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });

function verifyCard(prefix, len, cardType){
  var cardRef = '12345678901234567890';
  var testCard = prefix + cardRef.slice(0,len-prefix.length);
  it('has a prefix of ' + prefix + ' and a length of ' + len, function() {
    detectNetwork(testCard).should.equal(cardType);
  });
}

function verifyCardWithPrefixAndLengthList(prefixList, lenList, cardType){
  for(var prefix of prefixList){
    for(var len of lenList){
      verifyCard(prefix, len, cardType);
    }
  }
}
describe('Diner\'s Club', function() {
  var should = chai.should();
  verifyCardWithPrefixAndLengthList(['38', '39'], [14], 'Diner\'s Club');
});

describe('American Express', function() {
  var should = chai.should();
  verifyCardWithPrefixAndLengthList(['34', '37'], [15], 'American Express');
});

describe('Visa', function() {
  var should = chai.should();
  verifyCardWithPrefixAndLengthList(['4'], [13, 16, 19], 'Visa');
});

describe('MasterCard', function() {
  var should = chai.should();
  var prefixList = ['51', '52', '53', '54', '55'];
  verifyCardWithPrefixAndLengthList(prefixList, [16], 'MasterCard');
});

describe('Discover', function() {
  var should = chai.should();
  var prefixList = ['6011', '644','645', '646', '647', '648', '649', '65'];
  verifyCardWithPrefixAndLengthList(prefixList, [16, 19], 'Discover');
});

describe('Maestro', function() {
  var should = chai.should();
  var prefixList = ['5018', '5020', '5038', '6304'];
  var lenList = [12, 13, 14, 15, 16, 17, 18, 19];
  verifyCardWithPrefixAndLengthList(prefixList, lenList, 'Maestro');
});

describe('Switch', function() {
  var should = chai.should();
  var prefixList = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  var lenList = [16, 18, 19];
  verifyCardWithPrefixAndLengthList(prefixList, lenList, 'Switch');
});

describe('China UnionPay', function() {
  var should = chai.should();
  var prefixList = ['624', '625', '626','6282', '6283', '6284', '6285', '6286', '6287', '6288'];
  var lenList = [16, 17, 18, 19];
  verifyCardWithPrefixAndLengthList(prefixList, lenList, 'China UnionPay');

  for(var prefix = 622126; prefix <= 622925; prefix++){
    for(var len of lenList){
      verifyCard(String(prefix), len, 'China UnionPay');
    }
  }
});

