import Trip from "./Trip";

export default function TripList({ trips, onSelection, selectedTrip }) {
  return (
    <ul>
      {trips.map((trip, i) => (
        <Trip trip={trip} key={i} onSelection={onSelection} selectedTrip={selectedTrip} />
      ))}
    </ul>
  );
}
