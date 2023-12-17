import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

const variants = cva(
  "shadow-grid rounded-3xl bg-white dark:bg-neutral-900 flex flex-col justify-center @container",
  {
    variants: {
      size: {
        "1x2": "md:col-span-1 col-span-2 row-span-2 md:p-8 p-4",
        "2x2": "md:col-span-2 col-span-full row-span-2 md:p-8 p-4",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  }
);

type GridItemProps = { children: React.ReactNode } & VariantProps<
  typeof variants
>;

const GridItem = ({ size, children }: GridItemProps) => {
  return (
    <motion.div
      initial={{
        scale: 0.2,
        y: 120,
        opacity: 0,
      }}
      className={cn(
        variants({
          size,
          className:
            "hover:dark:bg-neutral-800 hover:bg-neutral-50 duration-75 transition-colors ease-in-out",
        })
      )}
    >
      {children}
    </motion.div>
  );
};

export default GridItem;
