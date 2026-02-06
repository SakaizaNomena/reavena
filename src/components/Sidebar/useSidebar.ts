import { useMemo } from "react";
import componentLists from "../../constants/componentLIsts";
import useSidebarStore, { type ISidebarStore } from "../../store/useSIdebarStore";

const useSidebar = () => {
  const components = useMemo(() => {
    if (componentLists && componentLists.length > 0) { 
      return componentLists;
    }
    return []
  },[componentLists]);

  const activeKey = useSidebarStore((state: ISidebarStore) => state.activeKey);
  const setActiveKey = useSidebarStore((state: ISidebarStore) => state.setActiveKey);

  return {
    components,
    activeKey,
    setActiveKey
  }
}

export default useSidebar;