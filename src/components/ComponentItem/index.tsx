import type { IcomponentLists } from "../../constants/interface";

const ComponentItem = ({
  title,
  icon,
  key
}: IcomponentLists) => {

  return (
    <div className="w-full h-12 bg-zinc-300 border border-zinc-400 text-zinc-800 dark:text-zinc-50 dark:bg-gray-900 dark:border-gray-950 font-semibold rounded-lg mb-4 flex items-center justify-center hover:scale-[103%] transition-transform ease-in-out duration-300 cursor-pointer" id={key}>
      {icon} {title} 
    </div>
  )
}

export default ComponentItem;
