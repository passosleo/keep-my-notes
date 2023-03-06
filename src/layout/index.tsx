import Footer from "./Footer";
import NavBar from "./NavBar";
import { ContentWrapper } from "./styles";
import { IProps } from "./types";

function Layout({ children }: IProps) {
  return (
    <>
      <NavBar />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </>
  );
}

export default Layout;
