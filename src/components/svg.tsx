import classNames from "classnames";

interface SvgProps extends React.HTMLAttributes<HTMLOrSVGImageElement> {
  id?: string;
  icon: string;
}

export const Svg = ({ id, icon, className, ...rest }: SvgProps) => {
  return (
    <img
      src={`./public/assest/${icon}.svg`}
      className={classNames(className)}
      id={id}
      alt=""
      {...rest}
    />
  );
};
