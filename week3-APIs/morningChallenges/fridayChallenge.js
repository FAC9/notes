/**
 * Complete the 'parallel' function. It should fire
 * all the tasks at the same time, and invoke the
 * final callback when they are all done.
 * In case of an error should fire the final callback
 * immediately.
 * More spec http://caolan.github.io/async/docs.html#parallel
 */

function parallel(tasks,callback) {
  (function(callback){
  	tasks.forEach(function(i){
  		i();
  	}, callback);
  })
	var cb = tasks.length;

	if(cb===0){
		callback();
	}
}

parallel([
  function(callback) {
    setTimeout(function() {
      callback(undefined,1);
    },2000);
  },
  function(callback) {
    setTimeout(function() {
      callback(undefined,2);
    },1000);
  },
  function(callback) {
    setTimeout(function() {
      callback(undefined,3);
    },1500);
  },
  // function(callback) {
  //   setTimeout(function() {
  //     callback('boom',undefined);
  //   },1200);
  // }
], function(err,result) {
  console.log('err',err); // undefined
  console.log('result',result); // [1,2,3]
});
