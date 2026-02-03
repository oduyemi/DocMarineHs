import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { FormEvent } from "react";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        console.error("Formspree error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-white py-20 lg:py-28 px-6 overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky-100 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-cyan-100 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* LEFT — CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-sky-600 font-semibold">
            Contact Us
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
            Let’s Talk About Your
            <span className="block text-sky-600 mt-2">
              Healthcare Needs
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Whether you need product information, quotations, or professional
            guidance, our team is ready to support healthcare institutions
            across Nigeria.
          </p>

          <div className="mt-12 space-y-10">
            <ContactItem
              icon={<Mail className="h-5 w-5" />}
              title="General Enquiries"
              value={[
                <a href="mailto:info@docmarinehs.com">info@docmarinehs.com</a>,
                <a href="mailto:charles.kanu@docmarinehs.com">charles.kanu@docmarinehs.com</a>,
                <a href="mailto:okeke.ozeph@docmarinehs.com">okeke.ozeph@docmarinehs.com</a>,
              ]}
              
            />

            <ContactItem
              icon={<Phone className="h-5 w-5" />}
              title="Phone"
              value={[
                <a href="tel:+2348034048799">+234 803 404 8799</a>,
                <a href="tel:+2348116760000">+234 811 676 0000</a>,
              ]}
            />

            <ContactItem
              icon={<MapPin className="h-5 w-5" />}
              title="Location"
              value="Nigeria"
            />
          </div>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white border border-slate-200 p-8 lg:p-10"
        >
          <form
            action="https://formspree.io/f/mkozydgn"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Formspree helpers */}
            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Submission"
            />
            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                name="name"
                label="Full Name"
                placeholder="John Doe"
                disabled={loading}
              />
              <Input
                name="email"
                label="Email Address"
                type="email"
                placeholder="you@email.com"
                disabled={loading}
              />
            </div>

            <Input
              name="organization"
              label="Organization (Optional)"
              placeholder="Hospital / Clinic name"
              required={false}
              disabled={loading}
            />

            <Textarea
              name="message"
              label="Message"
              placeholder="Tell us how we can help you..."
              disabled={loading}
            />

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </Button>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-green-600"
                >
                  <CheckCircle className="h-4 w-4" />
                  Message sent successfully. We’ll be in touch shortly.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-600"
                >
                  <AlertCircle className="h-4 w-4" />
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-xs text-slate-500 text-center">
              We typically respond within 24 hours.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

/* ---------------------------------- */
/* Reusable Components                */
/* ---------------------------------- */

const ContactItem = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode | React.ReactNode[];
}) => (
  <div className="flex items-start gap-4">
    <div className="h-11 w-11 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
      {icon}
    </div>

    <div>
      <p className="text-sm font-semibold text-slate-900">{title}</p>

      <div className="mt-1 space-y-1 text-sm text-slate-600">
        {Array.isArray(value)
          ? value.map((item, idx) => (
              <p key={idx} className="hover:text-sky-600 transition">
                {item}
              </p>
            ))
          : <p>{value}</p>}
      </div>
    </div>
  </div>
);



const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
  disabled,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}) => (
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-2">
      {label}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700
        placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500
        disabled:bg-slate-50 disabled:cursor-not-allowed"
    />
  </div>
);

const Textarea = ({
  label,
  name,
  placeholder,
  disabled,
}: {
  label: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
}) => (
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-2">
      {label}
    </label>
    <textarea
      name={name}
      rows={4}
      required
      disabled={disabled}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700
        placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500
        disabled:bg-slate-50 disabled:cursor-not-allowed"
    />
  </div>
);
