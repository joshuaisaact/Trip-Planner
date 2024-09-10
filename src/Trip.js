import Button from "./Button";


export default function Trip({ trip, onSelection, selectedTrip }) {
  const isSelected = selectedTrip?.id === trip.id;
  const usedBudget = trip.itinerary.reduce((acc, activity) => acc + activity.cost, 0)


  return (
    <li>
      <h3 className='destination'>{trip.destination}</h3>
      <div className="trip-details">
        <div className="trip-content">
          <p>Days: <span>{trip.days}</span></p>
          <p>Total: <span>£{trip.totalBudget}</span></p>
          <p>Used: <span>£{usedBudget}</span></p>
        </div>
        <Button onClick={() => onSelection(trip)}>{isSelected ? 'Close' : 'Select'}</Button>
      </div>
    </li>
  );
}
