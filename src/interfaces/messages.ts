export interface TitleProps {
  title: string;
};

export interface Message {
  title: string;
  description: string;
}

export interface MessageState {
  openSuccess: boolean; // Estado para mostrar el modal de éxito
  messageSuccess: Message | null; // Mensaje de éxito
  setSuccess: (message: Message) => void; // Establecer mensaje de éxito
  closeSuccess: () => void; // Método para cerrar el modal de éxito
}
