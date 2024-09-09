import { Heading } from "@/components/Heading/Heading";
import { DataProvider } from "@/context/dataContext/dataContext";
import Image from "next/image";

export default function WizardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex flex-col items-start px-16">
      <DataProvider>
        <Heading></Heading>
        {children}
        <Image
          className=" absolute left-2/4 top-1/4"
          src={"/images/archive.png"}
          alt=""
          width={300}
          height={400}
        ></Image>
      </DataProvider>
    </div>
  );
}
