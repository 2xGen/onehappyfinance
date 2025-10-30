
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Sparkles } from 'lucide-react';

const ComingSoon = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center bg-accent/20 rounded-2xl p-10 md:p-16 border border-accent/30"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-2xl mb-6">
            <Sparkles className="w-8 h-8 text-accent-foreground" />
          </div>
          
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-accent-foreground">
            Coming Soon: Personalized Mortgage Help
          </h2>
          
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            We’re currently building tools to connect you directly with verified financial advisors and mortgage brokers in Aruba.
          </p>
          
          <p className="text-lg text-foreground/80 leading-relaxed">
            Stay tuned — soon you’ll be able to request free quotes, compare rates, and get expert guidance all in one place.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
