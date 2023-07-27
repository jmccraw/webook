# WeBook

WeBook is a client-side application that shows us how many available seats there are for each meeting room in our office and provides a prototype way for you to book an individual room.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Limitations**\
This site was created based off the latest version of Chrome. All features may not be available in all browsers.

## Running the App

To install the app, follow these steps:

```bash
$ git clone git@github.com:jmccraw/webook.git
$ npm install
$ npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000/rooms](http://localhost:3000/rooms) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Running Tests

To run tests (mostly based off Testing Library React), type the following in your console:

```bash
$ npm test
```

## Things to Work On
* When dealing with a real API, we'd probably need to have some `version` we include in the request to book a space so we can try to avoid data collisions
* When making a booking, we would want to wait for a response confirming the transaction went through
  * In this implementation, we just maintain the data as it was first retrieved and don't really know what's happening in the backend since then
* Add more tests
* Confirm styles across actual devices
