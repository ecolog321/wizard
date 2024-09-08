"use client";

import { useData } from "@/context/dataContext/hooks/useData";
import { Button } from "../Button/Button";
import { useRouter } from "next/navigation";

export const StepTwo = () => {
  const {setFiles, files}=useData();
  const router = useRouter();

  const handleFiles=(e)=>{
    setFiles(e.target.files)
  }

  const goToStageOne = () => {
    router.push("/wizard");
  };
  const goToStageThree = () => {
    router.push("/wizard/stageThree");
  };

  return (
    <div className="flex flex-col gap-5 items-start justify-center w-full h-2/3 bg-white rounded-xl p-6">
      <div className="flex flex-col gap-2">
          <h3 className="text-2xl">5. Выберите файлы</h3>
          <label className=" border-cyan-100 border-t cursor-pointer">
            <span className="bg-slate-400 p-2 rounded-sm font-semibold hover:bg-slate-800 hover:text-cyan-50">Открыть проводник</span>
            <input
              id="file"
              className="hidden"
              type="file"
              multiple
              onChange={handleFiles}
            />
          </label>
      </div>
      <div>
      </div>
      <div>
        <Button text={"Назад"} handler={goToStageOne}></Button>
        <Button text={"Вперед"} handler={goToStageThree}></Button>
      </div>
    </div>
  );
};
