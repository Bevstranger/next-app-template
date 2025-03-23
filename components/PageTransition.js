'use client';

// components/PageTransition.js
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  const pathname = usePathname(); // Получаем текущий путь

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // exit={{ opacity: 1 }}
        transition={{ duration: 2, type: 'tween' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
