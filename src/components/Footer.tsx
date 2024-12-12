import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutralC-white text-primaryC-black py-12 border-t border-slate-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primaryC-black">
              Integrator Co.
            </h3>
            <p className="text-slate-500 mb-4">
              Connecting systems, empowering businesses.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primaryC-black hover:text-secondaryC-orange transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-primaryC-black hover:text-secondaryC-orange transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-primaryC-black hover:text-secondaryC-orange transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="text-primaryC-black hover:text-secondaryC-orange transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-primaryC-black">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Services", "About Us", "Projects", "Catalog"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-500 hover:text-secondaryC-orange transition-colors flex items-center"
                  >
                    <span className="mr-2">•</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-primaryC-black">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-500">
                <MapPin size={18} className="mr-2 text-primaryC-yellow" />
                123 Integration Street, Tech City, TC 12345
              </li>
              <li className="flex items-center text-slate-500">
                <Phone size={18} className="mr-2 text-primaryC-yellow" />
                (123) 456-7890
              </li>
              <li className="flex items-center text-slate-500">
                <Mail size={18} className="mr-2 text-primaryC-yellow" />
                info@integratorco.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondaryC-gray text-center text-secondaryC-gray">
          <p>
            &copy; {new Date().getFullYear()} Integrator Co. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
