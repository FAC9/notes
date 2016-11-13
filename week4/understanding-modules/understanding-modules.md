# Understanding ```require()``` and ```module.exports```

## The 'require' hook
For some reason the internet loves animals, and cats in particular. So let's say I'm making a site about animals.

I might as well split my files into animal type, and I guess it makes sense to start with the cat module.

So in ```catModule.js```, I'll define and call a function that tells me what noise a cat makes:
```
var noise = function() {
  console.log('Meow!');
}
noise();
```

But if this is just one module, how do I insert catModule.js into main.js?

All I need is: ```require('path of module')```  
i.e.
```
require('./catModule.js')
```

If I run main.js in the terminal, we can see that the code inside catModule.js is run, and 'Meow' is console logged:
![](../../../Pictures/understanding-modules1.png)


## Where does module.exports come into it then?

By itself, ```require('./catModule')``` simply inserts ```catModule.js``` into the flow of the ```main.js``` file. The good thing about modularisation is that we do not have access to the actual functions or variables inside ```catModule.js```. This means that we could have another variable in ```main.js``` called ```noise```, and there would be no conflict.

But what if we want to access the ```noise``` function? Well, that's where ```module.exports``` comes in. We can use this in ```catModule.js``` to specify what we want to export:
```
module.exports = noise;
```
Theoretically, ```noise``` would now be available to us from inside ```main.js```, but we have no way to invoke it. We need to save ```require('.catModule.js')``` in a variable, so that we can refer to it.

Since our entire cat module only does one thing, we could also call it ```noise```:
![](../../../Pictures/understanding-modules2.png)


But within ```main.js```, 'noise' is probably not a very helpful reference. After all, we will be talking about lots of different animals, so maybe 'catNoise' is a more explicit name.

The important thing to understand is that, really, we can call this variable whatever we want. It doesn't need to be the same as the name of the function inside the module:
![](../../../Pictures/understanding-modules3.png)

And now that we have exported the ```noise``` function, we can invoke it inside ```main.js```, and you can see that running main ```main.js``` in our terminal is still console logging our faithful 'Meow'.

### Exporting more than one thing

There would barely be any point in creating a separate cat module, if that module only contained one function. So lets put another one in there.

This time, we'll make a function that tells us which kind of toys a cat normally plays with.

Now that we want to export more than one function from ```catModule.js```, we might as well turn ```module.exports``` into an object. Now that the whole cat module does more than just refer to the noise that a cat makes, it makes sense to rename this from ```catNoise``` to ```cats``` in ```main.js``` (in fact, for consistency, it's best for this variable to be the same as the module's file name).

And then, we'll have to change ```main.js``` to reflect this, by calling these as methods of the required module:
![](../../../Pictures/understanding-modules5.png)


Note: we were using ES6 shorthand above, because our method name (e.g. ```noise```) and function name (also ```noise```) were identical.  

This shorthand is just so that we don't have to bother writing key value pairs, when the key and value are the same. But if it helps, the picture above works in exactly the same way as:
![](../../../Pictures/understanding-modules7.png)
