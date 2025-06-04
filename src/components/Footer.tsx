import { NavLink } from 'react-router-dom';
import { Flag, Heart } from 'lucide-react'; // Assuming Github icon is not used here based on previous code.

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-8 font-opensans"> {/* Added font-opensans for consistency */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xl font-semibold">
              <Flag className="h-6 w-6 text-secondary-600" />
              <span className="text-white"> From Chains To Freedom</span>
            </div>
            <p className="text-neutral-300 text-sm font-georgia"> {/* Assuming you want Georgia for this descriptive text */}
              Exploring the key historical events from 1948 to 1971 that led to the independence of Bangladesh.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Timeline
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Gallery
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/sources" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Sources
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  About
                </NavLink>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Bangladesh_Liberation_War"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white transition-colors text-sm"
                >
                  Wikipedia
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bolt.new Attribution */}
        <div className="text-center my-8 pt-8 border-t border-neutral-700">
          {/* IMPORTANT: 
            1. Get the Bolt logo image file (e.g., bolt-logo.svg or bolt-logo.png).
            2. Create a 'public' folder at the root of your Vite project if it doesn't exist.
            3. Inside 'public', create an 'images' folder (e.g., public/images/).
            4. Place your bolt-logo.png (or .svg) into public/images/.
            5. Update the src attribute below to "/images/your-bolt-logo-filename.png".
          */}
          <img  
            src="/images/white_circle.png" 
            alt="Bolt Logo" 
            className="h-10 w-auto mx-auto mb-2" // Adjust size as needed
          />
          <p className="text-neutral-400 text-sm">
            Powered by Bolt.new
          </p>
        </div>
        
        <div className="border-t border-neutral-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} From Chains To Freedom. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-neutral-400 text-sm">
            <span>Created with</span>
            <Heart className="h-4 w-4 text-secondary-500" /> {/* Ensure secondary-500 is defined in your Tailwind config */}
            <span>for historical education</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
