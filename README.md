## Emaily - Udemy React: Full Stack Tutorial

### Tech Stack
- React - Create React App
- Node - v8.7.0 - latest version at the time
- Express
- MongoDB - mLab & Mongoose
- Passport - Google Oauth
- Cookie Session (`cookie-session`)
- SendGrid Email Service

### New Things Learned

#### New Util
- `cat <filename>` prints file contents to command line
- `ctrl + F` to open chrome's search tool, search a page

#### Prettier - JS Code Formatter
- `prettier --write <filename>` applies default prettier style to code in filename
- `prettier <filename>` prints contents of file w/prettier style to console, no change in file
- can be integrated into c9 in preferences

#### Heroku Considerations
- local environment might not have `process.env.PORT` therefore use `process.env.PORT || <number of port>`
- `heroku create` for new app from cli. gives you url and repo for heroku.
- **.gitignore** for dev environment keys `js` file
- use `process.env.NODE_ENV === 'production` to use local keys in dev and prod keys(env variables) on heroku
    - make sure to **.gitignore** dev keys only
- use `heroku-postbuild` in the main package.json to have heroku perform build steps
    - in this project we have heroku install the client side dependencies
    - then we have heroku run the build process
    - since we added `production` logic to express it all works 
- use `engines` in main package.json to specify version on `node` and `npm` 

#### Passport
- passport internal identifiers example: *'google'*
- `{ ..., proxy: true }` option on GoogleStrategy to not have http vs https errors with google oauth 
    - i use run time environment variables instead, both work as solutions

#### Node & Express
- `require("./routes/authRoutes")(app);` immediatly invoked function expression based on a require 
    - passes app to routes. i guess it is an alternative to using express' `router`
    - in the routes file, wrap the `app.get/post/etc()` with `module.exports = (app) => {<routes>}`
- Desturcturing - instead of `const Schema = mongoose.Schema` use `const { Schema } = mongoose`
    - since there is a `Schema` property on mongoose this works
- `const User = mongoose.model("users");` to fetch from mongoose
- promise aka `.then` vs callback or async await
- can pass middleware as second argument to route handler - reminder
- can require deps into node REPL and test things like mongoose queries

#### Cookies
- using cookies with npm package `cookie-session` and passport's built in serializeUser, deserializeUser, etc
    - alternative to my usual JWT
    - `req.logout()` provided by passport destroys cookie
    - when using cookies, browser won't send them to other domains or ports by default

#### Concurrently NPM Package
- use `--prefix` flag to execute script from a different `package.json` in another folder
- `concurrently` to run two scripts and once
    - use `\"` to isolate each scipt command and escape the `"` - a syntax thing
    - for cloud 9 - left react on `8080` aka default `process.env.PORT`
    - put backend on 8081 for dev and `process.env.PORT` for heroku (prod)

#### Proxy with CRA
- in development on c9, use the `proxy` setting in `package.json` 
    - run api on port 8081
    - target to `http://localhost:8081`
    - for some reason the actual c9 url doesn't work 

#### MongoDB
- use _ underscore before a ref property in a mongo model ex: `_user`

#### Javascript Tidbits
- defining and calling functions in the console & in c9 Immediate !!!
    - const arrow functions don't work in c9 Immediate idk
- async await works out of the box with new Node versions
- use `import * as <whatever>` to import multiple things
- export default `[an array of stuff]`
- ***Arrow Function Tricks***
    - example `const fetchUser = () => async dispatch => {...}`
    - create a function chain sort of
    - also, with only ONE return expression - no need for brackets or return
- `debugger;` can be inserted into code - stops with devTools !
- async await on a route handler `async (req, res)` - cool
- setting globals for testing with `window.<whatever>`
    - frontend stuff - needs browser window object
    - we used axios and were able to use axios package from devTools console
- ***Async Await***
- ***Try Catch***

### Create React App & React
- looks for `index.js` in `src` root by default
- use `componentDidMount` instead of `componentWillMount` to fetch initial data
    - react best practice is heading this way
- React 16 - can render sibblings in array - separate with comma and add key
- `export default () => {....}` a functional component w/o const
- using `renderWhatever()` methods to breakdown a component
- use an array and lodash to model data and simplify code ex: `SurveyForm`
- use `// eslint-disable-next-line` to get rid of dumb console errors in CRA terminal
- can simplify component state in CRA 
    - instead on constructor(props) & super(props) & this.state
    - just use `state = {.....};` - babel helper i guess

