---
layout: post
title: "Another success case of a woman in IT transitioning career"
date: 2021-01-07 00:53:31 +1000
cover_picture: "/images/indian-girl.png"
tags:
  - motivational
  - tyro
  - women-in-tech
  - chaos-monkeys
---

I had the pleasure to experience firsthand the journey of a brave woman who moved into the DevOps space. I believe her story can motivate many people so in this post I will share her story from my point of view.
<!-- more -->

# Background

Some weeks ago I had a catch-up with a friend of mine. We used to run a DevOps team together at Tyro in 2018/2019. He was and still is the team's Tech Lead. I was a Delivery Lead. At Tyro, the Tech Lead was focused on the technical solutions the team was creating. The Delivery Lead would be focused on the business value the team would be producing. An interesting fact about this is that the team members would report to the Delivery Lead. So the Delivery Lead was a People/Hiring Manager as well. And both the Delivery Lead and the Tech Lead would report to an Engineer Lead.
During our catch-up, I asked how the old team members were doing. He gave me the usual updates:

> Some people left, others moved to other teams, others rotated but were back, etc...

But one point caught my attention:

> Manpreet is still there and she is performing well.

When I heard that, a flashback started playing on my head.

# Chaos Monkeys early days

Back then our team, Chaos Monkeys, was part of a critical remediation initiative. We had very aggressive goals:
Help breakdown the biggest company monolith into a microservice architecture. Extracting the reporting capability into an independent service Migrate historical data out of the monolith database. So that the database could be trimmed to 3 months of data
_(I can write more about this project on another post, this is not the focus here)_


All that while adopting a new tech stack (containers on AWS ECS). And a new DevOps operational model: You build it, you run it.
The team was composed of Software Engineers. We all signed up to be the first team inside the company to adopt the "You build it, you run it" model. That involved be on-call 24/7.

# My first interaction with her

One day, the Platform Tribe was doing a Tribe Demo and one of the items was “Monolith on containers”. To my surprise, one of their engineers was able to run the monolith on containers. After the demo, a bunch of tech leads and I went to talk to the engineer asking questions about how it was done. Most of the tech leads were curious about the technical details of memory, shared volumes, etc... I was curious about the development process that led to a solution that most of the best technical minds we had didn’t believe it could be done. It was common sense that it was impossible to Dockerize the monolith.

She answered all the technical questions and my questions as well. She answered all the questions and it left a good impression on me. She knew what she was talking about. From that moment forward I kept contact with her.

I soon learned that she didn’t have a great reputation. I believe she was demotivated during that phase. It was common to see her on her phone outside the working area (probably waiting for the monolith build to run - it could take hours :/ ). I came to learn afterwards that her team had some people considered hard to work with.

During a management meeting, I found out that her team would be disbanded. They were the last test team inside the company. And now all the teams had an embedded tester so the company didn't need a dedicated testing team anymore. If we could not find other teams to accommodate them, the company would have to let them go ☹️ .
When the Engineers Leads asked if anyone would be willing to absorb any of the Performance Test engineers I saw the opportunity to bring her docker knowledge to our team. I discussed the case with my boss and we believed it could work out.
I went to talk with her, to explain that it would mean a career change from Test/Infra to DevOps. I mentioned that the team was made of Software Engineers. She acknowledged it and after a few days, she accepted the challenge.

After an internal interview process, she joined our team. And then the fun started.

# She is not a developer

It didn’t take long for an interesting theme to come up during my 1o1 sessions: “She is not a developer!”

Many team members told me on our catch-ups that she was not “made of the same material” as the rest of us. She recognised that very soon as well. I remember that in one of the first catch-ups we had, she was out of hope of becoming a developer. Everybody else in the team had more than 5 years of experience. A few with more than 10 actually.

While she was good with Testing and infra, she had never been a developer. Things like "Single Responsibility Principle", "Functional Programming", "Design Patterns", "OOP" were new concepts to her.

She was upset with the situation and it was clear she had doubts if she would be able to catch-up with the rest of the team. I could also feel she was afraid of losing her job in the process. I remember that in one of our 1o1 I mentioned that “becoming a developer is not a days or weeks process. It will take years, but we can do it!”

Since then we started many different actions to help her.

# Adding value

With any programming task, Manpreet would struggle to add value. And the feeling of being a weight to the team would just kill her motivation. I knew that she would eventually leave the company if the situation didn't change. So I had to do something.

During that time, the team was focused on functional requirements. But my Tech Lead and I knew that there were important items that we were not tackling. The urgent things were consuming all of our current capacity. In the important things we had items like:

- Docker infrastructure
- Testing strategy for CI/CD pipelines
- Infrastructure refactoring

