
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const allGuides = [
  { title: "Cost of Living in Aruba (2025 Guide)", excerpt: "A complete guide to property ownership, legal processes, and financial considerations.", category: "Finance & Retirement", link: "/aw/guides/cost-of-living-in-aruba" },
  { title: "Moving to Aruba: What to Know Before You Relocate", excerpt: "Our analysis on interest rates, lending policies, and what they mean for your home buying journey.", category: "Finance & Retirement", link: "/aw/guides/moving-to-aruba" },
  { title: "Renting vs. Buying in Aruba", excerpt: "Everything you need to know about protecting your property investment in Aruba's climate.", category: "Mortgages", link: "/aw/guides/renting-vs-buying-in-aruba" },
  { title: "Best Neighborhoods to Buy a Home in Aruba", excerpt: "A side-by-side comparison of the top lenders on the island.", category: "Mortgages", link: "/aw/guides/best-neighborhoods-to-buy-a-home-in-aruba" },
  { title: "5 Common Mistakes When Applying for a Mortgage in Aruba", excerpt: "Understand the local pension system and how it affects expats.", category: "Mortgages", link: "/aw/guides/5-common-mortgage-mistakes-in-aruba" },
  { title: "Health Insurance for Expats in Aruba", excerpt: "Navigate the options for private and public health coverage.", category: "Insurance", link: "#" },
];

const categories = ["All", "Mortgages", "Insurance", "Finance & Retirement"];

const Guides = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGuides = useMemo(() => {
    return allGuides.filter(guide => {
      const matchesCategory = activeFilter === "All" || guide.category === activeFilter;
      const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) || guide.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <>
      <Helmet>
        <title>Financial Guides for Aruba | OneHappyFinance</title>
        <meta name="description" content="Explore our expert guides on mortgages, insurance, finance, and retirement in Aruba. Get the clarity you need to make smart financial decisions." />
        <link rel="canonical" href="https://onehappyfinance.com/aw/guides" />
      </Helmet>
      <div className="relative">
        {/* Fixed background image */}
        <div className="fixed inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Mortgages in Aruba" src="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Mortages%20in%20Aruba.png" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <header className="relative pt-24 pb-12 md:pt-32 md:pb-16 text-center z-10">
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">Our Financial Guides</h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/90">Clarity for your financial journey in Aruba.</p>
            </motion.div>
        </header>

        <main className="container mx-auto px-4 py-16 relative z-10 bg-background">
            {/* Filter and Search Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                        <Button
                            key={category}
                            variant={activeFilter === category ? 'default' : 'ghost'}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-2 rounded-md ${activeFilter === category ? 'bg-primary text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            {category.replace(" in Aruba", "")}
                        </Button>
                    ))}
                </div>
                <div className="relative w-full md:w-auto">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input 
                        type="text"
                        placeholder="Search guides..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-full md:w-64"
                    />
                </div>
            </div>

            {/* Guides Grid */}
            <AnimatePresence>
                <motion.div 
                    layout 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredGuides.length > 0 ? (
                        filteredGuides.map((guide, index) => (
                        <motion.article
                            layout
                            key={guide.title}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
                        >
                            <Link to={guide.link} className="block overflow-hidden h-48">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={guide.title} src="https://images.unsplash.com/photo-1561784541-9a06ac2eb2ea" />
                            </Link>
                            <div className="p-6 flex flex-col flex-grow">
                                <span className="inline-block self-start px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-3">
                                {guide.category}
                                </span>
                                <h3 className="font-heading text-lg font-semibold mb-3 text-foreground leading-tight flex-grow">
                                  <Link to={guide.link} className="hover:text-primary transition-colors">{guide.title}</Link>
                                </h3>
                                <p className="text-foreground/80 mb-4 leading-relaxed text-sm">
                                {guide.excerpt}
                                </p>
                                <Link to={guide.link} className="text-primary hover:text-primary-hover font-semibold group-hover:text-primary-hover flex items-center transition-colors mt-auto">
                                Read More
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.article>
                        ))
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="lg:col-span-3 text-center py-16"
                        >
                            <p className="text-xl text-gray-500">No guides found matching your criteria. Try another search!</p>
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>
        </main>
      </div>
    </>
  );
};

// Dummy AnimatePresence for layout animation
const AnimatePresence = ({ children }) => <>{children}</>;

export default Guides;
