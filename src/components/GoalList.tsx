import { type ReactNode } from "react";
import { GoalItem } from "./GoalItem.tsx";
import { GoalItem as CGol } from "../App.tsx";
import { InfoBox } from "./InfoBox.tsx";

// type GoalListPros = {
//   goals: { title: string; description: string; id: number }[];
// };   ===> o'

type GoalListPros = {
  goals: CGol[];
  onDeleteGoal: (id: number) => void;
};

export const GoalList = ({ goals, onDeleteGoal }: GoalListPros) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">You have no goals yet. Start adding some!</InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 3) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You are collecting a lot of goals!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <GoalItem title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </GoalItem>
          </li>
        ))}
      </ul>
    </>
  );
};
