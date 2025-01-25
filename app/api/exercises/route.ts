import { NextResponse } from "next/server";

let exercises = [
  { name: "Push-ups", sets: 3, reps: 15, days: ["Monday"] },
  { name: "Pull-ups", sets: 4, reps: 10, days: ["Tuesday"] },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const day = searchParams.get("day");

  if (day) {
    const filtered = exercises.filter((exercise) => exercise.days.includes(day));
    return NextResponse.json(filtered);
  }

  return NextResponse.json(exercises);
}

export async function POST(request: Request) {
  const newExercise = await request.json();
  exercises.push(newExercise);
  return NextResponse.json(newExercise);
}
