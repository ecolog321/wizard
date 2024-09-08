"use client";

import { useData } from "@/context/dataContext/hooks/useData";
import { Button } from "../Button/Button";
import { useRouter } from "next/navigation";

declare module "react" {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    // extends React's HTMLAttributes
    directory?: string;
    webkitdirectory?: string;
  }
}

export const StepThree = () => {

  const {format, setFormat}=useData();
 
  const router = useRouter();

  const goToStageTwo = () => {
    router.push("/wizard/stageTwo");
  };
  const handleSubmit = () => {
    //  createArchive();
    router.push("/donePage");
  };

  return (
    <div>
      <div>
        <div>
          <h3>6. Задайте пароль</h3>
          <label className=" border-cyan-100 border-t cursor-pointer">
            <input className=" text-black" type="password"  />
          </label>
        </div>
        <div>
          <h3>7. Выберите метод сжатия</h3>
          <label className=" border-cyan-100 border-t cursor-pointer">
            <select value={format} onChange={(e) => setFormat(e.target.value)}>
              <option defaultValue="PPMd">PPMd</option>
              <option value="LZMA">LZMA</option>
            </select>
          </label>
        </div>
      </div>
      <div>
        <Button text={"Назад"} handler={goToStageTwo}></Button>
        <Button text={"Готово"} handler={handleSubmit}></Button>
      </div>
    </div>
  );
};
