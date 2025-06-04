import { useState, useRef } from 'react'; // Removed useEffect as handleClickOutside is removed
import { useNavigate } from 'react-router-dom'; // Imported useNavigate
import { ChevronLeft, ChevronRight } from 'lucide-react'; // XCircle and ArrowRight removed from here
import { eventsData } from '../data/eventsData'; // Ensure this path is correct

const TimelinePage = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null);
  const navigate = useNavigate(); // Hook for navigation

  const scrollLeft = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Assuming eventsData contains your 12 key events in chronological order
  const displayEvents = eventsData; 

  return (
    <div className="animate-fade-in font-opensans">
      {/* Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-center mb-4">Timeline of Bangladesh's Formation</h1>
          <p className="text-center text-lg max-w-3xl mx-auto font-georgia">
            Explore the chronological journey of key events from 1948 to 1971 that led to the independence of Bangladesh.
          </p>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="relative group">
            {/* Scroll Controls */}
            <button 
              onClick={scrollLeft} 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-2 sm:-ml-4 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-neutral-100 transition opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
            </button>
            
            <button 
              onClick={scrollRight} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-2 sm:-mr-4 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-neutral-100 transition opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
            </button>
            
            {/* Timeline Track */}
            <div 
              ref={timelineRef}
              className="relative overflow-x-auto pb-10 pt-24 px-4 hide-scrollbar"
              style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {/* The visual line */}
              <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-neutral-300 transform -translate-y-1/2"></div>
              
              <div className="flex space-x-28 sm:space-x-36 md:space-x-44 lg:space-x-52 relative min-w-max px-8">
                {displayEvents.map((event, index) => (
                  <div 
                    key={event.id} 
                    className="flex flex-col items-center relative pt-6 z-10"
                    onMouseEnter={() => setHoveredEventId(event.id)}
                    onMouseLeave={() => setHoveredEventId(null)}
                  >
                    {/* Timeline Marker Dot - Interactive Area */}
                    <div 
                      className={`timeline-marker-interactive w-6 h-6 rounded-full cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center
                        ${hoveredEventId === event.id 
                          ? 'bg-secondary-600 scale-125 ring-2 ring-secondary-500 ring-offset-2 shadow-xl' 
                          : 'bg-primary-600 hover:bg-primary-700 hover:scale-110 shadow-md'
                        }`
                      }
                      onClick={() => navigate(`/events/${event.slug}`)} // Navigate on click
                      title={`Click to read more about: ${event.title}`} 
                    >
                       <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Event Info Container (Date & Title) - always visible */}
                    <div 
                      className={`absolute w-60 text-center transform -translate-x-1/2 select-none pointer-events-none 
                        ${index % 2 === 0 ? 'bottom-full mb-4' : 'top-full mt-4'}
                      `}
                    >
                      <div 
                        className="text-xs font-semibold text-secondary-700 mb-1 cursor-pointer hover:underline"
                        onClick={(e) => { e.stopPropagation(); navigate(`/events/${event.slug}`);}} // Make date clickable & stop propagation
                      >
                        {event.date}
                      </div>
                      <div 
                        className="font-semibold text-xs text-primary-800 line-clamp-2 cursor-pointer hover:underline"
                        onClick={(e) => { e.stopPropagation(); navigate(`/events/${event.slug}`);}} // Make title clickable & stop propagation
                      >
                        {event.title}
                      </div>
                    </div>
                      
                    {/* Event Popup on Hover - Simplified (No Image, No "Read More" Link) */}
                    {hoveredEventId === event.id && (
                      <div 
                        className={`timeline-event-popup absolute left-1/2 transform -translate-x-1/2 w-64 bg-white p-3 rounded-lg shadow-xl border border-neutral-200 z-30 animate-fade-in
                          ${index % 2 === 0 ? 'bottom-full mb-20' : 'top-full mt-20'} 
                        `} // Adjusted positioning for hover popup
                      >
                        <h4 className="font-bold text-sm text-primary-700 mb-1 font-opensans">{event.title}</h4>
                        <p className="text-xs text-neutral-700 leading-snug line-clamp-4 font-georgia">{event.summary}</p>
                        {/* "Read more" link and XCircle button removed from hover popup */}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Legend */}
      <section className="py-10 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-2xl text-primary-800 mb-6 text-center md:text-left">Understanding the Timeline</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4 text-primary-700">Key Periods</h3>
              <ul className="space-y-4 font-georgia text-sm">
                <li className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-primary-600 mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">1948-1952:</span> Early resistance and the Language Movement, laying the groundwork for Bengali nationalism.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-primary-600 mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">1966-1970:</span> Rising political demands for autonomy, culminating in the historic 1970 elections.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-primary-600 mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">1971:</span> The declaration of independence, the brutal Liberation War, and the birth of Bangladesh.
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-primary-700">How to Use</h3>
              <p className="mb-4 font-georgia text-sm">
                Hover over any event marker (dot) on the timeline to view a brief summary of the event.
                Click on an event marker, its date, or its title to navigate to the detailed event page.
                Use the arrow buttons on the sides (visible when you hover over the timeline area) or swipe/scroll horizontally to navigate through the events.
              </p>
              <p className="font-georgia text-sm">
                Events are arranged chronologically from left to right. The event titles and dates alternate positions (above/below the line) for better readability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimelinePage;
