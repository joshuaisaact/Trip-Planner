
# Trip Planner - React Practice Project

This project is a simple **Trip Planner** application built with React. It was developed to practice the fundamentals of React, including state management, events, forms, reactive components, and props. The app allows users to manage trips, add itineraries, and handle budget tracking for each trip.

## Features
- **Add New Trips**: Users can add new trips by specifying the destination, number of days, and total budget.
- **Select a Trip**: Users can select a trip to view and manage its itinerary.
- **Add Itinerary Items**: Users can add activities to the selected trip's itinerary, specifying the day, cost, and activity name.
- **Budget Tracking**: The app calculates and displays the total budget for each trip, as well as the amount used based on the added activities.

## Learning Objectives
This project was built to reinforce the following React concepts:
- **State Management**: Manage state across multiple components using the `useState` hook.
- **Props**: Pass data and functions between components via props to allow for interaction between parent and child components.
- **Forms**: Capture and handle user input with controlled components, managing state for form inputs.
- **Conditional Rendering**: Display different content based on user actions, such as selecting a trip or adding an activity.
- **Dynamic Lists**: Dynamically render lists (trips and itineraries) and handle adding new items to those lists.

## Project Structure
The project consists of several key components, each responsible for different parts of the app's functionality.

### 1. `App.js`
The main component that manages the state for the list of trips, the selected trip, and controls the flow of adding trips and activities.

#### Key Functions:
- `handleAddTrip(trip)`: Adds a new trip to the list.
- `handleSelection(trip)`: Selects a trip to view and manage its itinerary.
- `handleAddTripActivity(activity)`: Adds a new activity to the itinerary of the selected trip.

### 2. `TripList.js`
A component that renders the list of trips. Each trip is passed to the `Trip` component for individual rendering.

### 3. `Trip.js`
Displays information about an individual trip, including the destination, number of days, total budget, and the budget used for activities. It also allows selecting a trip to view the itinerary.

#### Props:
- `trip`: The trip object to display.
- `onSelection`: Function to select the trip for viewing.
- `selectedTrip`: The currently selected trip.

### 4. `ItineraryList.js`
Renders the itinerary for the selected trip. It also includes a button to toggle the form for adding a new activity.

#### Props:
- `itinerary`: The list of activities for the selected trip.
- `onShowAddActivity`: Function to toggle the visibility of the activity form.
- `showAddActivity`: Boolean to control whether the activity form is shown.
- `onAddTripActivity`: Function to add a new activity to the itinerary.

### 5. `FormAddActivity.js`
A form component that allows the user to add a new activity to the selected trip's itinerary. The form includes fields for the activity name, day, and cost.

#### State Variables:
- `name`: The name of the activity.
- `day`: The day on which the activity will take place.
- `cost`: The cost of the activity.

#### Functionality:
- **handleSubmit**: Adds the new activity to the selected trip when the form is submitted.

### 6. `FormAddTrip.js`
A form component that allows the user to add a new trip. The form includes fields for the destination, number of days, and total budget.

#### State Variables:
- `destination`: The destination of the trip.
- `days`: The number of days for the trip, controlled by a range slider.
- `totalBudget`: The total budget for the trip.

#### Functionality:
- **handleSubmit**: Adds the new trip when the form is submitted.

### 7. `Button.js`
A simple reusable button component used across the app.

## Example Data
The app comes with some initial trips and itinerary data to demonstrate its functionality:

```js
const initialTrips = [
  {
    id: 100,
    destination: 'France',
    days: 5,
    totalBudget: 1000,
    itinerary: [
      { cost: 20, day: "2", name: "City Tour" },
      { cost: 50, day: "1", name: "Museum Visit" },
      { cost: 150, day: "3", name: "Cooking class" },
    ]
  },
  {
    id: 200,
    destination: 'Italy',
    days: 10,
    totalBudget: 5000,
    itinerary: [
      { cost: 35, day: "1", name: "City Tour" },
      { cost: 55, day: "5", name: "Museum Visit" },
      { cost: 250, day: "4", name: "Cooking class" },
    ]
  }
];
```

## Running the Project
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the app with `npm start`.

## Future Improvements
- Add more validation to forms (e.g., ensuring a valid day is selected).
- Allow editing of trips and itinerary items.
- Implement routing for better navigation between trips and itineraries.
- Improve styling and UX with more visual feedback.

## Conclusion
This Trip Planner project was a several-hour long build primarily aimed at reinforcing React fundamentals.
