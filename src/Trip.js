import Button from "./Button";


export default function Trip({ trip, onSelection, selectedTrip }) {
  const isSelected = selectedTrip?.id === trip.id;


  return (
    <li>
      <h3 className='destination'>{trip.destination}</h3>
      <div className="trip-details">
        <p><span>{trip.days}</span> days</p>
        <p>Total Budget: <span>£{trip.totalBudget}</span></p>
      </div>
      <Button onClick={() => onSelection(trip)}>{isSelected ? 'Close' : 'Select'}</Button>
    </li>
  );
}
