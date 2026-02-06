import type { IcomponentLists } from "../../constants/interface";

const ComponentItem = ({
  title,
  icon,
  key
}: IcomponentLists) => {

  return (
    <div className="w-full h-16 bg-gray-200 rounded-lg mb-4 flex items-center justify-center" id={key}>
      {icon} {title} 
    </div>
  )
}

export default ComponentItem;
