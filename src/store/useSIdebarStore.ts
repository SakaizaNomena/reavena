import { create } from "zustand";

export interface ISidebarStore {
  activeKey: string;
  setActiveKey: (key: string) => void;
}

const useSidebarStore = create<ISidebarStore>((set) => ({ 
  activeKey: "avatar",
  setActiveKey: (key: string) => set({ activeKey: key }),
}));

export default useSidebarStore;