import { ReactNode } from "react";
import { Container } from "./style";
import Header from "../Header";

interface TemplateProps {
  children: ReactNode;
}

export function Template({ children }: TemplateProps) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
