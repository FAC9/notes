## Guardian dev presentation

150 people working on the Guardian website

The site is built on many separate apps
- ensures that if any of them dies it doesn't break the whole site

If the website goes down, it would not affect users’ experience for 48 hours

Caching is key, otherwise would not be able to serve the 30 million of users
- but need to update frequently, which adds a level of complexity

95% of online advertising is covered by Google and Facebook

At Guardian, everyone is responsible for their own code, there is no QA department

Data analysis is a big part of what Guardian does

A/B testing (split testing): compare two versions of a website, see which one performs better

Unit testing: you know exactly what’s failed, makes it easy to debug

### Code review

PostCSS: lints your CSS (e.g. prefixes)

Prefix any elements that will be used by JavaScript with ‘js’

Try to declare variables within a function and not share them between functions
- if you need to use global variables, it’s better to declare them on individual lines

Favour simplicity and readability over optimisation

There is a performance cost each time you use ‘document.something’
-	try to update the DOM In fewer steps

Use verbs in function names (what does it do?)
- then can also use shorter local variable names (function tells you the context)
- can avoid comments if your code is clear and var / function naming is informative
