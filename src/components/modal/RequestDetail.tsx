import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqeladae";

export const RequestDetailModal = ({
  product,
  onClose,
}: {
  product?: { name: string };
  onClose: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    formData.append("product", product?.name ?? "General inquiry");
    formData.append("source", product ? "product_modal" : "footer");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(
        "Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setLoading(false);
    }
  }

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

          {/* SUCCESS STATE */}
          {success ? (
            <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
              <p className="text-emerald-400 font-medium">
                ✅ Request sent successfully
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Our team will contact you shortly.
              </p>

              <Button
                onClick={onClose}
                className="mt-6 rounded-full bg-emerald-500 text-slate-950 hover:bg-emerald-400"
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <Input
                name="name"
                required
                placeholder="Full name"
                className="h-11 bg-white/5 border-white/10 text-white placeholder:text-slate-400"
              />

              <Input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="h-11 bg-white/5 border-white/10 text-white placeholder:text-slate-400"
              />

              <Input
                name="phone"
                type="tel"
                placeholder="Phone number"
                className="h-11 bg-white/5 border-white/10 text-white placeholder:text-slate-400"
              />

              <Input
                name="company"
                placeholder="Company / Organization (optional)"
                className="h-11 bg-white/5 border-white/10 text-white placeholder:text-slate-400"
              />

              <Textarea
                name="message"
                required
                placeholder="What information do you need?"
                className="min-h-[110px] bg-white/5 border-white/10 text-white placeholder:text-slate-400"
              />

              {error && (
                <p className="text-sm text-red-400">
                  {error}
                </p>
              )}

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-11 rounded-full px-8 bg-gradient-to-r from-cyan-500 to-sky-500 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Request"}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="h-11 rounded-full border-white/20 text-gray-500 hover:border-white/30"
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
