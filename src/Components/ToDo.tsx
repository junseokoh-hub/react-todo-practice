import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, IToDo, toDoState } from "../atoms";

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
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as Categories };
      const newToDos = [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
      localStorage.setItem("todos", JSON.stringify(newToDos));
      return newToDos;
    });
  };

  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDos = [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
      localStorage.setItem("todos", JSON.stringify(newToDos));
      return newToDos;
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <Btn name={Categories.DOING + ""} onClick={onClick}>
          Doing
        </Btn>
      )}
      {category !== Categories.TO_DO && (
        <Btn name={Categories.TO_DO + ""} onClick={onClick}>
          To Do
        </Btn>
      )}
      {category !== Categories.DONE && (
        <Btn name={Categories.DONE + ""} onClick={onClick}>
          Done
        </Btn>
      )}
      <Btn onClick={onDelete}>Delete</Btn>
    </li>
  );
}

export { ToDo };
