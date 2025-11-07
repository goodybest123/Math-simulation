import React from 'react';

const footerLinks = ["About Us", "Contact", "Privacy Policy", "Terms of Service", "Support"];

const Footer: React.FC = () => {
  return (
    <footer id="about-contact" className="relative z-10 mt-20 sm:mt-24 pt-10 text-center border-t border-white/10 mx-5 sm:mx-10">
      <p className="text-slate-300 text-sm">© 2025 G-LogicLens. All rights reserved.</p>
      <div className="flex justify-center gap-x-6 sm:gap-x-8 gap-y-2 mt-5 flex-wrap pb-10">
        {footerLinks.map(link => (
          <a key={link} href="#" className="text-cyan-400 text-sm no-underline transition-colors hover:text-cyan-300">
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;