import { useState } from "react";
import Button from "./Button";

export default function FormAddActivity({ onAddTripActivity }) {
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [cost, setCost] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !day || !cost) return;

    const newActivity = {
      name,
      day,
      cost: Number(cost)
    };

    console.log(newActivity);

    onAddTripActivity(newActivity);

    setName('');
    setDay('');
    setCost(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Activity Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Day</label>
      <input type="text" value={day} onChange={(e) => setDay(e.target.value)} />

      <label>Cost</label>
      <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} />

      <Button>Add Activity</Button>
    </form>
  );
}
