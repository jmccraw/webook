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

## Notes

* When dealing with a real API, we'd probably need to have some `version` we include in the request to book a space so we can try to avoid data collisions
* When making a booking, we would want to wait for a response confirming the transaction went through
  * In this implementation, we just maintain the data as it was first retrieved and don't really know what's happening in the backend since then

## Things to Work on Given More Time

* Add more tests, including around testing how the `useFetchRooms` hook performs
* Confirm styles across actual devices (missed a mobile one for the mobile; the `Cards` should be more fluid)
* Update some of the Rooms `index.jsx` file for dealing with loading and error states better
* Handle the checks in [`/features/rooms/index.jsx`](https://github.com/jmccraw/webook/blob/3aeb2d895cc67e299446cc19e5dd4b8d39c5153c/src/features/rooms/index.jsx#L26) better
* Add more flourish around the book. Probably want some kind of confirmation before booking and after. Also not sure if this is booking the entire room or just one "spot" in said room, so would ask for more clarification.
* Spend less time worrying about the generic `Container` and use it to make more tests/style checks across viewports/devices
