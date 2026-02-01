import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import type { Product } from "../data/products";
import { ProductModal } from "./modal/Product";

export const ProductCard = ({ product }: { product: Product }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="
          group relative
          rounded-2xl
          border border-white/10
          bg-slate-900
          shadow-[0_16px_40px_rgba(0,0,0,0.45)]
        "
      >
        {/* TOP: IMAGE STRIP (NOT HERO IMAGE) */}
        <div className="relative h-44 overflow-hidden rounded-t-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-auto"
          />
          <div className="absolute inset-0 bg-slate-950/20" />
        </div>

        {/* BODY */}
        <div className="p-6 space-y-5">
          {/* Product name */}
          <h3 className="text-base font-semibold tracking-tight text-white">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-slate-300 line-clamp-3">
            {product.description}
          </p>

          {/* Divider */}
          <div className="h-px w-full bg-white/10" />

          {/* Footer row */}
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wide text-slate-400">
              Medical Equipment
            </span>

            <button
              onClick={() => setOpen(true)}
              className="
                inline-flex items-center gap-2
                text-sm font-medium
                text-sky-400
                hover:text-sky-300
                transition-colors
              "
            >
              <Eye className="h-4 w-4" />
              View
            </button>
          </div>
        </div>

        {/* Hover outline (quiet, controlled) */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-sky-400/40 transition" />
      </motion.article>

      <AnimatePresence>
        {open && (
          <ProductModal product={product} onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};
