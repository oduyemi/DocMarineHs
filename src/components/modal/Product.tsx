import { useState } from "react";
import type { Product } from "@/data/products";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RequestDetailModal } from "./RequestDetail";


export const ProductModal = ({
    product,
    onClose,
  }: {
    product: Product;
    onClose: () => void;
  }) => {
    const [requestOpen, setRequestOpen] = useState(false);

    return (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-lg"
        />
  
        {/* Panel */}
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 40, opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            relative z-10 w-full max-w-4xl
            rounded-3xl overflow-hidden
            border border-white/10
            bg-slate-950
            shadow-[0_40px_120px_rgba(0,0,0,0.8)]
          "
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full p-2 bg-white/10 hover:bg-white/20"
          >
            <X className="w-5 h-5 text-white" />
          </button>
  
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-72 md:h-full">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent" />
            </div>
  
            {/* Details */}
            <div className="p-8 md:p-10 text-white">
              <h2 className="text-3xl font-semibold tracking-tight">
                {product.name}
              </h2>
  
              <p className="mt-4 text-slate-300 leading-relaxed">
                {product.description}
              </p>
  
              <div className="mt-6 h-px w-32 bg-gradient-to-r from-sky-400 to-transparent" />
  
              <div className="mt-10 flex flex-wrap gap-4">
              <Button
                onClick={() => setRequestOpen(true)}
                className="h-11 rounded-full px-8 bg-gradient-to-r from-cyan-500 to-sky-500"
              >
                Request Information
              </Button>  
              <Button
                variant="outline"
                onClick={onClose}
                className="h-11 rounded-full border-white/20 text-gray-900"
              >
                Close
              </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {requestOpen && (
            <RequestDetailModal
            product={{ name: product.name }}
            onClose={() => setRequestOpen(false)}
            />          
          )}
        </AnimatePresence>
      </motion.div>
    );
  };
  