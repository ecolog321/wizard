"use client";

import { Button } from "../Button/Button";
import { useRouter } from "next/navigation";
import { useData } from "@/context/dataContext/hooks/useData";

declare module "react" {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    // extends React's HTMLAttributes
    directory?: string;
    webkitdirectory?: string;
  }
}

export const StepOne = () => {
  const router = useRouter();

  const { size, setSize, container, setContainer, isSlice, setIsSlice, setName } = useData();

  const handleCheckSlice = (e) => {
    e.target.checked ? setIsSlice(true) : setIsSlice(false);
  };

  const handleName=(e)=>{
    setName(e.target.value);
  }
  const goToStageTwo = () => {
    router.push("/wizard/stageTwo");
  };

  return (
    <div>
      <div>
        <div>
          <h3>1. Укажите путь</h3>
          <label className=" border-cyan-100 border-t cursor-pointer">
            <span className=" font-semibold">Открыть проводник</span>
            <input
              className="hidden"
              type="file"
              multiple
              webkitdirectory=""
              directory=""
            />
          </label>
        </div>
        <div>
          <h3>2. Задайте имя архива</h3>
          <label className=" border-cyan-100 border-t cursor-pointer">
            <input className="text-black" placeholder="archive" type="text" onChange={handleName} />
          </label>
        </div>
        <div>
          <h3>3. Разбить архив на тома?</h3>
          <label className=" border-cyan-100 border-t cursor-pointer">
            <input type="checkbox" onChange={handleCheckSlice} />
          </label>
        </div>
        {isSlice ? (
          <div>
            <h3>4.Размер</h3>
            <label className=" border-cyan-100 border-t cursor-pointer">
              <select value={size} onChange={(e) => setSize(e.target.value)}>
                <option defaultValue="512">512</option>
                <option value="256">256</option>
                <option value="2048">2048</option>
              </select>
            </label>
            <label className=" border-cyan-100 border-t cursor-pointer">
              <select
                value={container}
                onChange={(e) => setContainer(e.target.value)}
              >
                <option value="KB">KB</option>
                <option value="MB">MB</option>
                <option value="TB">TB</option>
              </select>
            </label>
          </div>
        ) : null}
      </div>
      <div>
        <Button text={"Вперед"} handler={goToStageTwo}></Button>
      </div>
    </div>
  );
};
