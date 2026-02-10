
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/src/hooks/useInView';
import { Home, Shield, PiggyBank, Plane } from 'lucide-react';

const Services = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: Home,
      title: "Mortgages in Aruba",
      items: [
        "How to apply for a home loan (resident or non-resident)",
        "What the banks look for",
        "Understanding mortgage rates and fees",
        "Tips for first-time buyers in Aruba"
      ],
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Insurance",
      items: [
        "Health and travel insurance in Aruba",
        "Property and home coverage for homeowners",
        "Car insurance rules and recommended providers"
      ],
      color: "text-green-600"
    },
    {
      icon: PiggyBank,
      title: "Pensions & Retirement",
      items: [
        "Saving for retirement while living or working in Aruba",
        "Pension rules for locals and expats",
        "Understanding tax implications"
      ],
      color: "text-purple-600"
    },
    {
      icon: Plane,
      title: "Financial Tips for Expats",
      items: [
        "Buying property in Aruba as a foreigner",
        "Transferring funds securely",
        "Long-term investment opportunities on the island"
      ],
      color: "text-orange-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-background via-white/50 to-background relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-[28px] font-bold mb-4">What We Cover</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Comprehensive financial guidance tailored for Aruba's unique market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 p-8 border border-white/50 hover:border-primary/20"
            >
              <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-secondary/10 ${service.color}`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">{service.title}</h3>
                </div>
              <div>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
