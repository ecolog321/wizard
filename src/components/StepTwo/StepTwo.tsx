"use client";

import { useData } from "@/context/dataContext/hooks/useData";
import { Button } from "../Button/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const StepTwo = () => {
  const { setFiles, files, isSlice } = useData();
  const [error, setError] = useState("");
  const router = useRouter();

  const handleFiles = (e) => {
    setError(null);
    const arrayFiles = Array.from(e.target.files);
    setFiles(...files, arrayFiles);
    console.log(files.length);
  };

  const cancelChose = () => {
    setFiles([]);
  };

  const goToStageOne = () => {
    router.push("/wizard");
  };
  const goToStageThree = () => {
    files.length >= 1
      ? router.push("/wizard/stageThree")
      : setError("Нужно выбрать хотя бы 1 файл");
  };

  return (
    <div className="flex flex-col gap-5 items-start justify-between w-full h-2/3 bg-white rounded-xl p-6 min-h-96">
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl">{isSlice ? "5." : "4."} Выберите файлы</h3>
        <label className=" border-cyan-100 border-t cursor-pointer">
          <span className="bg-slate-400 p-2 rounded-sm font-semibold hover:bg-slate-800 hover:text-cyan-50">
            Открыть проводник
          </span>
          <input
            id="file"
            className="hidden"
            type="file"
            multiple
            onChange={handleFiles}
          />
        </label>
      </div>
      {error ? <p className="text-red-400">{error}</p>:null}
      <div>
        {files.map((file: File, id: number) => (
          <p key={id}>{file.name}</p>
        ))}
      </div>
      {files.length > 0 && (
        <Button text={"Сбросить выбор"} handler={cancelChose}></Button>
      )}
      <div className="flex flex-row gap-5">
        <Button text={"Назад"} handler={goToStageOne}></Button>
        <Button text={"Вперед"} handler={goToStageThree}></Button>
      </div>
    </div>
  );
};
