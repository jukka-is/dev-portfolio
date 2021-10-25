---
title: 'Web Application'
description: 'Hike Logger'
techs: 'node.js, javascript, mongodb, css, api'
excerpt: 'An application for logging hikes in the wilderness and sharing the data for added safety. I challenged myself to learn more about node.js as well as Google APIs with OAuth 2.0. Hike Logger is the result of that challenge.'
cover_image: '/images/portfolio/item-11-1.jpg'
git: 'https://github.com/aaxxiiss/hike-logger'
url: 'https://hike-logger.jukkaisokoski.fi/'
category: 'personal'
id: 11
---

Hike Logger is a web application for logging hikes in the wilderness and sharing the data for added safety. The basic concept is to provide the user with a way to create a hiking journal and add location and time-based text logs to it. This information can be shared with other users, for example with family members back home. During the hike, logged journal improves the safety of the hiker in case of an emergency - but mainly, after the hike, the journal stores the route information and observations during the trip for future memories.

I wanted to learn more about node.js, so building the Hike Logger as a CRUD application with Node.js / Express backend was the choice. Data is stored in a MongoDB database with Mongoose library. User authentication is handled with the Passport library and is utilising Google APIs with OAuth 2.0. The views are templated with Handlebars and map functionalities are rendered on the front-end with Leaflet.js.

The current version of the application is a basic proof of concept. The goal is to develop the application more towards a progressive web app, making the logging functionality work better for the users in conditions with limited bandwidth.
