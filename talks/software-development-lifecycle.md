# Requirements-to-deployment talk by Andrew Merrell (Sky)

## Plannning day to day
- Product owner, analyst
- Sky always pair programmes
- 4 or 5 different cards come in, each one is given a complexity rating (0, 1/2, 1, 2, 3, 5, 8, 13, 20, 40, 100, ?, infinity) - helps product owner to communicate priorities and developers to estimate timing
- at end of week, add together the points on the cards they have managed to get through - use this for estimation of how much work they can get through at any given week
- different teams do this in different ways. Some do this in time estimates (usually well-defined, existing teams who know how to work with each other well)
- majority of teams run sprints on a weekly basis, some do 2-weekly sprints - teams largely have autonomy
- pin cards to whiteboard, with each columns representing the card's stage in the life cycle:
  - backlog
  - dev
  - Pull Request
  - Quality Assurance
  - ready to deploy
  - testing
- starting to remove "testing" as a phase i.e. stop having a team of testers, putting this back into the job of each developer

## Showcase (to stakeholders)
- mainly driven by product owner
- showcase delivered based on user stories
- explain what has been built, whether/why a feature has been changed slightly
- chance for product owner to raise any concerns before deployment
- moving towards continuous deployment
  - move a week's worth of deployment into an hourly basis
  - the longer your development cycle is, the more bugs can work their way in & the longer debugging takes

## Retrospective
- What went well? - Glad - Go
- What annoyed us? - Mad - Stop
- What could've gone better - Sad - Continue

The shit sandwich - G-S-C better than S-G-C?

### How to make resolutions actionable
Focus on things in our control:
- raise our own card / user story  e.g. As an engineer...

Sometimes there are things out of our control e.g. affected by another team - this can be thrown to them.

## Monitoring and support
Try to catch things before customers contact us, by using monitoring tools to check:
- number of errors
- response time

Once highlighted by a user:
- Record as much as possible - type of browser they are on, snapshot of everything they have in their account (account state), etc.
- Put these variables into our tests (by running functional testing with a mock service - [Sentry](https://sentry.io/welcome/)
- Bug fix

Minor production instances - to be fix within a week
Major production instances - have to be rolled out in an hour

When my phone rings, I have to have answered it within 20 mins & resolved the issue. If I don't pick up, the call goes up the chain. Eventually reaches boss.

# Info on working for Sky

## Stack
- Frontend: JavaScript, React and Redux
- Backend: Scala, Java

## Moving between teams
Can join another team through secondment, or informal version: 'boomerang' - swap people between teams for a few weeks. Very easy to do either. Andrew boomerangs a lot. Can then choose to move and join the other team, but this is a larger shift in career.

## Training
Majority of training is done on the fly, sitting with a senior engineer. Sky is big on constant mentoring/coaching. Time out is given for classes and training - there is a scheme for Sky's online courses, either in your own time or during Sky time. Just have a conversation with your Scrum master, asking for 2 hours / a week to learn X. Employees run their own training sessions for each other and set up different internal courses e.g. for seniors.

## Previous experience
- Not very important to have a CS degree to work at Sky
- Look much more at previous jobs and experience
- There are different levels for different roles. Lack of job experience is ok for junior developers, but hopefully you have worked on your own side projects:
  - tend to look at applicants' most recent projects
  - not interested in subject matter itself, it's about finding out how you think
  - did you write tests?

### Importance of testing
If not, "it's pretty much a no go". If you haven't written tests, go back and add them. The key thing is that you are thinking about it, even if you weren't from day one.

Sometimes we write some form of test, then write the code, and then write the actual test. "We love it if people can write test-_driven_ development. But most people aren't really good at that."

### Additional notes from Andy

>These are some notes I jotted down on my journey back, feel free to pass on to the group:
>
>I mentioned Sentry, there's also NewRelic, AppD and more, they're referred to as Real User Monitoring (RUM tools), a quick google will give more information, but it's critical we know the experience our customers are having!
>
>Companies also assess you as a person for culture fit, at Sky this is just as important as your ability to code. We're interested in your ability and hopefully willingness to learn - think of way to demonstrate or communicate this in interviews/assessments.
>
>If you do a coding exercise, ensure you explain your rationale, you don't always need to do TDD but you should write some tests!! We fail candidates for not writing a single one, we actually don't mind if you don't finish the exercise, we're evaluating your technical decision making, your ability to communicate, the tests you write and coverage. If you run short on time and don't complete the coding exercise explain what you would cover given more time and where you're planning to take the code or do next, this might be "red, green, refactor". Code needs to work doesn't need to be elegant on first attempt, if you know it works but could be written better given more time, make sure you say it and explain what you might do! Allows interviewers to assess your thought process.
>
>Don't know an answer? Don't blag it, be honest! This could be a way to demonstrate willingness to learn, you could explain very briefly how you might research or find the answer if given the job for example.
>
>Check out developers.sky.com for the developer blog. Checkout workforsky.com for technology jobs and links to software engineering academy, if you want to know more about work life balance/out campus there is stuff above but most staff use #lifeatsky on twitter to post pictures etc... suggest you look there too, then you don't need to just take my word that Sky is an awesome place to work!
>
>Thanks, Andrew
