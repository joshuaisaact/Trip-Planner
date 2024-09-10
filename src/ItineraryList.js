import Button from "./Button";
import FormAddActivity from './FormAddActivity'

export default function ItineraryList({ itinerary, onShowAddActivity, showAddActivity, onAddTripActivity }) {
  return (
    <>
      <ul>
        {itinerary.length === 0 ? (
          <p>No activities added yet.</p>
        ) : (
          itinerary.map((activity, index) => (
            <li key={index}>
              <strong>{activity.name}</strong> Day: {activity.day} Cost: £{activity.cost}
            </li>
          ))
        )}
      </ul>

      <Button onClick={onShowAddActivity}>{showAddActivity ? 'Close' : 'Add Activity'}</Button>
      {showAddActivity && <FormAddActivity onAddTripActivity={onAddTripActivity} />}
    </>
  );

}
