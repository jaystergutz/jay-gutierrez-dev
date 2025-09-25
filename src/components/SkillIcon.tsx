import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import React from 'react';

interface SkillIconProps {
  icon: LucideIcon;
  name: string;
  index: number;
}

export function SkillIcon({ icon: Icon, name, index }: SkillIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.1, 
        rotate: 5,
        transition: { duration: 0.2 }
      }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:bg-accent/50 transition-colors cursor-pointer group"
    >
      <motion.div
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6 }}
        className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
      >
        <Icon className="w-8 h-8 text-primary" />
      </motion.div>
      <span className="text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors">
        {name}
      </span>
    </motion.div>
  );
}