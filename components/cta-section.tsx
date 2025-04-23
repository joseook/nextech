"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section id="support" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent dark:from-primary/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Stay Updated
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Subscribe to our newsletter for the latest product updates, tech news, and exclusive offers.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="w-full sm:w-auto flex-1 max-w-md">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="h-12 rounded-full px-6"
              />
            </div>
            <Button size="lg" className="w-full sm:w-auto rounded-full">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-sm text-muted-foreground"
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </div>
      </div>
    </section>
  );
}