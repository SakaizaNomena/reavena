import type { IcomponentLists } from "../../constants/interface";

const ComponentItem = ({
  title,
  icon,
  keyItem,
  activeKey,
  onClick
}: IcomponentLists) => {
  console.log('activeKey', activeKey);
  return (
    <div 
      className={`w-full h-12  text-zinc-800 dark:text-zinc-50  font-semibold rounded-l-3xl mb-4 flex items-center justify-center hover:scale-[103%] transition-transform ease-in-out duration-300 cursor-pointer ${keyItem === activeKey ? `dark:bg-gray-900 dark:border-gray-950/10 bg-gray-100` : ''}`} 
      id={keyItem}
      onClick={() => onClick && onClick(keyItem)}
    >
      {icon} {title} 
    </div>
  )
}

export default ComponentItem;
