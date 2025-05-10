import { type ReactNode } from "react";

interface GoalItemProps {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}

export const GoalItem = ({ title, id, children, onDelete }: GoalItemProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};
