import { create } from 'zustand';
import { MessageState } from '@/interfaces'

const useMessageStore = create<MessageState>((set) => ({
  openSuccess: false,
  messageSuccess: null,
  setSuccess: (message) => set({ openSuccess: true, messageSuccess: message }),
  closeSuccess: () => set({ openSuccess: false }),
}));

export default useMessageStore;