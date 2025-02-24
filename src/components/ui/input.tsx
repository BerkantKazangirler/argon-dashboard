import classNames from "classnames";
import { Controller, useForm } from "react-hook-form";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
}

export const Input = ({ className, ...rest }: InputProps) => {
  // return <input className={classNames(className)} {...rest} />;
  const { control } = useForm();

  return (
    <Controller
      name="name"
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <input className={classNames(className)} {...rest} {...field} />
      )}
    />
  );
};
