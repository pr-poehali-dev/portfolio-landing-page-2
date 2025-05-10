import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-zinc-800 md:pl-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Василий Фролов. Все права защищены.
          </div>

          <div className="text-sm text-gray-500">
            Разработано с ❤️ в React и Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
