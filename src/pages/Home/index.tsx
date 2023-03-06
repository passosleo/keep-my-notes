import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import { Wrapper } from "./styles";
import { FiPlusCircle } from "react-icons/fi";

function Home() {
  return (
    <>
      <Wrapper>
        <CustomButton
          color="outline"
          title="Adicionar nota"
          onClick={() => console.log("Adicionar nota")}
          disabled={false}
          rightIcon={<FiPlusCircle size={20} />}
          width="100%"
          height="30px"
        />
      </Wrapper>
      <CustomTextInput
        label="Título"
        placeholder="Insira um título"
        onChange={() => console.log("Adicionar nota")}
        height="10px"
      />
      <CustomTextInput
        label="Descrição"
        type="textarea"
        placeholder="Insira uma descrição"
        onChange={() => console.log("Adicionar nota")}
        height="10px"
      />
    </>
  );
}

export default Home;
