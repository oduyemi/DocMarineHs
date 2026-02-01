"use client";

import { motion } from "framer-motion";
import { products } from "../data/products";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  return (
    <section className="relative bg-slate-50 py-20 lg:py-28 px-6 overflow-hidden" id="products">
      {/* Subtle background accents */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sky-100 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-sky-100 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-widest text-sky-600 font-semibold">
            Our Products
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
            Medical Equipment You Can
            <span className="block text-sky-600 mt-2">
              Rely On
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            A carefully curated range of medical and emergency equipment
            engineered for reliability, safety, and professional healthcare
            environments.
          </p>

          {/* Accent divider */}
          <div className="mt-8 h-px w-24 bg-gradient-to-r from-sky-500 to-transparent" />
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="
            grid gap-10
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
