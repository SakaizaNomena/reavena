import Title from "../Title";

type Props = {
  title?: string;
  withBorder?: boolean;
  className?: string;
  titlePosition?: "left" | "center" | "right";
  children?: React.ReactNode;
}

const Section = ({
  title = "Section Title",
  withBorder = false,
  className = "",
  titlePosition = "left",
  children
}: Props) => {
  return (
    <div className={`p-4 ${withBorder ? "border border-zinc-300" : ""} ${className}`}>
      <div className={`flex flex-row items-center ${
        titlePosition === "left" ? "justify-start" :
        titlePosition === "center" ? "justify-center" :
        titlePosition === "right" ? "justify-end" : ""
      }`}>
        <Title 
          title={title}
          size="medium"
        />
      </div>
      <div className="children p-4">
        {children}
      </div>
    </div>
  );
}

export default Section;