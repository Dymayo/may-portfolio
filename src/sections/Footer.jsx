const Footer = () => {
  return (
    <footer className="footer w-full">
      <div className="footer-container w-full flex flex-col md:flex-row justify-between items-center px-4 gap-2">
        <div className="flex flex-col justify-center md:items-start  items-center">
          <a href="/">Visit my blog at joseign</a>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-end">
            © {new Date().getFullYear()} May | Joseign All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
