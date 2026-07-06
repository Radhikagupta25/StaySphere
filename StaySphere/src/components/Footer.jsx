import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[#E8E1D9] bg-[#F5F2ED]">

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 px-6 py-12 md:flex-row">

        <div className="max-w-sm">

          <h2 className="text-3xl font-semibold text-[#433A34]">
            StaySphere
          </h2>

          <p className="mt-4 leading-7 text-[#746A61]">
            Discover handpicked hotels across the country.
            Experience comfort, elegance and unforgettable
            stays wherever your journey takes you.
          </p>

        </div>

        <div>

          <h3 className="mb-5 text-lg font-semibold text-[#433A34]">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">

            <a href="/" className="text-[#746A61] transition hover:text-[#B8898E]">
              Home
            </a>

            <a href="#hotels" className="text-[#746A61] transition hover:text-[#B8898E]">
              Hotels
            </a>

            <a href="#contact" className="text-[#746A61] transition hover:text-[#B8898E]">
              Contact
            </a>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="mb-5 text-lg font-semibold text-[#433A34]">
            Contact
          </h3>

          <div className="flex flex-col gap-4 text-[#746A61]">

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>New Delhi, India</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>support@staynest.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+91 98765 XXXX</span>
            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-[#E8E1D9]">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-[#8A8178] md:flex-row">

          <p>
            © {new Date().getFullYear()} StaySphere. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a href="#" className="transition hover:text-[#B8898E]">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-[#B8898E]">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;