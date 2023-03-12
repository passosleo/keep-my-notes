import CustomButton from "../CustomButton";
import {
  ModalOverlay,
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "./styles";
import { IProps } from "./types";
import { IoClose } from "react-icons/io5";

export default function CustomModal({
  isOpen = false,
  children,
  onClose,
  onConfirm,
  closable = true,
  title,
  footer,
}: IProps) {
  return (
    <>
      <ModalOverlay isOpen={isOpen} onClick={closable ? onClose : () => null} />
      <ModalWrapper isOpen={isOpen}>
        <ModalContent>
          <ModalHeader>
            {title && <ModalTitle>{title}</ModalTitle>}
            {closable && (
              <ModalCloseButton>
                <IoClose onClick={onClose} size={25} />
              </ModalCloseButton>
            )}
          </ModalHeader>

          <ModalBody>{children}</ModalBody>

          {footer && (
            <ModalFooter>
              {closable && (
                <CustomButton
                  title="Cancelar"
                  variant="outline"
                  onClick={onClose}
                />
              )}
              <CustomButton
                title="Salvar"
                variant="solid"
                type="submit"
                onClick={onConfirm}
              />
            </ModalFooter>
          )}
        </ModalContent>
      </ModalWrapper>
    </>
  );
}
