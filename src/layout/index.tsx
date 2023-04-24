import NavBar from "./components/NavBar";
import { ContentWrapper } from "./styles";
import { IProps } from "./types";

function Layout({ children }: IProps) {
  return (
    <>
      <NavBar />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
}

export default Layout;
