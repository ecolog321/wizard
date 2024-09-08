"use client";

import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [size, setSize] = useState("512");
  const [name, setName] = useState('');
  const [format, setFormat] = useState("PPMd");
  const [container, setContainer] = useState("MB");
  const [files, setFiles] = useState<FileList>();
  const [isSlice, setIsSlice] = useState(false);

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
        setName
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
