import './App.css';
import { useState } from 'react';
import ItineraryList from './ItineraryList';
import Button from './Button';
import TripList from './TripList';
import FormAddTrip from './FormAddTrip';

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
]

export default function App() {
  const [trips, setTrips] = useState(initialTrips);
  const [showAddTrip, setShowAddTrip] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [showAddActivity, setShowAddActivity] = useState(false);

  function handleShowAddTrip() {
    setShowAddTrip(!showAddTrip);
  }

  function handleAddTrip(trip) {
    setTrips(trips => [...trips, trip]);
    setShowAddTrip(false);
  }

  function handleSelection(trip) {
    setSelectedTrip((selected) => selected?.id === trip.id ? null : trip);
    setShowAddTrip(false);
  }

  function handleShowAddActivity() {
    setShowAddActivity(!showAddActivity);
  }

  function handleAddTripActivity(activity) {
    const updatedTrip = {
      ...selectedTrip,
      itinerary: [...selectedTrip.itinerary, activity]
    };

    setTrips(trips =>
      trips.map(trip =>
        trip.id === selectedTrip.id ? updatedTrip : trip
      )
    );

    setSelectedTrip(updatedTrip);
  }

  return (
    <>
      <h1>Trip Planner</h1>
      <div className='app-container'>



        <div className='trip-list'>
          <TripList trips={trips} onSelection={handleSelection} selectedTrip={selectedTrip} />
          <Button className="button" onClick={handleShowAddTrip}>{showAddTrip ? 'Close' : 'Add Trip'}</Button>

        </div>

        <div className="itinerary-container">
          {showAddTrip ? (
            <div className="add-trip-container">
              <h3>Add New Trip</h3>
              <FormAddTrip onAddTrip={handleAddTrip} />
            </div>
          ) : selectedTrip ? (
            <>
              <h3 className='itinerary-header'>{selectedTrip.destination} Itinerary</h3>
              <ItineraryList
                itinerary={selectedTrip.itinerary}
                onShowAddActivity={handleShowAddActivity}
                showAddActivity={showAddActivity}
                onAddTripActivity={handleAddTripActivity}
              />
            </>
          ) : (
            <p>Select a trip or add a new one</p>
          )}
        </div>
      </div>
    </>
  );
}

function TripSummary() { }

