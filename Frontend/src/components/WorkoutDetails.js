import { formatDistanceToNow } from 'date-fns';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext();

    const handleClick = async () => {
        const response = await fetch("/api/workouts/" + workout._id, {
            method: "DELETE",
        });
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: "DELETE_WORKOUT", payload: json });
        }
    };

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p>
                <b>Load (kg): </b>
                {workout.load}
            </p>
            <p>
                <b>Number of reps: </b>
                {workout.reps}
            </p>
            <p>
                {formatDistanceToNow(new Date(workout.createdAt), {
                    addSuffix: true,
                })}
            </p>
            <span className="material-symbols-outlined" onClick={handleClick}>
                delete
            </span>
        </div>
    );
};
export default WorkoutDetails;
