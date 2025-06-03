import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { eventsData } from '../data/eventsData';

const EventsListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredEvents = eventsData.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    event.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-center mb-4">Key Historical Events</h1>
          <p className="text-center text-lg max-w-3xl mx-auto">
            Explore the 12 pivotal events from 1948 to 1971 that shaped the journey to Bangladesh's independence.
          </p>
        </div>
      </section>
      
      {/* Search Bar */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container-custom">
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
      </section>
      
      {/* Events Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-600">No events found matching your search.</p>
              <button 
                onClick={() => setSearchTerm('')} 
                className="mt-4 btn btn-outline"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <Link 
                  key={event.id} 
                  to={`/events/${event.slug}`}
                  className="event-card group"
                >
                  <div 
                    className="h-48 bg-center bg-cover"
                    style={{ backgroundImage: `url(${event.imageUrl})` }}
                  ></div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-neutral-500 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <h3 className="text-xl mb-3 font-semibold text-primary-800 group-hover:text-primary-600 transition">
                      {event.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 line-clamp-2">
                      {event.summary}
                    </p>
                    <div className="flex items-center text-primary-600 group-hover:text-primary-700 transition">
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsListPage;