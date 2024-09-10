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
              <strong>{activity.name}</strong>
              <span>{activity.day}</span>
              <span>£{activity.cost}</span>
            </li>
          ))
        )}
      </ul>
      <Button onClick={onShowAddActivity}>{showAddActivity ? 'Close' : 'Add Activity'}</Button>

      <div
        className={`form-container ${showAddActivity ? 'visible' : 'hidden'}`}
      >
        {showAddActivity && <FormAddActivity onAddTripActivity={onAddTripActivity} />}
      </div>

    </>
  );

}
