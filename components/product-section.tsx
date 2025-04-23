"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";

export function ProductSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Our Latest Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Discover cutting-edge technology designed to enhance your everyday life
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PRODUCTS.map((product, index) => (
            <motion.div key={product.id} variants={item}>
              <Card
                className={`h-full transition-all duration-300 overflow-hidden ${
                  activeIndex === index
                    ? "ring-2 ring-primary ring-offset-2"
                    : "hover:shadow-lg"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <CardHeader className="p-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground font-medium">
                      {product.category}
                    </p>
                    <h3 className="font-semibold text-xl">{product.name}</h3>
                    <p className="font-bold text-lg">{product.price}</p>
                  </div>
                  <p className="mt-3 text-muted-foreground text-sm">
                    {product.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full group">
                    Learn more
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}