import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#0E0F1F] border-t border-[#2B3187]/20"
        >
          <nav className="flex flex-col p-4">
            <a 
              href="#about" 
              className="py-3 px-4 text-[#F7F8F8] hover:bg-[#2B3187] rounded-lg transition-colors"
              onClick={onClose}
            >
              About
            </a>
            <a 
              href="#publications" 
              className="py-3 px-4 text-[#F7F8F8] hover:bg-[#2B3187] rounded-lg transition-colors"
              onClick={onClose}
            >
              Publications
            </a>
            <a 
              href="#contact" 
              className="py-3 px-4 text-[#F7F8F8] hover:bg-[#2B3187] rounded-lg transition-colors"
              onClick={onClose}
            >
              Contact
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};