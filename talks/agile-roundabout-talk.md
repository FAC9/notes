# Agile Roundabout

## Agile in the Cloud - Daniel (Cloudreach)

What is the Cloud - not hosting yourself (in your datacentre or on a server)

### Why Cloud leads towards Agile?
- Organisation doesn't have firm requirements or plans
- Reduces admin
- Customers aren't sure what they want, but seeing it in action helps their understanding

Similarities
- Programming languages
- Code management
- Continuous delivery
- Testing

Differences
- You are responsible for building the environments & the underlying structure
- Less tangible. Much harder to explain a firewall, for example

Challenges
Differences cause some challenges in Agile delivery
- Demos

Dependent on AWS to release

### Really doing Agile?
There is a vision to going Agile, but there are challenges with moving away from old methodologies. In practice, people ask for things that aren't really Agile. "We're going to do Agile but in a fixed scope".

Lack of Product Owners = a problem. They are the single point of contact that prioritises work and ensures value is maximised for a product. Insulates the tech team from dealing with these issues.

### Scaled Scrum
- Used retrospectives to grow our Scrum team
- Borrowed things from Nexus

3 teams of 7

### Keeping up quality
#### What we don't do
- Pair Programming
  - Buy-in from customer (view of paying for 2 people for the output of 1)
  - Remote development teams
- Full unit testing - only for the projects where going down = disaster
  - Struggled to get prioritised by the customer - incerease quality
  - Unit test certain pieces of code wehre quality is higher - the use case for having those unit tests was made by shipping production code that wasn't tested
- Continuous Delivery & Integration
  - Organisation is risk averse
- Philosophy management

#### What did we do
- Peer review

### "Not really" Agile Velocity Management
- Understand your velocity
- Leave breathing space
- Under-promise, over delivering
- Have a backup plan for blockers (blockers can mean months in Enterprise)
  - Reserve amount of stories - not mission-critical, but still provides value, so that developers aren't sitting, doing nothing

### Scrum / Kanban / XP
Loved Kanban, wish we could have done it. But they didn't understand it. Scrum allowed us to bridge that gap slightly. 2 weeks gave them a bit of confidence & built trust


## Keeping your CI / CD pipeline as fast as it needs to be - Abraham Marin-Perez (Equal Experts)

[Slides](http://www.slideshare.net/AbrahamMarinPerez/agile-roundabout-2017-01-keeping-your-cicd-system-as-fast-as-it-needs-to-be)
### Why you do this
Problems of size:

- Slow feedback: should wait til build is done until you start writing more code. If your build takes 1 hour, rather than 10 mins, in order to be productive
- Impact on ability to meet our Service Level Agreements (SLAs): if your SLA is 4 hours and your build takes 1 hour, you only have 3 hours left. This often means that you don't hit your SLAs, which loses you money
- Pay per use: Lots of people put their CI into cloud environments. More instances = higher build at end of month. If you have more things stacking up in the queue, you have more things in

Speed up by:
- Doing what you do faster
- Do fewer things

If you have one big thing (super app), instead of doing one thing faster, break it down into smaller things and decide on priorities.
- Turn 1 build into 2: app backend, app frontend

Microservices:
You have 4 services. As the grow, they will probably start having similar parts. Take out these similar parts and build it separately, but all of your 4 services use that new component

### How to achieve this
Real case scenario:

If you want to understand your network and how things affect each other, you need to start collecting data and analysing it. Found out, 28% of changes were happening in one particular artefact. This means that its dependents are also being rebuilt 28% of the time. Look at the artefact with the second highest number of changes - at 20%. There was an artefact that relied on both - this contains 48% of changes. Repeat this analysis for all the bubbles (artefacts). You can represent artefacts by whether they are "hot fixes" - lowest run frequency -> highest run frequency.

When you see nodes of the same colour, you can tell which have cascading effects on the others i.e. which ones are suffering (needing to be rebuilt) purely because of their dependencies?
Change the size of the bubbles depending on the frequency of the builds. Then you can see, which ones probably have bloated code.

### Once we have the strategy in place, how do we make further changes
Is our pipeline fast enough, or do we need to make it faster? "Fast enough" is a relative term. Need to establish a benchmark - this will depend on your business. Define a metric, by which you measure, and then set thresholds.

**Useful metrics**
- Build time (BT): time an individual build takes to run (size of bubble)
- Change rate e.g. 28%
- Impact time (IT): total time
  - single dependency - IT(A) = BT(A)
  - serial execution - BT(A) + IT(B) + IT(C)
  - parallel execution -IT(A) = BT(A) + max(IT(B), IT(C))
- Weighted impact time - WIT(A) = IT(A) * CR(A): impact time of a build according to its change rate - ???AIT = WIT/AT + WIT(B) ???
- Average impact time - AIT = WIT(A) + WIT(B) + ... + WIT(Z)

**Sample thresholds**
- Average impact time - how well your system has scaled
- Maximum impact time - worst case scenario e.g. doesn't take more than 45 mins  (calculate total BT)
- Maximum impact time for critical things e.g. payment gateway vs whole website - tricky because of dependencies

Manual processes take a lot of time (making the powerpoint node graph)
