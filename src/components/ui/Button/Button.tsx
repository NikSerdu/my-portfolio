import cn from "clsx";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
type TypeProps = {} & PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

const Button: FC<TypeProps> = ({ className, ...rest }) => {
  return (
    <button
      className={cn(
        "bg-primary rounded-[1000px] text-white px-8 py-4 hover:bg-opacity-90 transition duration-200",
        className
      )}
      {...rest}
    ></button>
  );
};

export default Button;
