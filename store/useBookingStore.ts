
import { create } from 'zustand';

interface BookingStore {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    toggleModal: () => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
    toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));