export const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Top section */}
        <div className="grid gap-12 md:grid-cols-3 items-start">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-xl bg-white/10 backdrop-blur border border-white/20">
                <img
                  src="/images/logo/logo.png"
                  alt="DocMarine Health Services Logo"
                  width={40}
                  height={40}
                  className="object-contain p-1"
                />
              </div>
              <p className="font-semibold text-white">
                DocMarine Health Services LTD
              </p>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-sm">
              A registered Nigerian healthcare provider delivering certified
              medical equipment and dependable healthcare solutions for
              professional environments.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
              Company
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="hover:text-white transition">About Us</li>
              <li className="hover:text-white transition">Products</li>
              <li className="hover:text-white transition">Request Information</li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
              Compliance
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>Registered Nigerian Healthcare Provider</li>
              <li>Certified Medical Equipment</li>
              <li>Quality & Safety Standards</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Doc Marine Health Services LTD. All rights
            reserved.
          </p>
          <p>
            Built for healthcare professionals
          </p>
        </div>
      </div>
    </footer>
  );
};
