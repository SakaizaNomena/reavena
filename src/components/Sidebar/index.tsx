import ComponentItem from "../ComponentItem";
import { Link } from "react-router-dom";
import useSidebar from "./useSidebar";

const Sidebar = () => { 
  const { 
    activeKey, 
    setActiveKey, 
    components 
  } = useSidebar();
  
  return (
    <div className="w-64 h-full bg-zinc-200  dark:bg-gray-800 text-white rounded-2xl overflow-y-auto mb-4 pb-4">
      <Link to="/" className="block mb-6">
      <p className="label text-3xl font-bold letter-spacing-[-0.2em] text-start pl-6 py-4 mb-6 text-zinc-900 dark:text-gray-50">
          Reavena
       </p> 
      </Link>
      <div className="ml-4">
       {components.map((c) => <div key={c.title}>
         <ComponentItem 
           {...c}
           activeKey={activeKey}
           onClick={(key) => setActiveKey(key)}
          />
       </div> )}
      </div>
    </div>
  )
}

export default Sidebar;