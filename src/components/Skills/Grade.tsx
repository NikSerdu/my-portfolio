import cn from "clsx";
import { FC } from "react";
type TypeProps = {
  grade: number;
  name: string;
};

const Grade: FC<TypeProps> = ({ grade, name }) => {
  return (
    <div className="flex items-center gap-3">
      {new Array(10).fill(0).map((_, index) => {
        return (
          <span
            key={name + grade + index}
            className={cn("w-[22px] h-[22px] rounded-full", {
              "bg-primary": index <= grade,
              "bg-primary/20": index > grade,
            })}
          ></span>
        );
      })}
    </div>
  );
};

export default Grade;
