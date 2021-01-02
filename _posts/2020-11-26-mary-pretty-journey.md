---
layout: post
title: "Mary Pretty's journey"
date: 2020-11-26 00:53:31 +1000
cover_picture: "/images/indian-girl.png"
tags:
  - motivational
  - tyro
  - women-in-tech
  - chaos-monkeys
---

I had the pleasure to experience firsthand the journey of a brave woman who moved into the DevOps space. I believe her story can motivate many people so in this post I will share her story from my point of view.
<!-- more -->
## Background
Some weeks ago I had a catch-up with a friend of mine. We used to run a DevOps team together at Tyro in 2018/2019. He was and still is the team's Tech Lead. I was a Delivery Lead. At Tyro, the Tech Lead was focused on the technical solutions the team was creating. The Delivery Lead would be focused on the business value the team would be producing. An interesting fact about this is that the team members would report to the Delivery Lead. So the Delivery Lead was a People/Hiring Manager as well. And both the Delivery Lead and the Tech Lead would report to an Engineer Lead.

During our catch-up, I asked how the old team members were doing. He gave me the usual updates:

> Some people left, others moved to other teams, others rotated but were back, etc...

But one particular point caught my attention:
> *Mary Pretty* is still there and she is performing well.

*(Mary Pretty is not her real name, I'll protect her identity)*

When I heard that, a flashback started playing on head. 

## Chaos Monkeys early days
Back then our team, Chaos Monkeys, was part of a critical remediation initiative. We had very aggressive goals:

- Help breakdown the biggest company monolith into a microservice architecture.  Extracting the reporting capability into an independent service
- Migrate historical data out of the monolith database. So that the database could be trimmed to 3 months of data

_(I will write more about this project on another post, this is not the focus here)_

All that while adopting a new tech stack (containers on AWS ECS). And a new DevOps operational model: You build it, you run it.

The team was composed of Application Developers. We all signed up to be the first team inside the company to adopt the "You build it, you run it" model. That involved be on-call 24/7.
## My first interaction with her

One day, the Platform Tribe was doing a Tribe Demo and one of the items was “Monolith in containers”. To my surprise one of their engineers was able to run the monolith on containers. After the demo a bunch of tech leads and I went to talk to the engineer asking questions about how it was done. 
Most of the tech leads were curious about the technical details of memory, shared volumes, etc...
I was curious about the development process that led to a solution that most of the best technical minds we had didn't believe could be achieved.

She answered all the technical questions and my questions as well. I actually don't remember exactly her answers but it was good enough that from that moment forward I kept contact with her.

I soon learned that she didn’t have a great reputation. I believe she was demotivated during that phase. It was common to see her on the phone outside the working area (probably waiting for the monolith build to run - it could take hours :/ ). Her team had some people considered difficult to work with.

I found out, in one of the many management meetings, that her team would be disbanded. If we could not find other teams to accommodate them, the company would have to let them go ☹️ . She was hired as a Performance Test Engineer.  In the early Tyro days when Tyro was doing train releases, it would make sense to have such a role. 
By then, we were moving towards many deploys per day. With testers embedded into the teams. In such a scenario, her roles didn't make sense anymore.

When the Engineers leads asked if anyone would be willing to absorb any of the Performance Test engineers I saw the opportunity to bring her docker knowledge to our team.

I went to talk with her, to explain that it would mean a career change from Test/Infra to DevOps. She acknowledged it and after a few days, she accepted the challenge.

After a small internal interview process she joined our team. And then the fun started.

## She is not a developer

It didn’t take long for an interesting theme to show-up during my 1o1 sessions: **“She is not a developer!”**

Multiple team members told me on catch-ups that she was not “made of the same material” as the rest of us. She recognised that very soon as well. I remember that in one of the first catch-ups we had she was out of hope to become a developer. Everybody else in the team had more than 5 years of experiencie. A few with more than 10 actually.

While she was good with Testing and infra, she had never been a developer. Things like, Single Responsibility Principle, Functional Programming, Design Patters, OOP where common lang between the rest of the team but for her it was all new.

She was upset with the situation and it was clear she had doubts if she would be able to catch-up with the rest of the team. I could also see the fear of been fired while she was changing career. 
I told her in one of our first catch-ups: “Becoming a developer is not a days or weeks process. It will take years, but we can do it!”

Since then we started many different actions to help her.

## Adding value

With any programming task Mary Pretty would struggle to add value. And the feeling of being a weight to the team would just kill her motivation and she would eventually leave the company. So I had to do something.

The team was focused on functional requirements, but I knew that there were important items that we were not tackling because the urgent things were consuming all of our capacity. In the urgent things I found items that she could execute:

- Docker infrastructure
- Testing strategy for CI/CD pipelines
- Infrastructure refactoring
- Etc...

I discussed with the Tech Lead and he also saw the value in finally prioritising these items.
We then bumped up the priority of these items. During the team planning I mentioned that I would like Mary Pretty to lead that stream of work, but share the knowledge with the rest of the team. So she would never work alone on it, instead she would always be pairing with someone.

The team was used to pair, and we would rotate pairs every Tuesdays and Thursdays.

Every 2, 3 days Mary Pretty would be spreading her infra/testing knowledge with another team member.

I immediately notice that it changed the way the other team members would perceive her. And she also had something for fill proud of: Her contribution to the team.

## Unus pro omnibus, omnes pro uno
I kept asking for feedback about her to the other team members. I would normally approach it from the point of view "has she been a burden to you/the team?". It was interesting because the team very soon accepted her as part of the team and started defending her and suggesting tasks she could tackle.
I then changed my strategy and started recruiting people to help me with her. I asked a couple of team members to have catch-ups with her and teach her some of basic programming concepts: TDD, OOP, etc...
Soon enough most of them become teachers for who she would go and ask programming questions

## Becoming a developer

She accepted all the help and went beyond that. She would expend most of her weekends studing programming. We recommended her some books and she consumed it.

We normally would have our weekly 1o1 on Mondays, and she would tell me about a new programming concept she studied during the weekend. Some weekends she would skip to relax, but I would say that at least 80% of her weekends in her first year with us were dedicated to sharpener her coding axe.

I remember that she used to have lunch inside the company and during almost a year she would spend her lunch time asking questions to other developers and doing pairing session with other devs to validate programming exercises.

She also used all the learn to code site we would suggest her. I have never seem someone to dedicated into learning to code in such a short period of time.
## Performance Review

I have to highlight the amazing support I receive from my boss during the whole process. She could see Mary Pretty commitment and effort and we knew that she was the kind of professional we were looking for. But there was a issue, as a Performance Test Engineer, Mary Pretty had one of the highest salaries in the whole engineering department. During our weekly 1o1s I then started to mention that the performance review cycle was coming and that she probably would not be able to receive a generous salary increase as she was used to. But her response was that she was actually grateful for the opportunity of transitioning career while keeping her job.

The performance review happened almost one year after Mary Pretty joined our team, and she actually receive a great feedback from her peers. She not only had taught many new skills to her peers, but she had managed to develop her programming skills to the level where she would be able to get any XS, S, and even M item from the backlog and work on it with minimum support from the peers.

My supportive boss actually managed give her some financial incentive after all the effort we saw her putting during the last months.

## Key team member

One year after that, Mary Pretty was the go to person for many points of the solution we had developed. Her patience and skill to explain complex stuff made her our best person to on-board new team members in the complexity of our CI/CD pipeline. 

When she discovered that she was pregnant the whole team started giving suggestion to the upcoming boy. I still call him: Boy Pretty ;)

And on the months before she left for the maternity leave I had to deal with the problem of finding a way to survive without her.

## Conclusion

So, when I heard from the Tech Lead that she still there and is now a key team member my heart explods in happiness. Reflecting back on it, I’m so grateful for the opportunity of experiencing this firsthand. 

Thanks for been an whole model for us Mary Pretty. I will tell your story on any chance I have.