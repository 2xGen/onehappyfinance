
import React from 'react';
import { motion } from 'framer-motion';

const BlogLayout = ({ title, children }) => {
  return (
    <div className="bg-background">
      <header className="bg-primary text-white pt-28 pb-16 md:pt-36 md:pb-24 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="font-heading text-4xl md:text-5xl font-bold max-w-4xl mx-auto px-4">{title}</h1>
        </motion.div>
      </header>
      <article className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto prose lg:prose-xl prose-h2:font-heading prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-p:text-lg prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-secondary prose-strong:font-semibold">
          {children}
        </div>
      </article>
    </div>
  );
};

export default BlogLayout;
