import { GoalItem } from "./GoalItem.tsx";
import { GoalItem as CGol } from "../App.tsx";

// type GoalListPros = {
//   goals: { title: string; description: string; id: number }[];
// };   ===> o'

type GoalListPros = {
  goals: CGol[];
  onDeleteGoal: (id: number) => void;
};

export const GoalList = ({ goals, onDeleteGoal }: GoalListPros) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <GoalItem title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </GoalItem>
        </li>
      ))}
    </ul>
  );
};
