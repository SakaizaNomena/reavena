import { useMemo } from "react";
import componentLists from "../../constants/componentLIsts";
import ComponentItem from "../ComponentItem";
import { Link } from "react-router-dom";

const Sidebar = () => { 
  const components = useMemo(() => {
    if (componentLists && componentLists.length > 0) { 
      return componentLists;
    }
    return []
  },[componentLists]);

  return (
    <div className="w-64 h-full bg-zinc-200 border border-zinc-300 dark:border-none dark:bg-gray-800 text-white p-4 rounded-2xl overflow-y-auto">
      <Link to="/" className="block mb-6">
      <p className="label text-3xl font-bold letter-spacing-[-0.2em] text-start pl-2 mb-6 text-zinc-900 dark:text-gray-50">
          Reavena
       </p> 
      </Link>
       {components.map((c) => <ComponentItem {...c}/>)}
    </div>
  )
}

export default Sidebar;