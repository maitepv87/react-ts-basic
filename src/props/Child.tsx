import { type ReactNode } from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  children: ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// Child will be a React function component.
// Child might have prpoperties assigned to it like "propsTypes" and "contextTypes"
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
