import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-8 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              Company
            </h2>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Jobs</li>
              <li className="hover:text-white cursor-pointer">Press</li>
              <li className="hover:text-white cursor-pointer">Partners</li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              Solutions
            </h2>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Men</li>
              <li className="hover:text-white cursor-pointer">Women</li>
              <li className="hover:text-white cursor-pointer">Kids</li>
              <li className="hover:text-white cursor-pointer">Accessories</li>
              <li className="hover:text-white cursor-pointer">Sale</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              Support
            </h2>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Track Order</li>
              <li className="hover:text-white cursor-pointer">Shipping</li>
              <li className="hover:text-white cursor-pointer">Returns</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              Legal
            </h2>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer">
                Refund Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Cookies Policy
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-400 space-y-2">
          <p>© 2026 Fashion E-Commerce. All Rights Reserved.</p>

          <p>
            Made with ❤️ by <span className="text-white font-medium">Sachin Kumar</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;