import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X } from "lucide-react";
import type { Product } from "../data/products";
import { Button } from "@/components/ui/button";

export const ProductCard = ({ product }: { product: Product }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl overflow-hidden"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-semibold text-lg text-slate-900">
            {product.name}
          </h3>

          <p className="mt-2 text-sm text-slate-600 line-clamp-3">
            {product.description}
          </p>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setOpen(true)}
            className="
              mt-5 px-0 text-sky-600 font-semibold
              hover:bg-transparent hover:text-sky-700
            "
          >
            <Eye className="w-4 h-4 mr-2" />
            View details
          </Button>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <ProductModal product={product} onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

/* ---------------- MODAL ---------------- */

const ProductModal = ({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal panel */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 30 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative z-10 max-w-3xl w-full rounded-2xl bg-white shadow-2xl overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 bg-slate-100 hover:bg-slate-200"
        >
          <X className="w-5 h-5 text-slate-700" />
        </button>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="bg-slate-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-slate-900">
              {product.name}
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Divider */}
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-sky-500 to-transparent" />

            {/* Actions */}
            <div className="mt-8 flex gap-4">
              <Button className="px-6 bg-sky-500/90">
                Request Information
              </Button>
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
