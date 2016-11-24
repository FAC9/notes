# Testing

Look at other people's tests!

- Pick an existing problem
- Find a repo where someone has solved that problem (or made a good attempt), preferably with comprehensive documentation
- Read throught their Readme, read through their code, read through their tests

**Try contributing to an existing repo!**  
If you see a repo that is not complete in some form on another, raise an issue and ask whether they would like your collaboration to improve it.  
e.g. Would you accept a PR with tests?
If you can take it from a stream of consciousness, to a well-documented repo, all the better.

## How small is too small for a test?

There is no hard and fast rule. It probably depends on what you are building.

**In the context of our autocompleters**
If you find yourself writing one line functions, you may have gone to far (in functional programming, you will find this, but don't worry about functional programming for now)

**However**, take a typical banking transaction:  
If I make a transaction, I want to know that my balance is not going to go below 0.  
You could probably write 100 tests for that one tiny thing. To some degree, it depends on how critical it would be if that untested part of your code went wrong.

## Can I deleting early-stage tests

If the original test is no longer relevant, you could delete it, _providing the original goal is still being met_.

That's why it is critical to break your stories down into small steps. If the original code that you wrote is now obselete, because it no longer has a bearing on the overarching problem that you are trying to solve, then deleting it is justified.

## Refactoring someone else's code

It is only "refactoring" if there are tests! Otherwise you are just stabbing around in the dark, using trial and error and you are very likely to break things.

Generally, refactoring someone else's code is one of the hardest things you will do, but a necessary skill. You could be doing it to reduce complexity, improve performance, make it more readable, etc (paying off some technical debt).
