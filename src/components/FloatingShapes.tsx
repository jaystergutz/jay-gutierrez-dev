import { motion } from 'motion/react';

export function FloatingShapes() {
  const shapes = [
    { id: 1, size: 60, x: '10%', y: '20%', delay: 0 },
    { id: 2, size: 40, x: '80%', y: '10%', delay: 1 },
    { id: 3, size: 80, x: '15%', y: '70%', delay: 2 },
    { id: 4, size: 35, x: '85%', y: '60%', delay: 0.5 },
    { id: 5, size: 50, x: '45%', y: '15%', delay: 1.5 },
    { id: 6, size: 25, x: '70%', y: '80%', delay: 2.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute opacity-10 bg-gradient-to-br from-primary to-accent rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + shape.id,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}