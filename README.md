# Who am I?

Ronny Alvarado, environmental geologist and full stack software engineer.  
GitHub: https://github.com/RonnySAlvarado  
LinkedIn: https://www.linkedin.com/in/ronnysalvarado/

# Deployed Project

https://websocket-data-charts-renderer.netlify.com/

# Tech Stack

1. React / React Hooks
2. React Router
3. Styled-Components
4. Recharts
5. React Toastify
6. React Loader Spinner
7. Socket-io Client

# Project Setup

In order to begin running this application, there are a few steps that must be taken.

### Step 1
Assuming you have this repository cloned and on your local machine, you must install the project depencies at the root of the project as well as within the `client` folder. You may install them with the following:  
```
yarn install
```
or
```
npm install
```

### Step 2
Once dependencies have been installed, you will have to run the React client. Proceed to cd into the `client` folder and then run the following:  
```
yarn start
```
or
```
npm run start
```

### Step 3
Once the React client is finished loading, enjoy the content! See below for instructions on how to use the app.

### Step 4 (optional)
If you decide you want to test the server locally, you may also go to the root of the project and run the following:
```
yarn start
```
or
```
npm run start
```

# Functionality of the app and how to use it

### Landing page
Upon entering the site, the contents of the page will fade in (5 seconds) and will render a button that will allow you to access the `/dashboard` page. This page will consist of the application itself.

### Dashboard
Upon clicking the button, a socket.io connection will be established and listening for emits and a `Loader` component will render and will render until the first data point comes in from our backend. Once that data point comes in, the `Loader` component will unmount and our graphs components will mount. 

### Linegraph, Threshold, and Toast/Snackbar
This graph will show an X-axis that consists of a timestamp and the Y-axis will consist the incoming data value coming in. The incoming data values come in at random intervals with random numbers (constraints on these are located within the backend). The user of the application will then be able to the graph being updated based on when a new piece of data value comes in.  

The user may also set a `threshold` so they can get notified of when the incoming data value is greater than the `threshold` that has been set. The input field will render a warning if a user types in non-number characters as well as numbers that are above or below -100 and 100. An error will also show if they try to submit a threshold with a non-number value. When the threshold is exceed, a `ToastContainer` component will render to the screen and will display our message and value and will unmount after 3 seconds.  

The user may also choose to update the `threshold` if they choose and the threshold line will update.  

The user may also choose to remove the `threshold` completely if they want to remove a threshold.

### Bargraph
This graph will show an X-axis that consists of a range of numbers in increments of 10 beginning from -100 to 100. The Y-axis is the total count each time an incoming data value is within that specific range.


# Task Delivery

```diff
- Please don’t fork/branch or create pull-request from the repository.
- Clone it and email your solution back to us when you’re done.
```

# Task Description

You have a server which returns random numbers via WebSocket ([socket.io](https://socket.io)) connection.

You should implement the next:

1. A line chart:
   - **x-axis**: time of a received number (look at `timestamp` payload field)
   - **y-axis**: number values
2. A bar chart:
   - **x-axis**: range categories (e.g. `-10 - 0`, `0 - 10`, `10 - 20` etc)
   - **y-axis**: the amount of numbers in each category
3. (Optional) An input called _"Alert threshold"_:
   - a user should be able to enter a number
   - if the random number received from the server is greater than the threshold - show an alert toast / snackbar with the number as the payload
4. Design: we appreciate your own design decisions =)

Charts should be updated in real time. **Please**, consider code style best practices.

# Limitations

1. **React**
2. Use [socket.io-client](https://socket.io/docs/client-api) to connect to the server
3. That’s all

**P.S.** Feel free to use any module bundler, charts package, UI-kit etc you want. **BUT** please, leave some notes about the project setup.

# Server Setup

1. Install NodeJS
2. In the project root folder run `yarn` / `npm install`
3. Add `.env` file with the specified PORT (`3000` by default) env variable (look at `.env.sample` file)
4. Run `yarn start` / `npm start`
5. Now you can connect to the server via [socket.io-client](https://socket.io/docs/client-api):
   - listen for `data` event
   - the payload format is `{ value: <float>, timestamp: <integer> }`

# Good luck!
