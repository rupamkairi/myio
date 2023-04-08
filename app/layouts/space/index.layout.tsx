import React, { Fragment } from "react";
import AuthContextProvider from "~/contexts/AuthContext";

export default function SpaceIndexLayout({ children }: any) {
  return (
    <AuthContextProvider>
      <Fragment>{children}</Fragment>
    </AuthContextProvider>
  );
}
