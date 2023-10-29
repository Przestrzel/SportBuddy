import React from "react";

function PageContainer({ children }: { children: React.ReactNode }) {
  return <section className="container w-full h-full flex">{children}</section>;
}

export default PageContainer;
