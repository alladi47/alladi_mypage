// This file tests our application code - open the associated HTML file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// Modify the code in your appplication to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

// The following is a helpful summary of all the QUnit asserts: 

//deepEqual(value, expected[, message]): A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
//equal(value, expected[, message]): Verify the value provided is equal the expected parameter using a non-strict comparison (==).
//notDeepEqual(value, expected[, message]): Same as deepEqual() but tests for inequality;
//notEqual(value, expected[, message]): Same as equal() but tests for inequality;
//propEqual(value, expected[, message]): A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
//strictEqual(value, expected[, message]): Verify the value provided is equal to the expected parameter using a strict comparison (===);
//notPropEqual(value, expected[, message]): Same as propEqual() but tests for inequality;
//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing calculateArea function with several sets of inputs', function (assert) {
  assert.equal(a(3), 0,'test positive number');
  assert.throws(function () { a('s'); }, /not a number/, 'String ');
  assert.throws(function () { a(); }, /not a number/, 'no Argument method check');
  assert.equal(a(8787787878787878787878878), 0,'test large positive number');
  assert.equal(a(-6565656565656565656656656565656565656656656), 0,'test large negative number');
  assert.equal(a(0), 0,'testing 0');
 // assert.equal(App.calculateSeats(0, 0), 0, 'Bonus 2 - calculateSeats(0,0) returns 0');
  //assert.equal(App.calculateSeats(-2, -1), 0, 'Bonus 3 - calculateSeats(-2,-1) returns 0');
 // assert.equal(App.calculateSeats(1000000000000000 , 1000000000000000), 0, 'Bonus 4 - calculateSeats(1000000000000000,1000000000000000) returns 0');
  //assert.equal(App.calculateSeats(NaN , NaN), 0, 'Bonus 5 - calculateSeats(NaN,NaN) returns 0');
  //assert.equal(App.calculateSeats('' , ''), 0, 'Bonus 6 - calculateSeats("" , "") returns 0');
  //assert.equal(App.calculateSeats(3.4, 2.8), 9.52, 'Bonus 7 - calculateSeats(3.4,2.8) returns 9.52');
});


