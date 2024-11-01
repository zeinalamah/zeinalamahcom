import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface PublicationCardProps {
  title: string;
  abstract: string;
  link: string;
}

export const PublicationCard = ({ title, abstract, link }: PublicationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-[#2B3187] rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-start gap-4">
          <div>
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl font-bold text-[#F7F8F8] hover:text-[#0E0F1F] transition-colors block mb-2"
              onClick={(e) => e.stopPropagation()}
            >
              {title}
            </a>
            <span className="text-[#F7F8F8]/80 text-sm">
              Click to view abstract
            </span>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="text-[#F7F8F8]" />
          </motion.div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <p className="text-[#F7F8F8] text-sm sm:text-base leading-relaxed">{abstract}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};