### Redux
- creating the store
    - arguments reducers, initial state, applyMiddleware
    - `connect` from 'react-redux' takes two arguments
        - one - mapStateToProps - can be null
        - two - the action creators
    - `mapStateToProps(state)` returns an object `{<propName>: value}` - simple
- ***Reducers***
    - structure - folder with files for each reducers
    - import into an index.js and combine with redux `combineReducers`
    - then export
- ***Redux Thunk***
    - allows us to call an action creator without ***IMMEDIATELY*** returning an action
    - gives us direct access to the dispatch function 
    - knows when we return a function because it is middleware - and calls that function
    - initially, we use thunk to make a call to the server with axios THEN dispatch an action when a promise is resolved
- ***withRouter***
    - pass `history` to component and then to action creator
    - now use `history.push` after axios and or dispatching and action to navigate

#### Redux Form
- a library that handles forms with redux - npm `redux-form`
- good docs
- automatically uses your redux setup without you having to create much
- standard practice to rename reducer to something else
- use `form` as key - look to docs if need another name
- `reduxForm` HOC with `form: 'string'`
    - `this.props.handleSubmit(value => {})` added by HOC
    - generates event handlers and other meta/state properties - pristine, validators, etc
    - `validate` key will run when consistantly
    - can destucture meta with nested destructuring ex - `({input, meta: {touched, error}}) =>...`
    - create your own function `validate(values)` that returns and `errors {}`
- `Field` props of component, type, name, etc
    - `name` becomes key, value is the input
    - component can be custom react component or input, textarea, radio, etc
- in custom component pass in ({ input }) and add `<input {...input}/>`
    - destuctures props.input and gives all fields to input - eventhandlers, etc
    - slick labeling also using props and destructuring

### Axios
- used for HTTP request 

### Stripe
- handles credit card payment for us
- fake test card `4242 4242 4242 4242`
- `react-stripe-checkout` package to help set up button on frontend
- `amount` prop default is US Cents
- `token` gives us data from stripe - id, last 4, etc via callback
- to use custom button, make StripeCheckout a parent Component
    - no child renders default button
- `stripe` package for the backend - extensive api
    - have to pass secret directly after require statement

### Random Facts
- CSS - use npm then import minified css file if using third party styles
    - rather than a cdn
- C9's internal browser window for previews only works with ***https***
- When a C9 `a href` has a proxy to another c9 port and route has no redirect
    - request hits proxy AND navigates to new url
    - essentially the request hit BOTH ports
    - add a redirect to the server will redirect the front end
    - HOWEVER, in passport middleware, the behavior is different, the redirect attempts to find that url on the requested(backend) port
    - I used an absolute path - maybe because google oauth ???
- ***Continuous Integration***
    - a third party server that runs test
    - can also commit, build and deploy to production server
    - look into this in the future

#### SendGrid
- email provider service 
- `sendgrid` npm package ??? what version 6 ?
- v5.X.X is depreciated but is still working as of 10-26-17
- Mailer class 
    - lots of unique config - set up clickable

#### Lodash
- use to work with arrays and to consolidate logic and components
- specifically `_.map` and `_.each`, supposedly quicker than native funcs
- `_.compact(array)` - removes all falsey values from an array
- `_.uniqBy(array, '<key on obj in array>')` - will remove duplicate values of that key
- `_.chain(array)` - ends with `value()` - chain functions together - cool shit

#### Path Parser
- npm `path-parser` 
- create new Path(`</whatver/:PARAM/:PARAM2>`)
- used with node's built in `url` module and `{URL}` constructor function
- in `surveyRoutes.js`

#### Webhooks
- our server gets notified of something by an outside source
- we want to know when someone clicks an email from sendgrid
    - sendgrid sends batched request ~ every 30sec 
- local developers need `localtunnel` package, not needed on c9
- configure events on SendGrid email options

#### Mongoose
- `$elemMatch` - we used on a subdoc after using an initial `updateOne({})`
     - basically added more search criteria - chain search
     - finds and updates at the same time - stays in mongo world
- `[<some key>]` use brackets with variable for key interpolation
- second argument to `updateOne({})` are the changes
- mongo operators
- `$inc` increment give object and amount of inc
- `$set` set property of a subdoc - use of `$` to reference original query
- mongoose projection with `select` - string or object methods
    - can exclude as well with `- string` or `0/false obj`