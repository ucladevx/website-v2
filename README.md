# DevX Website (v2)

Built with
[React](https://reactjs.org/) | [Styled Components](https://styled-components.com) | [Parcel](https://parceljs.org/)

## Development

1. Clone the repo to your machine.
2. Make sure you have [yarn](https://yarnpkg.com/en/) installed. This project uses it instead of npm.
3. Install package dependencies using by running `yarn` in the project.
4. Start up the dev server @ localhost:1234 by running `yarn dev`.

## Deployment

The website is configured to automatically deploy the contents of the `master` branch on GitHub. So all you have to do is merge your changes to `master`, push, and wait.

Some additional notes on this:

* You can monitor the deployment or adjust environmnent vars on the [TravisCI dashboard](https://travis-ci.com/ucladevx/website-v2).
* The code defining how deployment is done can be found in `.travis.yml` and `deploy.sh`.
  * It's not too complex, TravisCI simply builds the project using `yarn build`, then sends it to S3 using the `aws` CLI