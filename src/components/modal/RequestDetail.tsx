import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const RequestDetailModal = ({
  product,
  onClose,
}: {
  product?: { name: string };
  onClose: () => void;
}) => {
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
        initial={{ y: 30, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 30, opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="
          relative z-10 w-full max-w-xl
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
          <X className="h-5 w-5 text-white" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-10 text-white">
          <h2 className="text-2xl font-semibold tracking-tight">
            Request Product Information
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            We’ll get back to you with detailed specs, pricing, and availability.
          </p>

          {/* Product context */}
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
            {product ? (
              <>
                <span className="text-slate-400">Product:</span>{" "}
                <span className="font-medium text-white">
                  {product.name}
                </span>
              </>
            ) : (
              <span className="text-slate-400">
                General product inquiry
              </span>
            )}
          </div>

          <form className="mt-8 space-y-5">
            <Input
              placeholder="Full name"
              className="h-11 bg-white/5 border-white/10 text-white placeholder:text-slate-400"
            />

            <Input
              type="email"
              placeholder="Email address"
              className="h-11 bg-white/5 border-white/10 text-white placeholder:text-slate-400"
            />

            <Input
              type="tel"
              placeholder="Phone number"
              className="h-11 bg-white/5 border-white/10 text-white placeholder:text-slate-400"
            />

            <Input
              placeholder="Company / Organization (optional)"
              className="h-11 bg-white/5 border-white/10 text-white placeholder:text-slate-400"
            />

            <Textarea
              placeholder="What information do you need?"
              className="min-h-[110px] bg-white/5 border-white/10 text-white placeholder:text-slate-400"
            />

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="h-11 rounded-full px-8 bg-gradient-to-r from-cyan-500 to-sky-500">
                Send Request
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="h-11 rounded-full border-white/20 text-gray-900"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};
