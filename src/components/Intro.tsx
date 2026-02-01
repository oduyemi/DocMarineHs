import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Stethoscope } from "lucide-react";

export const Intro = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.25),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.25),transparent_45%)]" />
      <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT — CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo & brand */}
          <div className="flex items-center gap-4 mb-10">
            <div className="relative h-14 w-14 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
              <img
                src="/images/logo/logo.png"
                alt="DocMarine Health Services Logo"
                width={100}
                height={100}
                className="object-contain p-2"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-sky-300">
                Healthcare & Medical Equipment
              </p>
              <p className="font-semibold text-white">
                DocMarine Health Services LTD
              </p>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Reliable Medical
            <span className="block mt-3 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Solutions You Can Trust
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 text-lg md:text-xl text-slate-300 max-w-xl">
            A Nigerian-registered healthcare company delivering certified medical
            equipment and comprehensive healthcare solutions for hospitals,
            clinics, and emergency response teams.
          </p>

          {/* Accent divider */}
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-sky-400 to-transparent" />

          {/* CTA Buttons */}
          <div className="relative mt-10 flex flex-wrap items-center gap-6">
            {/* Ambient glow */}
            <div className="absolute -left-10 -top-6 h-32 w-72 rounded-full bg-sky-500/30 blur-3xl" />

            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="
                relative z-10 inline-flex items-center justify-center
                px-10 py-6 rounded-xl font-semibold text-base
                bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600
                text-white
                shadow-[0_12px_35px_rgba(14,165,233,0.45)]
                hover:shadow-[0_20px_60px_rgba(14,165,233,0.65)]
                transition-all duration-300
              "
            >
              Explore Products
              <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="
                relative z-10 inline-flex items-center justify-center
                px-10 py-6 rounded-xl font-semibold text-base
                border border-sky-400/40
                text-sky-300
                bg-white/5 backdrop-blur
                hover:bg-sky-400/10 hover:text-white
                transition-all duration-300
              "
            >
              Request Information
            </motion.button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg">
            <Stat value="100%" label="Certified Products" />
            <Stat value="24/7" label="Emergency Support" />
            <Stat value="Nationwide" label="Service Coverage" />
          </div>
        </motion.div>

        {/* RIGHT — TRUST CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid gap-8"
        >
          <TrustItem
            icon={<ShieldCheck className="h-7 w-7" />}
            title="Globally Certified Equipment"
            text="All products meet international medical and safety standards."
          />
          <TrustItem
            icon={<HeartPulse className="h-7 w-7" />}
            title="Emergency & Critical Care Ready"
            text="Designed for high-pressure medical environments."
          />
          <TrustItem
            icon={<Stethoscope className="h-7 w-7" />}
            title="Clinical-Grade Performance"
            text="Trusted by healthcare professionals across Nigeria."
          />
        </motion.div>
      </div>
    </section>
  );
};

/* ---------------- COMPONENTS ---------------- */

const TrustItem = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 260, damping: 18 }}
    className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-8 shadow-lg"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="h-12 w-12 rounded-xl bg-sky-400/20 text-sky-400 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <p className="text-slate-300 leading-relaxed">{text}</p>
  </motion.div>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <p className="text-2xl font-bold text-white">{value}</p>
    <p className="text-sm text-slate-400 mt-1">{label}</p>
  </div>
);
