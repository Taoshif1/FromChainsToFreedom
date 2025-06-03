import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, XCircle } from 'lucide-react'; // Added XCircle for closing popup
import { eventsData } from '../data/eventsData'; // Ensure this path is correct

const TimelinePage = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeEventId, setActiveEventId] = useState<string | null>(null);
  // scrollPosition state might not be strictly necessary for functionality if not used elsewhere
  // const [scrollPosition, setScrollPosition] = useState(0); 

  // const handleScroll = () => {
  //   if (timelineRef.current) {
  //     setScrollPosition(timelineRef.current.scrollLeft);
  //   }
  // };

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

  // Optional: Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // A more robust check might be needed if popups are complex
      // For now, this closes if click is not on a marker or within a popup structure
      const target = event.target as HTMLElement;
      if (activeEventId && !target.closest('.timeline-event-popup') && !target.closest('.timeline-marker')) {
        setActiveEventId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeEventId]);


  // Ensure we only use the 12 events you specified, assuming eventsData has them in order.
  // If eventsData might contain more, you might want to slice it:
  // const displayEvents = eventsData.slice(0, 12);
  // For now, assuming eventsData IS the 12 events.
  const displayEvents = eventsData;


  return (
    <div className="animate-fade-in font-opensans"> {/* Applied base font */}
      {/* Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-center mb-4">Timeline of Bangladesh's Formation</h1>
          <p className="text-center text-lg max-w-3xl mx-auto font-georgia">
            Explore the chronological journey of key events from 1948 to 1971 that led to the independence of Bangladesh.
          </p>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="relative group"> {/* Added group for button visibility on hover */}
            {/* Scroll Controls - visible on hover of the timeline container */}
            <button 
              onClick={scrollLeft} 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 md:-ml-6 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-neutral-100 transition opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-primary-600" />
            </button>
            
            <button 
              onClick={scrollRight} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 md:-mr-6 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-neutral-100 transition opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-primary-600" />
            </button>
            
            {/* Timeline Track */}
            <div 
              ref={timelineRef}
              className="relative overflow-x-auto pb-10 pt-20 px-4 hide-scrollbar" // Increased top padding for popups
              style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }} // For iOS momentum scroll
            >
              {/* The visual line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-300 transform -translate-y-1/2"></div>
              
              <div className="flex space-x-24 sm:space-x-32 md:space-x-40 lg:space-x-48 relative min-w-max"> {/* Increased spacing */}
                {displayEvents.map((event, index) => (
                  <div key={event.id} className="flex flex-col items-center relative pt-6"> {/* Added pt-6 for spacing */}
                    {/* Timeline Marker Dot */}
                    <div 
                      className={`timeline-marker w-5 h-5 cursor-pointer z-10 transition-all duration-300 ease-in-out border-4 border-white shadow-md ${
                        activeEventId === event.id ? 'scale-125 bg-secondary-600 ring-2 ring-secondary-500 ring-offset-2' : 'bg-primary-600 hover:bg-primary-700'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent click from bubbling to document for closing
                        setActiveEventId(activeEventId === event.id ? null : event.id);
                      }}
                      title={event.title} // Tooltip for accessibility
                    ></div>
                    
                    {/* Event Info Container - positioned above or below the line */}
                    <div 
                      className={`absolute w-64 text-center transform -translate-x-1/2 ${
                        index % 2 === 0 ? 'bottom-full mb-5' : 'top-full mt-5' // Alternating position
                      }`}
                    >
                      <div className="text-xs font-semibold text-secondary-600 mb-1">{event.date}</div>
                      <div className="font-semibold text-sm text-primary-800">{event.title}</div>
                      
                      {/* Event Popup - Enhanced */}
                      {activeEventId === event.id && (
                        <div 
                          className="timeline-event-popup absolute left-1/2 transform -translate-x-1/2 mt-3 w-72 bg-white p-4 rounded-lg shadow-xl border border-neutral-200 z-30 animate-fade-in"
                          onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to document
                        >
                          <button 
                            onClick={() => setActiveEventId(null)}
                            className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-600"
                            aria-label="Close popup"
                          >
                            <XCircle size={20} />
                          </button>
                          {event.imageUrl && (
                            <img 
                              src={event.imageUrl} 
                              alt={event.title} 
                              className="w-full h-32 object-cover rounded-md mb-3" 
                            />
                          )}
                          <h4 className="font-bold text-md text-primary-700 mb-1">{event.title}</h4>
                          <p className="text-xs text-neutral-600 mb-3 leading-snug line-clamp-3">{event.summary}</p>
                          <Link 
                            to={`/events/${event.slug}`} 
                            className="inline-flex items-center text-xs text-primary-600 hover:text-primary-700 font-semibold"
                          >
                            Read more
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </div>
                      )}
                    </div>
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
                Click on any event marker (dot) on the timeline to view a brief summary and an image related to the event.
                Use the arrow buttons on the sides (visible when you hover over the timeline area) or swipe/scroll horizontally to navigate through the events.
              </p>
              <p className="font-georgia text-sm">
                Events are arranged chronologically from left to right. The information cards alternate positions (above/below the line) for better readability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimelinePage;
