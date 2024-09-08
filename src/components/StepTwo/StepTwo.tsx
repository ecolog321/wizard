"use client";

import { useData } from "@/context/dataContext/hooks/useData";
import { Button } from "../Button/Button";
import { useRouter } from "next/navigation";

export const StepTwo = () => {

  const {setFiles}=useData();
  const router = useRouter();

  const goToStageOne = () => {
    router.push("/wizard");
  };
  const goToStageThree = () => {
    router.push("/wizard/stageThree");
  };

  return (
    <div>
      <div>
        <div>
          <h3>5. Выберите файлы</h3>
          <label className=" border-cyan-100 border-t cursor-pointer">
            <span className=" font-semibold">Открыть проводник</span>
            <input
              className="hidden"
              type="file"
              multiple
              onChange={(event) => setFiles(event.target.files)}
            />
          </label>
        </div>
      </div>
      <div>
        <Button text={"Назад"} handler={goToStageOne}></Button>
        <Button text={"Вперед"} handler={goToStageThree}></Button>
      </div>
    </div>
  );
};
