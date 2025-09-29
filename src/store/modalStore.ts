import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { UiStore } from '@/interfaces';

const modalStore = create<UiStore>()(
  devtools(
    (set) => ({
      modalObject: null,
      showModal: false,
      closeModal: () => set({ showModal: false }, false, 'closeModal'),
      setModal: (value: any) => set({ showModal: true, modalObject: value }, false, 'setModal'),
    }),
    { name: 'modalStore' }
  )
);


export default modalStore;
