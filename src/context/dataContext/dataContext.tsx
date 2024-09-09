"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IntDataContext {
  path: string;
  setPath: Dispatch<SetStateAction<string>>;
  size: string;
  setSize: Dispatch<SetStateAction<string>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  format: string;
  setFormat: Dispatch<SetStateAction<string>>;
  container: string;
  setContainer: Dispatch<SetStateAction<string>>;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  isSlice: boolean;
  setIsSlice: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const DataContext = createContext<IntDataContext | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [path, setPath] = useState("");
  const [size, setSize] = useState("1024");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [format, setFormat] = useState("PPMd");
  const [container, setContainer] = useState("MB");
  const [files, setFiles] = useState<File[]>([]);
  const [isSlice, setIsSlice] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <DataContext.Provider
      value={{
        size,
        setSize,
        format,
        setFormat,
        container,
        setContainer,
        files,
        setFiles,
        isSlice,
        setIsSlice,
        name,
        setName,
        password,
        setPassword,
        path,
        setPath,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
