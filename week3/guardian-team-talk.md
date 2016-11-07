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

### General info about the Guardian dev department

* Around 50% of the 150 people working on the website are developers.
* The Guardian dev team is smaller than the BBC team (one of the reasons why BBC website offers strict browser support). Also, NY Times have a big team of 400 developers.
* Flexibility to move between different teams (e.g. Stephan changed from senior developer to product manager)
* They are aiming to add, improve and update the existing website documentation, check the relevant docs in their GitHub repo [here](https://github.com/guardian/frontend) .

### Information about the Guardian website

* The website has 4 different versions to serve users around the globe.
*  When requests come in, the responses are dealt with Fastly (which is a service that provides frequent caching among other things, however when content updates are necessary, the cache is forced to clear). Guardian doesn't have their own servers to handle content delivery, as this requires expensive infrastructure.
* They use Scala in the back-end, which is a statically typed language (i.e. type checking is performed during compile-time as opposed to run-time).
* Guardian is on Google AMP (short for Accelerated Mobile Pages). Google AMP have a JS library that you are able to use by adding components in the HTML headers of your page. The benefit is that the app is actually pre-rendered in Google results, so you have instant access to the page.

## Code review

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

Try to use *pure* functions to avoid having side effects in the global scope or other parts of a program (therefore, more scoped variables are better than fewer global ones).
