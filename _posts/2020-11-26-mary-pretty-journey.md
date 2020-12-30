---
layout: post
title: "Mary Pretty's journey"
date: 2020-11-26 00:53:31 +1000
cover_picture: "/images/indian-girl.png"
tags:
  - motivational
  - tyro
  - women-in-tech
---

Last week I had a catch-up with an ex-colleague. We use to run a DevOps team together at [Tyro](http://www.tyro.com). He was, and still is the tech lead, and I was Delivery Lead/People Manager.

<!-- more -->

I was curious about the people from the team we used to lead together and he gave me the updates:

> Some people left, others moved to other teams, others rotated but were back, etc...
But he mentioned one thing that I caught my attention:
> Mary Pretty* is still there and she is performing really really well.

When he said that a whole flash back movie started playing again on my memory. Mary Pretty, was a non-developer ops woman who transitioned successfully to become a developer. Her story is worth sharing.

## Background information

Our team back then was part of a critical remediation initiative with very aggressive goals:

- Help breakdown the biggest monolith in the company
- Extract the reporting capability out of the monolith
- Migrate historical data out of the database, so that the database could be trimmed to 3 months of data

All of that while adopting a new tech stack (containers in ECS on AWS) and a new DevOps operational model: You build it, you run it.

When I assumed the team I had 2 years in the company already, and during my whole time I always heard from multiple Tech Leads that they have tried to put The monolith in a container and it was just too hard. The database was the biggest problem.

Until one day, the Platform Tribe was doing a iteration demo and one of the items was “Monolith in containers”. To my surprise one of their engineers was able to run the monolith not in a single container, but in multiples actually. After the demo I went to talk to the engineer asking more details. I was curious about the process that lead to a place that many others said it would never be possible to achieve.

To my surprise the engineer said something along the lines: “It was simple, I just had to divide and conquer... trim the DB... use multi-stage Dockerfile... etc...”. It was simple but genius.

Since then I started paying attention to her and keeping in contact.

I soon learned that she didn’t have a great reputation. She was hired as a Performance Test Engineer. A role that the company was not willing to keep. And looks like she was not motivated as well. It was common to see her on the phone outside the working area.

I found out, in one of the [many] management meetings, that her team would be disbanded and if we could not find another team to accomodate them, the company would have to let them go ☹️

I knew that my team would have to make heavy use of Docker. We had just lost our strongest person with Docker a few weeks ago. I mentioned to my boss that I would like to give Mary Pretty a chance.

I went to talk with her, to explain that it would mean a career change from Infra to Dev[Ops]. She acknowledge it and after a few days she accepted the challenge.

After a small internal interview process she joined our team.

## She is not a developer

It didn’t take long for an interesting theme to show-up during my 1o1 sessions: “She is not a developer.”

Multiple team members told me on catch-ups that she was not “made of the same material” as the rest of us. And she also said that. I remember that in one of the first catch-ups we had she was out of hope to become a developer. Everybody else in the team had more than 5 years of experiencie. A few with more than 10 actually.

Back them I had just finished reading the Give and Take from Adam Grant, and I was following his podcasts as well. And in one chapters or in a podcast he told the story of a finance professor that had a ridiculous ratio of students who would achieve CFO positions on Fortune 500 companies. His secret was that he would imagine a great future for his students, even if the students didn’t believe on it. I decided to apply the same technique with Mary Pretty.

I told her in one of our first catch-ups: “Becoming a developer is not a days or weeks process. It will take years, but we can do it!”

Since then we started many different actions to help her.

## Adding value

With any programming task Mary Pretty would struggle to add value. And the feeling of been a weight for the team would just kill her motivation and she would eventually leave the company. So I had to do something.

The team was focused on functional requirements, but I knew that there were important items that we were not tackling because the urgent things were consuming all of our capacity. In the urgent things I found items that she could execute:

- Docker infrastructure
- Testing strategy for CI/CD pipelines
- Infrastructure refactoring
- Etc...

As I was the Delivery Lead, I bumped some of this items up in the priority list. During the team planning I mentioned that I would like Mary Pretty to lead that stream of work, but share the knowledge with the rest of the team. So she would never work alone on it, instead she would always be pairing with someone.

The team was used to pair, and we would rotate pairs every Tuesdays and Thursdays.

Every 2, 3 days Mary Pretty would be spreading her infra/testing knowledge with another team member.

I immediately notice that it changed the way the other team members would perceive her. And she also had something for fill proud of: Her contribution to the team.

## Becoming a developer

But it was just a temporary solution. I knew that at some moment the infrastructure work would be done and she would have to move back to the hard work of refactoring a giant java monolith into Kotlin micro-services. Because we would pair, wherever she had to pick a programming task she would almost consume the whole morning of our Tech Lead and/or another strong developer. It was a pain for the rest of the team. After a few complains from multiple team members I decided to turn “my problem in our problem”. I then went to the most strong technical people in the team as asked for strategies to help her accelerate her learning curve. Some of them offered to help her. Some recommended books, courses, good contents, etc...

She accepted the help and went further. She asked help from people from another teams.

We normally would have our weekly 1o1 on Mondays, and she would tell me about a new programming concept she studied during the weekend. Some weekends she would skip to relax, but I would say that at 80% of her weekends in her first year with us were dedicated to sharpener her coding axe.

I remember that she used to have lunch inside the company and during almost a year she would spend her lunch time asking questions to other developers and doing pairing session with other devs to validate programming exercises.

## Performance Review

I have to highlight the amazing support I receive from my boss during the whole process. She could see Mary Pretty commitment and effort and we knew that she was the kind of professional we were looking for. But there was a issue, as a Performance Test Engineer, Mary Pretty had one of the highest salaries in the whole engineering department. During our weekly 1o1s I then started to mention that the performance review cycle was coming and that she probably would not be able to receive a normal salary increase as she was used to. But her response was that she was actually grateful for the opportunity of transitioning career while keeping her job.

The performance review happened almost one year after Mary Pretty joined our team, and she actually receive a great feedback from her peers. She not only had taught many new skills to her peers, but she had managed to develop her programming skills to the level where she would be able to get any XS, S, M item from the backlog and work on it with minimum support from the tech lead.

Happily my boss and I managed to actually give her some financial incentive after all the effort we saw her putting during the last months.

## Key team member

One year after that, Mary Pretty was the go to person for many points of the solution we had developed. Her patience and skill to explain complex stuff made her our best person to on-board new team members in the complexity of our compliance CI/CD pipeline. 

When she discovered that she was pregnant the whole team started giving suggestion to upcoming boy. I still call him: Boy Pretty ;)

And on the months before she left for the maternity leave I had to deal with the problem of finding a way to survive without her.

So, when I heard from the Tech Lead that she still there and is now a key team member is something that I’m so proud of. Reflecting back on it, I’m so grateful for the opportunity of experiencing this firsthand.

Thanks for been an whole model for us Mary Pretty.