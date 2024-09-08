"use client";

import { useData } from "@/context/dataContext/hooks/useData";
import { Button } from "../Button/Button";
import { useRouter } from "next/navigation";
import { createArchive } from "@/api/archivAPI";

export const StepThree = () => {
  const { format, setFormat, password, setPassword, isSlice, files } =
    useData();
  const router = useRouter();

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const goToStageTwo = () => {
    router.push("/wizard/stageTwo");
  };
  const handleSubmit = () => {
    createArchive(files);
    router.push("/donePage");
  };

  return (
    <div className="flex flex-col gap-5 items-start justify-between w-full h-2/3 bg-white rounded-xl p-6 min-h-96">
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl">{isSlice ? "6." : "5."} Задайте пароль</h3>
        <label className=" border-cyan-100 border-t cursor-pointer">
          <input
            className="text-black rounded-sm border-2 focus:border-black p-2"
            type="password"
            onChange={handlePassword}
            value={password}
          />
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl">
          {isSlice ? "7." : "6."} Выберите метод сжатия
        </h3>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          >
            <option defaultValue="PPMd">PPMd</option>
            <option value="LZMA">LZMA</option>
          </select>
        </label>
      </div>
      <div className="flex flex-row gap-5">
        <Button text={"Назад"} handler={goToStageTwo}></Button>
        <Button text={"Готово"} handler={handleSubmit}></Button>
      </div>
    </div>
  );
};
