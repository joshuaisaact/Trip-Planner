import './App.css';
import { useState } from 'react';

const initialTrips = [
  {
    destination: 'France',
    days: 5,
    totalBudget: 1000
  },
  {
    destination: 'Italy',
    days: 10,
    totalBudget: 5000
  }
]

export default function App() {
  const [trips, setTrips] = useState(initialTrips);
  const [showAddTrip, setShowAddTrip] = useState(false);

  function handleShowAddTrip() {
    setShowAddTrip(!showAddTrip);
  }

  function handleAddTrip(trip) {
    setTrips(trips => [...trips, trip])
  }

  return (
    <div>
      <TripList trips={trips} />
      <Button onClick={handleShowAddTrip}>{showAddTrip ? 'Close' : 'Add'}</Button>
      {showAddTrip && <FormAddTrip onAddTrip={handleAddTrip} />}
    </div>

  );
}

function TripList({ trips }) {
  return (
    <ul>
      {trips.map((trip, i) => (
        <Trip trip={trip} key={i} />
      ))}
    </ul>
  )
}

function Trip({ trip }) {
  return (
    <li>
      <h3>{trip.destination}</h3>
      <p>{trip.days}</p>
      <p>{trip.totalBudget}</p>
    </li>
  )
}

function FormAddTrip({ onAddTrip }) {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(0)
  const [totalBudget, setTotalBudget] = useState(0)

  function handleSubmit(e) {
    e.preventDefault();

    if (!destination || !days || !totalBudget) return;

    const id = crypto.randomUUID();
    const newTrip = {
      id,
      destination,
      days,
      totalBudget
    }

    onAddTrip(newTrip)

    setDestination('')
    setDays(0)
    setTotalBudget(0)
  }

  return <form onSubmit={handleSubmit}>
    <label>Trip Name</label>
    <input type='text' value={destination} onChange={(e) => setDestination(e.target.value)} />

    <label>Days</label>
    <input type='range' value={days} min='0' max='14' onChange={(e) => setDays(e.target.value)} />

    <label>Total Budget</label>
    <input type='number' value={totalBudget} onChange={(e) => setTotalBudget(e.target.value)} />

    <Button>Add</Button>
  </form>
}

function ItineraryList() { }

function TripSummary() { }

function Button({ children, onClick }) {
  return <button className="button" onClick={onClick}>{children}</button>
}