### fs.readFile under the hood

I'm writing this as maybe it's hard to absorb concepts like asynchronous, callbacks,
streams, etc, in a white-board explanation without time to absorb the code, and maybe it
would help if you had an example to study at your own leisure.

Under the hood this is something akin to the definition of `fs.readFile`:

```javascript
fs.readFile = function(file, encoding, cb) {

  var readStream;
  var fileContent = '';

  if (encoding === 'utf-8') {
    readStream = fs.createReadStream(file, 'utf-8');
  } else {
    readStream = fs.createReadStream(file);
  }

  readStream.on('data', function(chunk) {
    fileContent += chunk;
  });

  readStream.on('error', function(err) {
    cb(err, fileContent)
  });

  readStream.on('end', function() {
    cb(null, fileContent);
  });
}
```

And this is what it looks like when we invoke it, as an example:

```javascript
fs.readFile(index.html, function(err, html) {
  if (err) throw err;
  console.log(html);
});
```

Note index.html is now the value of the `file` argument, and the callback function is
the value of the `cb` argument.

When we call `fs.readFile` here, it is important to understand that we have *defined* a function as its second argument but even though we've executed `fs.readFile` the callback hasn't been executed yet. It's only defined. Callbacks are just functions that will be executed somewhere in the function they're passed into as arguments. They're a common pattern in asynchronous programming, but they can be used in synchronous code as well.

So, we've defined parameters for the callback, `err` and `file`, at its point of definition here, but they are currently just placeholder names in the same way that

```javascript
function plus (number, otherNumber) {
  return number + otherNumber;
}
```

`number` and `otherNumber` don't mean anything until we execute them with specific values like

```
plus(2, 2);
```

This is `fs.readFile` in execution order:

* A read stream is started on the file specified by the first argument of `fs.readFile`, which will read the file chunk by chunk. This is the asynchronous part, as we don't know how long this will take to finish. If an encoding argument is provided it will encode the readStream.
* As each new chunk gets read the 'data' event fires appending that chunk to the `fileContent` variable.
* Now a few things can happen. Either an 'error' event occurs (maybe the file specified doesn't exist, for example) and it triggers a function that executes the callback. The callback is now executed and control goes to it with the `Error` as the value of its first parameter `err`. We hit its first line `if (err) throw err`, it returns true and the error is thrown, and execution ends.
* The other thing that can happen is the file is read successfully and the 'end' event is triggered. This runs a function which executes our callback, except this time the value of the first parameter is `null` and the value of the second is the `fileContent` variable, which contains the contents of the read file. `if (err) throw err` will return `false` and then `fileContent` will get `console.logged`.

This is why we define the callback for `fs.readFile` in the format of `function (error, file) {}`. It is implicitly defined within the definition of `fs.readFile` that the first argument can only ever be `null` or an `error`, and the second argument can only ever be the contents of the read file.

Read the code above again carefully, then read this description again. I didn't understand this stuff until about week 10 in the course, and feel a lot of you are on the brink of getting this.
