
type Props = {
  title?: string;
  className?: string;
  size?: "small" | "medium" | "large";
}

const Title = ({
  title = "Title",
  className = "",
  size = "medium",
}:Props) => {
  return (
    <div className={`text-2xl font-bold ${className} 
      ${size === "small" ? "text-lg" : ""
        } ${size === "medium" ? "text-2xl" : ""}
        ${size === "large" ? "text-4xl" : ""
      }
    `}>
      {title}
    </div>
  );
}

export default Title;