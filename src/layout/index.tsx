import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
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
