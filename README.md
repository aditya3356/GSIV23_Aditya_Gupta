# Movies Explorer

* This project is used to browse and search movies available at The Movie Database (TMDB)
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Deployed URL
https://movies-explorer-aditya3356.netlify.app

## Steps to run the app locally
1. Clone this repository
2. To get an API Key:
 * Create a personal account at: https://www.themoviedb.org/account/signup
 * Once you have created an account, go to:
https://www.themoviedb.org/settings/api to create an API key
   * Usage: Personal
   * ApplicationName: Interview
   * Application URL: None
   * Application Summary: For a developer interview project
3. After creating the API key, copy the API Read Access Token
4. Open the `.env` file in the project directory and replace `YOUR_API_READ_ACCESS_TOKEN` with the token that you just copied
5. Open the terminal and `cd` into the project directory
6. Run `npm install` in the terminal to install the dependencies
7. Run `npm start` in the terminal to start the development server on port `3000`
8. After the development server has started successfully, copy this URL `http://localhost:3000` to a new browser tab

## Elements that I've done well
* I've used MobX library in this application for efficient state management
* I've segregated the code into separate components and files to enhance it's maintainability and readability
* I've added logs for error scenarios and handled the state properly in case of an error response from the API call
* Since I am using a Personal Access Token to interact with TMDB, I've taken care that the token is not exposed and the security of the application is not compromised

## Scope of Improvement
* I can add UI for loading state and error state
* I can add Unit Tests and Integration Tests

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
