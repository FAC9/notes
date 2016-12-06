# OAuth Project
## General OAuth workflow:
![](./oauth-flow.jpg)

## OAuth workflow with project (Github) example
![](./project-flow.jpg)
1. Server serves homepage to browser
2. Browser sends client_id & redirect_uri to Github
3. Github sends code back to browser
4. Browser sends code to server
5. Server sends secret, client_id & code to Github
6. Github sends access token to server
7. Server sends request to Github for more info (e.g. username) using the access token
8. Github sends response to server

## JWT in database or not
![](./databases-or-not.jpg)
### With database
- Access token & username into database
- JWT to contain username
- Send request, including JWT (in cookie or authorisation header)
- Get response
- Query database using the username (stored in the JWT)
- Database returns access token

### Without database
- JWT to contain access token
- Send request, including JWT (in cookie or authorisation header)
- Get response, containing token
