import './App.css';
import { useState } from 'react';
import Trip from './Trip';
import ItineraryList from './ItineraryList';
import Button from './Button';

const initialTrips = [
  {
    id: 100,
    destination: 'France',
    days: 5,
    totalBudget: 1000,
    itinerary: []
  },
  {
    id: 200,
    destination: 'Italy',
    days: 10,
    totalBudget: 5000,
    itinerary: []
  }
]

export default function App() {
  const [trips, setTrips] = useState(initialTrips);
  const [showAddTrip, setShowAddTrip] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

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

  return (
    <div className='app-container'>
      <div className='trip-list'>
        <TripList trips={trips} onSelection={handleSelection} selectedTrip={selectedTrip} />
        <Button onClick={handleShowAddTrip}>{showAddTrip ? 'Close' : 'Add'}</Button>
        {showAddTrip && <FormAddTrip onAddTrip={handleAddTrip} />}
      </div>
      {selectedTrip && (
        <div className="itinerary-container">
          <h3>{selectedTrip.destination} Itinerary</h3>
          <ItineraryList itinerary={selectedTrip.itinerary} />
        </div>
      )}
    </div>

  );
}

function TripList({ trips, onSelection, selectedTrip }) {
  return (
    <ul>
      {trips.map((trip, i) => (
        <Trip trip={trip} key={i} onSelection={onSelection} selectedTrip={selectedTrip} />
      ))}
    </ul>
  )
}

function FormAddTrip({ onAddTrip }) {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(1)
  const [totalBudget, setTotalBudget] = useState(0)

  function handleSubmit(e) {
    e.preventDefault();

    if (!destination || !days || !totalBudget) return;

    const id = crypto.randomUUID();
    const newTrip = {
      id,
      destination,
      days,
      totalBudget,
      itinerary: []
    }

    onAddTrip(newTrip)

    setDestination('')
    setDays(1)
    setTotalBudget(0)
  }

  return <form onSubmit={handleSubmit}>
    <label>Trip Name</label>
    <input type='text' value={destination} onChange={(e) => setDestination(e.target.value)} />

    <label>Days: {days}</label>
    <input type='range' value={days} min='1' max='14' onChange={(e) => setDays(Number(e.target.value))} />


    <label>Total Budget</label>
    <input type='number' value={totalBudget} onChange={(e) => setTotalBudget(e.target.value)} />

    <Button>Add</Button>
  </form>
}

function TripSummary() { }

