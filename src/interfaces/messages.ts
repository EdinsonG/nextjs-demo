export interface Message {
  title: string;
  description: string;
}

export interface MessageState {
  openSuccess: boolean;
  messageSuccess: Message | null;
  setSuccess: (message: Message) => void;
  closeSuccess: () => void;
}
