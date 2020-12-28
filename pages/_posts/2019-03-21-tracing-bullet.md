---
layout: post
title: "Tracing Bullet Pattern"
cover_picture: "/images/responsive/tracing-bullet.png"
date: 2019-03-21 11:31:31 +0000
image: "/images/responsive/tracing-bullet.png"
comments: true
tags:
  - pattern
  - integration
  - design-pattern
---

Integration points are critical components of a software architecture. While the software is manipulating data in-memory, it is operating in a controlled environment. But when you have to move data between different components then you have a higher chance of having problems. The tracing bullet is a delivery pattern that addresses this risk early on in a software delivery project.

<!-- more -->

The analogy comes from a controversial source. According to Wikipedia tracing bullet is:

an ammunition built with a small pyrotechnic charge in their base. Ignited by the burning powder, the pyrotechnic composition burns very brightly, making the projectile trajectory visible to the naked eye during daylight, and very bright during nighttime firing. This enables the shooter to make aiming corrections without observing the impact of the rounds fired and without using the sights of the weapon. Tracer fire can also be used to signal to other shooters where to concentrate their fire during battle.

The software delivery analogy is: "How we can send a tracing message (not a bullet) through our new software so that we can inspect its behaviour?"

## How to implement it

This is a delivery pattern that is not hard to apply. Instead of building all the layers in your new project, focus on the integration points and observability. Let the business rules and acceptance criteria out.
Suppose that you have the following system architecture:

This is a simplified version of an ordering system. The first request creates a new order. The second request updates marks the order as payed and add the Order to a processing queue. The Dispatcher component consumes the queue and ensures the order fulfilment.

If we want to create a tracing bullet for this system we could:

* Implement a minimal entity with a ID and a STATE representation
* Make one request to the rest component to create the new entity
* Make a second request to the rest component to update the entity
* Observe if the new entity was sent to the processing queue
* Observe if the new entity was processed by the dispatcher component

There is no code to check stock, or prevent duplication, or dead letter, or price validation. The entity representation is not completed as well. It has only one ID and a state field. For now we are not worrying about data integrity.
The implementation can be as small as having only a single fat controller in the rest component. The whole point of the Tracing Bullet is to be able to Observe the flow. Ideally, the tracing bullet should be fired in production environment. Although there is value in running the tracing bullet in UAT or pre-prod, the real value comes from knowing that the system works where it must work (production environment)!

## Why to start with the integration points?

In Release It! Design and Deploy Production-Ready Software Michael T. Nyger wrote:
“Integration points are the number-one killer of systems. Every single one of those feeds presents a stability risk.”
And I have to agree with Michael. When a system is manipulating data in-memory it is operating in a safe environment. The risk comes when this data has to travel to a different location. This can be a database, file, or other address in the network. That is the kind of risk that is better to be adressed early in the project.
This is particularly important if you are introducing new integrations points. In a world of cloud adoption and hybrid cloud implementation this is a must.
Starting with the integration points gives as the confidence that all the components can talk to each other.

## When to use it
I recommend the use of this pattern as the first milestone of a new project. Or as a first milestone for a new feature in an existent project.

## Caveats
It is important to protect the production environment from side effects. You might have to use feature-toggles to prevent side effects. The neighbourhood might need some work to understand the tracing bullet as well. A common way to solve this is to replace the real implementation with a log line. In the example above, we could change the component that consumes the queue to identify the item as a tracing bullet and log a message. This would give us the confidence that the integration is working while preventing a fake order to be fulfilled.

## Conclusion
The tracing bullet pattern can help you address the "last mile problems" earlier in your project. It doesn't require much effort to implement it. Actually the hard part of implementing this pattern is to keep in mind that less is more.
