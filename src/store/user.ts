import { create } from "zustand";


export interface ICounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}


const useCounterStore = create<ICounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

