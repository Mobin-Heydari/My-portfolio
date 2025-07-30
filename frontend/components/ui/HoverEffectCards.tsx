import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Blog } from "@/types/Blog";

export const HoverEffectCards = ({
  items,
  className,
}: {
  items: Blog[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link key={item.slug} href={`/blogs/${item.slug}`}>
          <motion.div
            className="relative group block h-full w-full p-2 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg bg-base"
                />
              )}
              <div className="p-4">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.content}</CardDescription>
                <CardMeta date={item.created_at} category={item.category.name} />
              </div>
            </Card>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden bg-base-light dark:bg-base-dark border border-transparent dark:border-white/[0.2] group-hover:border-Primary relative z-20 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide text-xl mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("mt-2 text-zinc-300 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};

export const CardMeta = ({
  date,
  category,
  className,
}: {
  date: string;
  category: string;
  className?: string;
}) => {
  return (
    <div className={cn("mt-4 flex justify-between items-center", className)}>
      <span className="text-xs text-Primary">{date}</span>
      <span className="bg-Base text-white text-xs px-2 py-1 rounded-full">
        {category}
      </span>
    </div>
  );
};
