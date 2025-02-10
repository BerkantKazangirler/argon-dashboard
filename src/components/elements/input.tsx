import classNames from "classnames";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
}

export const Input = ({ className, ...rest }: InputProps) => {
  return <input className={classNames(className)} {...rest} />;
};
