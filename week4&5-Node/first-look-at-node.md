Require in the module http (can call this variable anything, but 'http' is the most descriptive)

In theory, we can choose any port, so long as it is free.
4000 is the convention because we know that it is an empty port

Line 4-5:
  - When you respond to the client, you want a header and body in response
    - writeHead() enters the contents into the head of your response (unsurprisingly...)
    - write() alone is for the body

Request & response arguments will be in the form of an object

## Define keywords that you can then use (e.g. "start") to run particular files
Add "start" into "scripts" in package.json:
  - "node <main js file>"

Stop server & start again

Install nodemon so that it will listen for your changes
Don't put "nodemon" in your start script. Create another script (e.g. devStart) for when you want to use it.
Then you need to type "node run devStart", not just "node devStart"

## Declaring url variable
Making a request to your homepage, it will respond with "/"

### If statement
Ask node to give you back a response that is more descriptive

(We require the fs module for this)
dirname = current directory name
path to current html file
