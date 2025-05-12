import { useState } from "react";
import { GoalList, Header, NewGoal } from "./components";
import goalsImg from "./assets/goals.jpg";

export type GoalItem = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<GoalItem[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: GoalItem = {
        id: Date.now(),
        title: goal,
        description: summary,
      };

      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Goals</h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal} />

      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
