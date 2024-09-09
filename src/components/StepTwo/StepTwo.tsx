"use client";

import { useData } from "@/context/dataContext/hooks/useData";
import { Button } from "../Button/Button";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const StepTwo: React.FC = () => {
  const [error, setError] = useState<string | null>("");
  const router = useRouter();
  const dataContext = useData();
  if (!dataContext) {
    return <div>Ошибка доступа</div>;
  }
  const { setFiles, files, isSlice, isLoading, setIsLoading } = dataContext;

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const arrayFiles = Array.from(e.target.files as FileList);
    setFiles((prevFiles) => [...prevFiles, ...arrayFiles]);
  };

  const cancelChose = () => {
    setFiles([]);
  };

  const goToStageOne = () => {
    setIsLoading(true)
    router.push("/wizard");
  };
  const goToStageThree = () => {
   if (files.length >= 1) {
    setIsLoading(true)
    router.push("/wizard/stageThree")
   } else {
    setError("Нужно выбрать хотя бы 1 файл");
   }
      
  };


  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return isLoading ? (
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
      {error ? <p className="text-red-400">{error}</p> : null}
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
