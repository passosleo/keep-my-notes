import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import { Wrapper } from "./styles";
import { FiPlusCircle } from "react-icons/fi";
import CustomModal from "../../components/CustomModal";
import useNotes from "./hooks/useNotes";

export default function Notes() {
  const { handleAddNote, isModalOpen, setIsModalOpen, newNote, setNewNote } =
    useNotes();
  return (
    <>
      <Wrapper>
        <CustomButton
          variant="solid"
          title="Adicionar nota"
          onClick={() => setIsModalOpen(true)}
          disabled={false}
          rightIcon={<FiPlusCircle size={20} />}
          width="13rem"
          height="3rem"
        />
      </Wrapper>

      <form onSubmit={(e) => handleAddNote(e)}>
        <CustomModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          footer={true}
          title="Adicionar nota"
          closable={true}
        >
          <CustomTextInput
            label="Título"
            placeholder="Insira um título"
            onChange={({ target }) =>
              setNewNote({ ...newNote, title: target.value })
            }
            maxLength={25}
            width="280px"
            required
            value={newNote.title}
          />
          <CustomTextInput
            label="Descrição"
            type="textarea"
            placeholder="Insira uma descrição"
            onChange={({ target }) =>
              setNewNote({ ...newNote, description: target.value })
            }
            size="medium"
            width="280px"
            value={newNote.description}
          />
        </CustomModal>
      </form>
    </>
  );
}
