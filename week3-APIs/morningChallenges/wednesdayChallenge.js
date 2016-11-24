// Morning challenge: implement a waterfall function
// You have all seen the compose function. It allows you to take some functions,
// and compose them into a single function! What do you do if the functions are
// asynchronous? Implement the function waterfall, waterfall takes three
// arguments:
// 1) an initial argument, this is passed into the first async function in
// the waterfall.
// 2) the second argument is an array of functions, each function takes two
// arguments. The the first one it uses to find a result, the second is a callback
// function. These functions will get called one after the other by waterfall.
// 3) a final callback is the third argument. This is called when waterfall has
// called the last function.
//
// If that is all super confusing, look at the test below

var asyncAddOne = function(x, cb) {
  setTimeout(function() {
    if (typeof x !== 'number') return cb(new Error('need a number!'))
    return cb(null, x + 2)
  }, 200)
}

var asyncDouble = function(x, cb) {
  setTimeout(function() {
    if (typeof x !== 'number') return cb(new Error('need a number!'))
    return cb(null, x*2)
  }, 200)
}

var asyncModSeven = function(x, cb) {
  // mod takes the remainder after division.
  // ie 5 mod 3 === 2 (5/3 === 1 remainder 2)
  setTimeout(function() {
    if (typeof x !== 'number') return cb(new Error('need a number!'))
    return cb(null, x % 7)
  }, 200)
}

// Implement this function!
var waterfall = function(arg, tasks, cb) {
  cb(new Error('waterfall function not implemented'))
}

waterfall(3, [
  asyncAddOne,
  asyncDouble,
  asyncModSeven
], function(error, result) {
  console.log('Test 1');
  if (error) {
    throw new Error('test failed with error: ' + error)
  }
  if (result !== 3) {
    throw new Error('test failed, expected 3 but got ' + result)
    return ;
  }
  console.log('Test 1 success!')
  // secondTest() // bonus
})

// // bonus question !
// var mockAPI = {
//   getUsers: function(userId, cb) {
//     if (userId !== 'user1') return cb(new Error('user not found'))
//     return cb(null, {
//       name: 'Alfonzo',
//       organisation: { id: 'org1' }
//     })
//   },
//   getOrganisation: function(organisationId, cb) {
//     if (organisationId !== 'org1') return cb(new Error('org not found'))
//     return cb(null, {
//       name: 'Alfonzo\'s organisation',
//       premises: { id: 'prem1' }
//     })
//   },
//   getPremises: function(premisesId, cb) {
//     if (premisesId !== 'prem1') return cb(new Error('premises not found'))
//     return cb(null, { name: 'FAC' })
//   }
// };
//
// // implement these three functions
//
// var getUserOrgId = function(userId, cb) {
//   mockAPI.getUsers(userId, function(error, result) {
//     if (error) {
//       // ?
//     }
//     // what is this?
//     var processedResult = '?'
//     cb(null, processedResult)
//   })
// }
//
// var getOrgPremisesId = function(something, cb) {
//   cb(new Error('getOrganisationWrapper not implemented'))
// }
// var getPremisesName = function(something, cb) {
//   cb(new Error('getPremisesWrapper not implemented'))
// }
//
// var secondTest = function() {
//   waterfall('user1', [
//     getUserOrgId,
//     getOrgPremisesId,
//     getPremisesName
//   ], function(error, result) {
//     console.log('Test 2');
//     if (error) {
//       throw new Error('test failed with error: ' + error)
//     }
//     if (result !== 'FAC') {
//       throw new Error(
//         'test failed, expected \'FAC\' but got \'' + result + '\''
//       )
//       return ;
//     }
//     console.log('Test 2 success!')
//   })
// }
