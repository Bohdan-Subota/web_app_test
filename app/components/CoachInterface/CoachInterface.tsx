"use client";
import { useState, useEffect } from "react";
import "./CoachInterface.css";

interface Exercise {
  name: string;
  sets: number;
  reps: number;
  days: string[];
}

const CoachInterface = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [newExercise, setNewExercise] = useState<Exercise>({
    name: "",
    sets: 0,
    reps: 0,
    days: [],
  });

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const res = await fetch("/api/exercises");
        const data: Exercise[] = await res.json();
        console.log("res", res)
        setExercises(data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, []);

  const handleAddExercise = async () => {
    try {
      const res = await fetch("/api/exercises", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newExercise),
      });

      

      if (res.ok) {
        const addedExercise: Exercise = await res.json();
        setExercises([...exercises, addedExercise]);
        setNewExercise({
          name: "",
          sets: 0,
          reps: 0,
          days: [],
        });
      } else {
        console.error("Failed to add exercise");
      }
    } catch (error) {
      console.error("Error adding exercise:", error);
    }
  };

  return (
    <div className="coach-container">
      <h2>Coach Interface</h2>

      <table className="exercise-table">
        <thead>
          <tr>
            <th>Exercise Name</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Days</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, index) => (
            <tr key={index}>
              <td>{exercise.name}</td>
              <td>{exercise.sets}</td>
              <td>{exercise.reps}</td>
              <td>{exercise.days.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="add-exercise-form">
        <h3>Add New Exercise</h3>
        <input
          type="text"
          placeholder="Exercise Name"
          value={newExercise.name}
          onChange={(e) =>
            setNewExercise({ ...newExercise, name: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Sets"
          value={newExercise.sets}
          onChange={(e) =>
            setNewExercise({ ...newExercise, sets: +e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Reps"
          value={newExercise.reps}
          onChange={(e) =>
            setNewExercise({ ...newExercise, reps: +e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Days (comma separated)"
          value={newExercise.days.join(", ")}
          onChange={(e) =>
            setNewExercise({ ...newExercise, days: e.target.value.split(",") })
          }
        />
        <button onClick={handleAddExercise}>Add Exercise</button>
      </div>
    </div>
  );
};

export default CoachInterface;
