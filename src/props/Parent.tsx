import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("cliked")}>
      ABC
    </ChildAsFC>
  );
};
export default Parent;
