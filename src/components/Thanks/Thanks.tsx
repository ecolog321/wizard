"use client";
import { useRouter } from "next/navigation";
import { Button } from "../Button/Button";

export const Thanks = () => {
  const router = useRouter();
  const goToStart = () => {
    router.push("/wizard");
  };
  const uploadArchive = () => {};
  return (
    <div className="flex flex-col gap-5 items-start justify-between w-full h-2/3 bg-white rounded-xl p-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Ваш архив создан</h1>
        <h2>Спасибо, что воспользовались нашим инструментом</h2>
      </div>
      <div className="flex flex-row gap-4">
        <Button text={"Скачать"} handler={uploadArchive}></Button>
        <Button text={"Сделать еще один"} handler={goToStart}></Button>
      </div>
    </div>
  );
};
