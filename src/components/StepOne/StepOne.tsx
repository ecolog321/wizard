"use client";

import { Button } from "../Button/Button";
import { useRouter } from "next/navigation";
import { useData } from "@/context/dataContext/hooks/useData";
import { useState } from "react";

declare module "react" {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    // extends React's HTMLAttributes
    directory?: string;
    webkitdirectory?: string;
  }
}

export const StepOne = () => {
  const router = useRouter();

  const {
    size,
    setSize,
    container,
    setContainer,
    isSlice,
    setIsSlice,
    setName,
    name,
    setPath,
    path,
  } = useData();

  const [error, setError] = useState("");

  const handleCheckSlice = (e) => {
    e.target.checked ? setIsSlice(true) : setIsSlice(false);
  };

  const handlePath = (e) => {
    setPath(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const goToStageTwo = () => {
    name.length >= 4
      ? router.push("/wizard/stageTwo")
      : setError("Введите имя архива не менее 4 символов");
  };


    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  ) : (
    <div className="flex flex-col gap-5 items-start justify-between w-full h-2/3 bg-white rounded-xl p-6 min-h-96">
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl">1. Укажите путь</h3>
        <label className=" border-cyan-100 border-t cursor-pointer">
          <span className=" bg-slate-400 p-2 rounded-sm font-semibold hover:bg-slate-800 hover:text-cyan-50">
            Открыть проводник
          </span>
          <input
            className="hidden"
            type="file"
            webkitdirectory=""
            directory=""
            onChange={handlePath}
          />
        </label>
        <p>{path}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl">2. Задайте имя архива</h3>
        <label className=" border-cyan-100 border-t cursor-pointer">
          <input
            className="text-black rounded-sm border-2 focus:border-black p-2"
            placeholder="archive"
            type="text"
            onChange={handleName}
            value={name}
          />
        </label>
      </div>
      {error ? <p className="text-red-400">{error}</p> : null}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl">3. Разбить архив на тома?</h3>
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          <input
            className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox"
            checked={isSlice}
            onChange={handleCheckSlice}
          />
        </label>
      </div>
      {isSlice ? (
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl">4.Размер</h3>
          <div className="flex flex-row gap-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option defaultValue="512">512</option>
                <option value="256">256</option>
                <option value="2048">2048</option>
              </select>
            </label>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={container}
                onChange={(e) => setContainer(e.target.value)}
              >
                <option value="KB">KB</option>
                <option value="MB">MB</option>
                <option value="TB">TB</option>
              </select>
            </label>
          </div>
        </div>
      ) : null}
      <div>
        <Button text={"Вперед"} handler={goToStageTwo}></Button>
      </div>
    </div>
  );
};
