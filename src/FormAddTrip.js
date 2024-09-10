import { useState } from "react";
import Button from "./Button";

export default function FormAddTrip({ onAddTrip }) {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(1);
  const [totalBudget, setTotalBudget] = useState(0);

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
    };

    onAddTrip(newTrip);

    setDestination('');
    setDays(1);
    setTotalBudget(0);
  }

  return <form onSubmit={handleSubmit}>
    <label>Trip Name</label>
    <input type='text' value={destination} onChange={(e) => setDestination(e.target.value)} />

    <label>Days: {days}</label>
    <input type='range' value={days} min='1' max='14' onChange={(e) => setDays(Number(e.target.value))} />


    <label>Total Budget</label>
    <input type='number' value={totalBudget} onChange={(e) => setTotalBudget(e.target.value)} />

    <Button>Add Trip</Button>
  </form>;
}
