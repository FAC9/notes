## Redux Q&A##

Q: Does anyone use Redux without React out there? Examples of such projects?
- it’s not common, but you can do it
- both are great for dealing with states
- Redux sort of evolved alongside React, but its inspiration came from Elm
- Redux is completely pure, there are no dependencies (unlike React)

Q: When would you not use Redux?
- Redux is good for single-page applications with many state changes; it’s not quite as helpful for many-page apps with fewer state changes

Q: Can you use Redux on the back-end, e.g. with NodeJS?
- yes (see the full-stack Redux tutorial)

Q: Do you ever use mutative code?
- there is nothing wrong with using it within a function
- mutative code is faster, sometimes (rarely) need to use it for performance reasons

Q: What kind of coding were we doing before functional programming (at FaC)?
- it was probably a mixture of imperative and functional

Q: Is it better to start a project using Redux or only add / refactor when you see the need?
- it depends; it’s good to be aware of it, and then you use it if you need it
- use it when you are dealing with lots of data that’s going to change over time, and that you want to keep track of
- use it when you want ‘a single source of truth’, based on which (for example) multiple DOM elements are updated
- information flows unidirectionally, the different parts of the app are kept in sync
- try doing your project without Redux first and ‘feel the pain’

Q: Do you think that different programming paradigms are better suited for certain tasks?
- yes, but the same problem can also be viewed in different ways
- probably not the best idea to use JavaScript for OOP

Q: In functional programming, is in nearly always better to use function expressions rather than function declarations?
- it’s more a style than anything

Q: Redux vs. cookies: what do you store in cookies?
- a cookie can ‘rehydrate’ the state (set the initial state)
- there are modules that allow you to update the cookie each time the state changes

Redux allows you to ‘replay’ a series of user’s actions and reproduce the bug, which can be very helpful with debugging
