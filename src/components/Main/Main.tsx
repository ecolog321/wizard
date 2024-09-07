"use client";

import { useState } from "react";
import { Button } from "../Button/Button";

declare module "react" {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    // extends React's HTMLAttributes
    directory?: string;
    webkitdirectory?: string;
  }
}

export const Main = () => {
  const [isSlice, setIsSlice] = useState(false);
  const [size, setSize] = useState("1024");
  const [container, setContainer] = useState("MB");

  const handleCheckSlice = (e) => {
    e.target.checked ? setIsSlice(true) : setIsSlice(false);
  };
  const goToStageTwo = () => {};

  return (
    <div>
      <h2>Для создания архива, пожалуйста, выполните следующие шаги:</h2>
      <div>
        <div>
          <h3>1. Укажите путь</h3>
          <label className=" border-cyan-100 border-t cursor-pointer">
            <span className=" font-semibold">Выбрать путь</span>
            <input
              className="opacity-0 -z-10"
              type="file"
              multiple
              onChange={(event) => console.log(event.target.files[0])}
            />
          </label>
        </div>
        <div>
          <h3>2. Имя архива</h3>
          <label className=" border-cyan-100 border-t cursor-pointer">
            <input placeholder="archiev" type="text" />
          </label>
        </div>
        <div>
          <h3>3. Разбить на тома?</h3>
          <label className=" border-cyan-100 border-t cursor-pointer">
            <input type="checkbox" onChange={handleCheckSlice} />
          </label>
        </div>
        {isSlice ? (
          <div>
            <h3>Размер</h3>
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
      <Button text={"Далее"} handler={goToStageTwo}></Button>
    </div>
  );
};
