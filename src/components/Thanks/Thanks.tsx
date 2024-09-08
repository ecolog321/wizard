'use client'
import { useRouter } from "next/navigation"
import { Button } from "../Button/Button"

export const Thanks = ()=>{
    const router=useRouter();
    const goToStart=()=>{
        router.push("/wizard");
    }
    return (
        <div>
            <div>
            <h1>Ваш архив создан</h1>
            <h2>Спасибо, что воспользовались нашим инструментом</h2>
            </div>
            <Button text={"Сделать еще один"} handler={goToStart}></Button>
        </div>
     
    )
}