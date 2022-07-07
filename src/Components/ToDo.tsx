import styled from "styled-components";
import { IToDo } from "../atoms";

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

function ToDo({ text }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      <Btn>To Do</Btn>
      <Btn>Doing</Btn>
      <Btn>Done</Btn>
    </li>
  );
}

export { ToDo };
