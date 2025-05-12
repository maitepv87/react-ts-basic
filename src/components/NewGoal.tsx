import { useRef, type FormEvent } from "react";

type NewGoalProp = {
  onAddGoal: (goal: string, summary: string) => void;
};

export const NewGoal = ({ onAddGoal }: NewGoalProp) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const enteredGoal = goal.current?.value.trim() || "";
    const enteredSummary = summary.current?.value.trim() || "";

    if (!enteredGoal || !enteredSummary) return;

    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
};
