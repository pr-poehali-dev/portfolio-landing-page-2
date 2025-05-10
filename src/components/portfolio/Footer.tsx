
import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-100 md:pl-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Василий Фролов. Все права защищены.
          </div>
          
          <div className="text-sm text-muted-foreground">
            Разработано с ❤️ в React и Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