I discussed it with the Tech Lead and he also saw the value in finally prioritising these items. We then bumped up the priority of these items in our backlog. During a planning session, I mentioned that I would like Manpreet to lead that stream of work. But she would have to share the knowledge with the rest of the team. So she would never work alone on it, instead, she would always be pairing with someone.

The team was used to pair, and we would rotate pairs every Tuesdays and Thursdays.
Every 2 ~ 3 days Manpreet would be spreading her infra/testing knowledge to another team member. This was a great opportunity to create a bond with the other team members as well.

I immediately noticed that it changed the way the other team members would perceive her. And she also had something to fill proud of. She was adding value to the team.
# Unus pro omnibus, omnes pro uno

I kept asking for feedback about her to the other team members. I would normally approach it from the point of view "has she been a burden to you/the team?". They very soon accepted her as part of the team. To the point of defending her and suggesting tasks that she could tackle. I then changed my strategy and started recruiting people to help me with her. I asked a couple of team members to have catch-ups with her and teach her some of the basic programming concepts: TDD, OOP, etc... Soon enough most of them become teachers for who she would go and ask programming questions.

Now, it was not only my mission to offer her support on her journey. It was a mission shared with other team members. There were many occasions where I saw people making an effort to do not leave her behind on plannings and meetings.

In our planning sessions, for instance, it was common to ask someone to draw on the board. A few times the team encouraged her to draw her ideas and the team supported her the whole time.

It was not easy and perfect the whole time. To some team members, it was harder than to others. I had to do a few interventions here and there. In a few occasions, I had to ask her to reduce the number of questions to some specific team members for some time. Mostly when one of our highly technical people were researching solutions to hard problems. Over time she developed this perception as well, and she was improving and depending less and less on peers to finish tasks.

# Becoming a developer

She accepted all the help and went beyond that. She would spend most of her weekends studying programming. We recommended some books and she loved them.

We usually had our weekly 1o1 on Mondays. It was common for her to tell me about a new programming concept she learned during the weekend. She invested a good amount of her personal weekend time to learn to code. Some weekends she would skip it to relax, but I would say that at least 80% of her weekends were dedicated to sharpening her coding skills.

She also found a developer from another team who was now dedicating lunchtime to teach her how to code. So it was common for both of them to have lunch in a meeting room with a laptop plugged to a projector. On some days, more people would join, but the two of them were always there. IMHO, It was important to find someone outside the team as well. As we used to pair the whole day, during lunch it was important to talk to other people.

She also used all the learn to code sites we would suggest to her. I have never seen someone so dedicated to learning to code in such a short period of time.

# Performance Review

I have to highlight the amazing support I receive from my boss, Kate, during the whole process. Kate followed up Manpreet's case very closely. Kate saw her commitment and effort. Kate and I knew that Manpreet was the kind of professional we were looking for. But there was an issue, as a Performance Test Engineer, Manpreet didn't have a bad salary. We were not sure we would be able to give her any salary increase in the next salary review. I mentioned to Manpreet that the performance review cycle was coming and that I was not sure she would be happy with the outcome. But her response was that she was actually grateful for the opportunity of transitioning career while keeping her job.

The performance review happened almost one year after Manpreet joined our team. She received great feedback from her peers. She had taught many new skills to her peers (Docker, testing, etc...). She also managed to develop her programming skills. Now she was able to work effectively on eXtra Small, Small, and even some Medium tasks with minimum support from her peers. She was also a great team member, supporting and integrating everybody.

In the end, Kate <3 actually managed to give her some financial incentive. I am so grateful for that as after all the effort we saw her putting during the last months she deserved it.

# Key team member

One year after that, Manpreet was the go-to person for many points of the solution we had developed. Her patience and skill to explain complex stuff made her our best person to onboard new team members in the complexity of our CI/CD pipelines.

When she discovered that she was pregnant the whole team started giving name suggestions to the upcoming boy. I still call him: Boypreet ;)

And in the months before she left for maternity leave, I had to deal with the problem of finding a way to survive without her.

# Conclusion

I left Tyro weeks before she came back from maternity leave.

So, when I heard from the Tech Lead that she was still there and is now a key team member my heart exploded in happiness. Reflecting back on it, I’m so grateful for the opportunity of experiencing this firsthand.

Tyro managed to keep a dedicated professional with unique skills and with the ability to learn new skills. Manpreet managed to transition her career into DevOps and learned heaps about Software Engineering. The team received someone who was awesome at integrating the work and people to accomplish a mission. And I got a new friend.

Thanks for being a whole model for us Manpreet. I will tell your story on any chance I have.
