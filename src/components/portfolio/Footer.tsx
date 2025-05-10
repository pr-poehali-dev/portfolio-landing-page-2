
const Footer = () => {
  return (
    <footer className="py-8 bg-[#0F131B] text-white/70 text-sm">
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Александр Петров. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
