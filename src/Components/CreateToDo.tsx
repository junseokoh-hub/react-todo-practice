import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState) as Categories;
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => {
      const newToDos = [{ text: toDo, id: Date.now(), category }, ...oldToDos];
      localStorage.setItem("todos", JSON.stringify(newToDos));
      return newToDos;
    });
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", { required: "Please write a To Do" })}
        placeholder="write a to do"
      />
      <button>Add</button>
    </form>
  );
}

export { CreateToDo };
