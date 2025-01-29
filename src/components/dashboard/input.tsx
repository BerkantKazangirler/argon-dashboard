import classname from "classnames";
interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  rounded?: "lg" | "xl" | "2xl" | "3xl";
  required?: "true" | "false";
  maxlength?: number;
  minlength?: number;
  type?: string;
  pattern?: string;
  fontsize?: string;
  customClass?: string;
  value?: string;
}
export const Input = ({
  required,
  placeholder,
  rounded,
  maxlength,
  minlength,
  type,
  pattern,
  id,
  fontsize,
  customClass,
  title,
  value,
}: InputProps) => {
  if (customClass == undefined) {
    customClass = "";
  }
  return (
    <input
      id={id}
      placeholder={placeholder}
      className={classname(customClass + " border-inputBorder w-52", {
        "required:": required == "true",
        "rounded-2xl": rounded == "2xl",
        "rounded-3xl": rounded == "3xl",
        "rounded-xl": rounded == "xl",
        "rounded-lg": rounded == "lg",
        "text-xs": fontsize == "xs",
        "text-sm": fontsize == "sm",
        "text-lg": fontsize == "lg",
        "text-2xl": fontsize == "2xl",
        "font-xl": fontsize == "xl",
        "placeholder:text-placeholderColor": placeholder,
      })}
      title={title}
      value={value}
      type={type}
      pattern={pattern}
      maxLength={maxlength}
      minLength={minlength}
    ></input>
  );
};
