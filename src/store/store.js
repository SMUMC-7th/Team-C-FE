import { create } from 'zustand';

const useStore = create((set) => ({
  commentCount: 0,
  setCommentCount: (count) => set({ commentCount: count }),
}));

export default useStore;
