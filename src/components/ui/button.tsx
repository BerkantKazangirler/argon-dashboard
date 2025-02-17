interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  id?: string;
  icon?: boolean;
}
import classNames from "classnames";
export const Button = ({ id, children, className, ...rest }: ButtonProps) => {
  return (
    <button id={id} className={classNames(className)} {...rest}>
      {children}
    </button>
  );
};
