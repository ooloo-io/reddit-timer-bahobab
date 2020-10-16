<!-- I use this template: https://github.com/dbader/readme-template/blob/master/README.md -->
# Reddit Timer
### or How to find the best time to post your subreddit
Use historical posts data to determine the best time to post a subreddit.

This project is the result of a course by ooloo.io.
The project goal is to build a professional web app with professional tools and methods.

The lead developer at ooloo.io provided the project designs in Zeplin and tasks managed in Clickup management tool.
One of the requirements is that each taks be implemented within its own pull request(PR). And the PR is reviewed by the lead developer before it's merged.

Beside the project being implemented with the React library, additional tools and packages nesesary to deliver the project to plan were free to choose.
And on on occasion, I used TDD methodology to implement some tasks, such as header, footer, form tasks.

To ensure code quality and conformity an end to end (e2e) Cypress test suite was provided.
I implemented the integragration tests using React Testing-Library to meet the project's acceptance criteria (AC).

## Tech Stack used:
1. React/React Hooks
2. Styled-components
3. Cypress
4. React Testing-Library

## Tools
1. ClickUp
2. Zeplin
3. Perfect Pixel
4. GitHub
5. Slack

## I Proposed Added Features
In addition to the original AC, I proposed and implemented these features:

1. highlights for cells containing posts with deleted author
2. display the posts table in modal mode
3. choose the heatmap color theme

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

One to two paragraph statement about your product and what it does.

![](header.png)

## Highlights
Use of styled-components makes it easy to solve css issues for the heatmap color scheme.
Tags are components that offer flexibility and ease of stiling

Efficient multiple fetch call using recursion
Effective use of function compositing to simplify code readability

Testing using snapshot for the table that has 168 cells.
Avoid data mutation on a parameter passed by reference


## Take Away from this Project:

1. Work as Pro frontend developer using Pro methodology and Tools:
- Agile project management with ClickUp
- Slack Team collaboration platform
- E2E testing with Cypress
- Jest and React Testing-library (with hooks and mocks)
- Team linting style
2. Professional Git pull request (PR) workflow:
- pull requests (PR)
- code review
- branch merge
3. Production Deployment
- Live app deployed to Netlify with CC/CI webhook

## Installation

OS X & Linux:
```sh
yarn install
```

## Usage

After all the packages have been successfully installed, you can run:

```sh
yarn start
```
## Test

Run the tests with:

```sh
yarn test
```

## Meta

Your Name – [@YourTwitter](https://twitter.com/dbader_org) – YourEmail@example.com

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki