import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-8 mt-auto border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-8">
            <span className="text-lg font-bold text-primary">CJ PG</span>
            <div className="flex gap-6">
              <a className="text-zinc-500 hover:text-[#e5004f] text-xs transition-colors" href="#">?�용?��?</a>
              <a className="text-zinc-500 hover:text-[#e5004f] text-xs transition-colors" href="#">개인?�보처리방침</a>
              <a className="text-zinc-500 hover:text-[#e5004f] text-xs transition-colors" href="#">고객지??/a>
            </div>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">© 2024 CJ PG. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <a className="text-zinc-400 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">share</span>
          </a>
          <a className="text-zinc-400 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">language</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
