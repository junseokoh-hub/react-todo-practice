import { ReactComponentElement } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IToDo, toDoState } from "../atoms";

const Btn = styled.button`
  margin: 0 0.5em;
  padding: 0.5em;
  border: 1px solid #22a6b3;
  border-radius: 0.5em;
  background-color: #fff;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:active {
    background-color: #22a6b3;
    transform: scale(0.95);
  }
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  // const onClick = (newCategory: IToDo["category"]) => {
  //   console.log(`I wanna go to ${newCategory}`);
  // };
  // give name on each button is another way
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    console.log(`I wanna go to ${name}`);
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <Btn name="DOING" onClick={onClick /*() => onClick("DOING")*/}>
          Doing
        </Btn>
      )}
      {category !== "TO_DO" && (
        <Btn name="TO_DO" onClick={onClick /*() => onClick("TO_DO")*/}>
          To Do
        </Btn>
      )}
      {category !== "DONE" && (
        <Btn name="DONE" onClick={onClick /*() => onClick("DONE")*/}>
          Done
        </Btn>
      )}
    </li>
  );
}

export { ToDo };
