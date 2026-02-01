import { motion } from "framer-motion";
import { products } from "../data/products";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  return (
    <section
      id="products"
      className="
        relative overflow-hidden
        bg-gradient-to-b from-slate-50 via-white to-slate-50
        py-24 lg:py-32 px-6
      "
    >
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-sky-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
            Our Products
          </p>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Medical Equipment You Can
            <span className="block mt-2 bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
              Rely On
            </span>
          </h2>

          <p className="mt-7 text-lg text-slate-600 leading-relaxed">
            A carefully curated range of certified medical and emergency
            equipment designed for performance, safety, and professional
            healthcare environments.
          </p>

          {/* Accent */}
          <div className="mt-10 h-px w-28 bg-gradient-to-r from-sky-500 to-transparent" />
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
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
                hidden: { opacity: 0, y: 32, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
