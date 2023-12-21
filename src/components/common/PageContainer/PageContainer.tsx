import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function PageContainer({ children, className }: Props) {
  return (
    <section className={`container w-full h-full flex ${className}`}>
      {children}
    </section>
  );
}

PageContainer.defaultProps = {
  className: "",
};

export default PageContainer;
