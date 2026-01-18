import { NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-2 rounded-full text-sm font-medium transition ${
    isActive
      ? 'bg-white text-slate-900 shadow'
      : 'text-slate-100 hover:bg-slate-700'
  }`;

const Nav = () => {
  return (
    <header className="w3-bar w3-blue px-6 py-3 shadow">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <span className="text-lg font-semibold text-white">Jamilvite</span>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
