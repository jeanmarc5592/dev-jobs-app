# Frontend Mentor - Devjobs web app solution

This is a solution to the [Devjobs web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Things I've added](#things-ive-added)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position
- Be able to click a job from the index page so that they can read more information and apply for the job
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Links

- Live Site URL: [https://devjobs-jean-marc.netlify.app/](https://devjobs-jean-marc.netlify.app/)

## My process

- The App is made of two different pages
  - The Jobs Overview Page
  - The Job Detail Page
- I split the whole App into 4 blocks
  - Block I -> Setting everything up (Vue Project, Dependencies, Router, Vuex, ...)
  - Block II -> Building the Jobs Overview Page (Responsive UI, Logic, Backend, Filtering, ...)
  - Block III -> Building the Jobs Detail Page (Responsive UI, Logic, Backend, Filtering, ...)
  - Block IV -> Finalizing the project (Fixing some smaller issues, Write documentation, Deployment, ...)

### Built with

- [Vuejs](https://vuejs.org/) - JS Library
- [Vuex](https://vuex.vuejs.org/) - State Management Library
- [Vue-Router](https://router.vuejs.org/) - Routing Library
- [GraphQL](https://graphql.org/) - API Query Language
- [Hygraph](https://hygraph.com/) - CMS with GraphQL API
- [Naive UI](https://www.naiveui.com/en-US/os-theme) - Vuejs Component 
Library
- [SCSS](https://sass-lang.com/) - CSS Preprocessor
- [Vite](https://vitejs.dev/) - Frontend Tooling

### What I learned

- Integrating gql into Vue using the options API
- Customizing the theme of Naive UI
- Binding Input Properties to Vuex 
- Pagination with graphql
- Setup and use Vue-Router
- Setup and use Vuex
- Using Layouts for better maintainability
- How to add filter behaviour properly to graphql queries

### Things I've added

During the process of development I came across certain ideas, that aren't specified in the challenge description, but are important to me.

- headless CMS (hypgraph) to make the application more realisitic by fetching data
- Pagination
- 404 Page
- "No Results" UI
- Error Handling when data fetching went wrong

### Continued development

I'll definitely dive deeper into Vuejs. The next project will be with Typescript, Composition API and Pinia for State Management. Depending on the challenge, I'll build a more complex backend on my own (Server Code, Database, CI/CD Pipeline).

### Useful resources

- [GraphQL Integration](https://www.datocms.com/docs/vue) - This helped me to integrate GraphQL into Vue using the Options API.
- [Theme Customization](https://www.naiveui.com/en-US/os-theme/docs/customize-theme) - Customizing the theme is an important step and can be tedious sometimes because of it's complexity. Naive UI provided a good documentation on that, which helped me a lot.
- [Binding Input Values to Vuex](https://vuex.vuejs.org/guide/forms.html) - Two Way Binding is a powerful concept when working forms. Because I've used a global state management library, things were a little bit different than using just a local state.
- [GraphQL Pagination](https://graphql.org/learn/pagination/) - I've never implemented a proper pagination with GraqhQL before. This guide came in very handy and luckily the CMS I've used could handle it very nice.

## Author

- Website - [jean-marc.io](https://www.jean-marc.io)
- Frontend Mentor - [@jeanmarc5592](https://www.frontendmentor.io/profile/jeanmarc5592)
- Twitter - [@jeanmarc_dev](https://twitter.com/jeanmarc_dev)
- Instagram - [@jean_marc.dev](https://www.instagram.com/jean_marc.dev/)
- LinkedIn - [Jean-Marc Möckel](https://www.linkedin.com/in/jean-marc-m%C3%B6ckel-56153a1a0/)

