import type { IcomponentLists } from "../../constants/interface";

const ComponentItem = ({
  title,
  icon,
  keyItem,
  activeKey,
  onClick
}: IcomponentLists) => {
  return (
    <div 
      className={`w-full h-12  text-zinc-800 dark:text-zinc-50  font-semibold rounded-l-3xl mb-4 flex items-center justify-start pl-4 hover:scale-[103%] transition-transform ease-in-out duration-300 cursor-pointer hover:dark:bg-gray-900 hover:dark:border-gray-950/10 hover:bg-gray-100 ${keyItem === activeKey ? `dark:bg-gray-900 dark:border-gray-950/10 bg-gray-100` : ''}`} 
      id={keyItem}
      onClick={() => onClick && onClick(keyItem)}
    >
      {icon} {title} 
    </div>
  )
}

export default ComponentItem;
