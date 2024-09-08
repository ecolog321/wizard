import { Heading } from "@/components/Heading/Heading";
import { DataProvider } from "@/context/dataContext/dataContext";

export default function WizardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DataProvider>
      <Heading></Heading>
      {children}
      </DataProvider>
      
    </div>
  );
}
