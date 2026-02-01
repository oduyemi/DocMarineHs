"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Stethoscope } from "lucide-react";

export const About = () => {
  return (
    <section className="relative py-20 lg:py-28 px-6 bg-white overflow-hidden" id="about">
      {/* Subtle background accent */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky-100 blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT — ABOUT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-sky-600 font-semibold">
            About DocMarine
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            A Trusted Partner in
            <span className="block text-sky-600 mt-2">
              Healthcare Delivery
            </span>
          </h2>

          <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-xl">
            Doc Marine Health Services LTD is a privately registered healthcare
            company in Nigeria, dedicated to providing dependable medical
            equipment and comprehensive healthcare solutions. We work closely
            with hospitals, clinics, emergency responders, and healthcare
            institutions to deliver tools that meet strict industry standards.
          </p>

          {/* Divider */}
          <div className="mt-8 h-px w-24 bg-gradient-to-r from-sky-500 to-transparent" />
        </motion.div>

        {/* RIGHT — HIGHLIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          <FeatureItem
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Registered & Compliant"
            text="Fully registered Nigerian healthcare provider operating with regulatory compliance."
          />
          <FeatureItem
            icon={<HeartPulse className="h-6 w-6" />}
            title="Emergency & Diagnostic Focus"
            text="Specialized equipment for emergency response, diagnostics, and critical care."
          />
          <FeatureItem
            icon={<Stethoscope className="h-6 w-6" />}
            title="Hospital-Grade Quality"
            text="Medical supplies designed for reliability, safety, and professional use."
          />
        </motion.div>

      </div>
    </section>
  );
};

/* ---------------- COMPONENT ---------------- */

const FeatureItem = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 260, damping: 18 }}
    className="flex gap-5 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md"
  >
    <div className="h-12 w-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-slate-600 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  </motion.div>
);
