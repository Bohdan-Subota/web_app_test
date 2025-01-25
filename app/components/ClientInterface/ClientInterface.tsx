"use client";
import { useState, useEffect } from "react";
import "./ClientInterface.css";

interface Exercise {
  name: string;
  sets: number;
  reps: number;
}

const weekDays: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const ClientInterface = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(0);
  const [todayExercises, setTodayExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const res = await fetch(`/api/exercises?day=${weekDays[currentDayIndex]}`);
        const data: Exercise[] = await res.json();
        setTodayExercises(data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, [currentDayIndex]);

  const handleCompleteWorkout = (): void => {
    alert("Workout marked as complete!");
  };

  const handleTimeTravel = (): void => {
    if (currentDayIndex < weekDays.length - 1) {
      setCurrentDayIndex(currentDayIndex + 1);
    }
  };

  return (
    <div className="client-container">
      <h2>Today's Exercises - {weekDays[currentDayIndex]}</h2>
      <table className="exercise-table">
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          {todayExercises.map((exercise, index) => (
            <tr key={index}>
              <td>{exercise.name}</td>
              <td>{exercise.sets}</td>
              <td>{exercise.reps}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons">
        <button onClick={handleCompleteWorkout} className="complete-btn">
          Complete
        </button>
        <button onClick={handleTimeTravel} className="time-travel-btn">
          Time Travel +1
        </button>
      </div>
    </div>
  );
};

export default ClientInterface;
