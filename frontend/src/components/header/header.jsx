import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
      <nav className="max-w-6xl mx-auto backdrop-blur-md bg-[#0B192C]/70 border border-white/10 px-6 py-3 rounded-2xl shadow-2xl">
        <div className="flex justify-between items-center">
          
          
          <Link to="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-[#5E7AC4] rounded-full blur-[2px] group-hover:blur-none transition-all duration-500 shadow-[0_0_15px_#5E7AC4]" />
            <h1 className="text-xl font-black tracking-widest text-white italic">
              ORB<span className="text-[#5E7AC4]">IE</span>
            </h1>
          </Link>

          
          

          
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-gray-300 hover:text-white text-xs uppercase tracking-widest font-bold">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-white text-black hover:bg-[#FF6500] hover:text-white px-5 py-2 rounded-full text-xs uppercase tracking-widest font-black transition-all duration-300 shadow-xl"
            >
              Join
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;