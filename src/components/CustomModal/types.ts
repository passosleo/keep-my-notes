export interface IProps extends IStyledProps {
  onClose?: () => void;
  onConfirm?: () => void;
  children: React.ReactNode;
  closable?: boolean;
  title?: string;
  footer?: boolean;
}

export interface IStyledProps {
  isOpen: boolean;
}
