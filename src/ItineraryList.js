export default function ItineraryList({ itinerary }) {
  return (
    <ul>
      {itinerary.length === 0 ? (
        <p>No activities added yet.</p>
      ) : (
        itinerary.map((activity, index) => (
          <li key={index}>
            <strong>{activity.name}</strong> - {activity.time} - ${activity.cost}
          </li>
        ))
      )}
    </ul>
  );

}
