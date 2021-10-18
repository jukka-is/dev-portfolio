---
title: 'Web Application'
description: 'Hike Logger'
techs: 'node.js, javascript, mongodb, css, api'
excerpt: 'Application for logging hikes in the wilderness and sharing the data for added safety. I chalenged myself to learn more node.js as well as Google APIs with OAuth 2.0, and Hike Logger is result of that challenge.'
cover_image: '/images/portfolio/item-11-1.jpg'
git: 'https://github.com/aaxxiiss/hike-logger'
url: 'https://hike-logger.jukkaisokoski.fi/'
category: 'personal'
id: 11
---

Hike Logger is a web application for logging hikes in the wilderness and sharing the data for added safety. The basic concept is to provide user a way to create a hike journal and add location and time based text logs to it. This information can be shared with other users, for example with family members back home. During the hike, logged journal improves safety of the hiker in case of an emergency, but mainly, after the hike, journal stores the route information and observations during the trip for future memories.

I wanted to learn more node.js, so building Hike logger as a CRUD application with Node.js / Express backend was the choice. Data is stored to Mongodb database with Mongoose. User authenthication is handled with Passport library and is utilising Google APIs with OAuth 2.0. Views are templated with Handlebars and map functionalities are rendered on the front-end with Leaflet.js.

Current version of the application is a basic proof of concept. The goal is to develope application more towards a progressive web app, making the logging functionality work better for the users in conditions with limited bandwith.
