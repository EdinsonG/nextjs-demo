/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonProps } from '@mui/material';

export interface ModalButtonObject {
  text: string;
  variant: ButtonProps['variant'];
  endIcon?: string;
  onClick: () => void;
}

export interface UiStore {
  showModal: boolean;
  closeModal: () => void;
  modalObject: Message | null;
  setModal: (value: any) => void;
}

interface Message {
  title: string;
  description: string;
  maxWidth?: number;
  componentRef?: React.RefObject<HTMLElement>;
  actions: [
    {
      text: string;
      variant: 'text' | 'contained' | 'outlined';
      onClick: () => void;
    }
  ];
}

