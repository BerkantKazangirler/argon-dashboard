interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  id?: string;
  fontsize?: string;
  customClass?: string;
  rounded?: "lg" | "xl" | "2xl" | "3xl";
  icon?: boolean;
  text: string;
  textColor?: string;
  fonttype?: string;
}
import classname from "classnames";
export const Button = ({
  id,
  fontsize,
  customClass,
  rounded,
  icon,
  text,
  textColor,
  fonttype,
}: ButtonProps) => {
  if (customClass == undefined) {
    customClass = "";
  }
  return (
    <button
      id={id}
      className={classname(customClass + " w-20 my-auto", {
        "rounded-2xl": rounded == "2xl",
        "rounded-3xl": rounded == "3xl",
        "rounded-xl": rounded == "xl",
        "rounded-lg": rounded == "lg",

        "text-xs": fontsize == "xs",
        "text-sm": fontsize == "sm",
        "text-lg": fontsize == "lg",
        "text-2xl": fontsize == "2xl",
        "font-xl": fontsize == "xl",

        "font-medium": fonttype == "medium",
        "font-bold": fonttype == "bold",
        "font-semibold": fonttype == "semibold",

        "text-black": textColor == "black",
        "text-white": textColor == "white",
        "text-placeholderColor": textColor == "placeHolder",

        flex: icon,
      })}
    >
      {text}
    </button>
  );
};
