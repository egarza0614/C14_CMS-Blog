# C14_TechBlog
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit)
This project is licensed under the MIT license. You can view the license [here](https://opensource.org/licenses/mit).
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)

## Description
CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. It follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

### Installation

1. Clone this [repository](https://github.com/egarza0614/C14_TechBlog).
2. Install dependencies: `npm install`
3. Create the database: 
    psql -U postgres 
    \i db/schema.sql
4. Seed the database: `npm run seed`
5. Start server: Node server.js
6. Start the application: node index.js

### Usage

1. This application is live [here](https://c14-techblog.onrender.com/).

## Questions
* GitHub: [egarza0614](https://github.com/egarza0614)
* Email: eloygarza3@gmail.com (Feel free to contact me with additional questions.)


