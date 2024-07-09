import cn from "clsx";
import { motion } from "framer-motion";
import { FC, InputHTMLAttributes, useId } from "react";

type TypeProps = {
  isChecked: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox: FC<TypeProps> = ({ isChecked, ...rest }) => {
  const checkboxId = useId();
  return (
    <>
      <label htmlFor={checkboxId} className="">
        <input
          type="checkbox"
          id={checkboxId}
          className="hidden"
          defaultChecked={isChecked}
          {...rest}
        />
        <div
          className={cn(
            "w-[55px] h-7 border-primary border rounded-[1000px] px-0.5 flex items-center transition duration-200 relative"
          )}
        >
          <motion.div
            className="w-5 h-5 bg-primary rounded-full absolute"
            initial={{ x: isChecked ? "29px" : 0 }}
            animate={{ x: isChecked ? "29px" : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          ></motion.div>
        </div>
      </label>
    </>
  );
};

export default Checkbox;
