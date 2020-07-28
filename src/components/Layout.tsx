import React, { ReactNode } from "react";
import { Global } from "./Global";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Global />
      {children}
    </>
  );
};
