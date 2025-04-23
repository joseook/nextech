"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { FEATURES_LIST } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Layers, Leaf, Palette, Shield, Zap } from "lucide-react";

// Map of icon names to actual components
const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="h-10 w-10" />,
  Zap: <Zap className="h-10 w-10" />,
  Brain: <Brain className="h-10 w-10" />,
  Layers: <Layers className="h-10 w-10" />,
  Shield: <Shield className="h-10 w-10" />,
  Leaf: <Leaf className="h-10 w-10" />,
};

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="features"
      className="py-20 overflow-hidden bg-accent/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Innovative Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Pushing the boundaries of what technology can do
          </motion.p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_LIST.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type FeatureProps = {
  feature: {
    title: string;
    description: string;
    icon: string;
  };
  index: number;
};

function FeatureCard({ feature, index }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div
            className={cn(
              "w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform",
              "bg-gradient-to-br from-primary to-primary/80 dark:from-primary dark:to-primary/60"
            )}
          >
            {iconMap[feature.icon]}
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}