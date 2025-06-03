import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { eventsData } from '../data/eventsData';
import EventSources from '../components/EventSources';
import Breadcrumbs from '../components/Breadcrumbs';

interface EventDetailPageProps {
  eventId: string;
}

const EventDetailPage = ({ eventId }: EventDetailPageProps) => {
  const [event, setEvent] = useState(eventsData.find(e => e.id === eventId));
  const [prevEvent, setPrevEvent] = useState<typeof event | undefined>();
  const [nextEvent, setNextEvent] = useState<typeof event | undefined>();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Find the current event and its neighbors
    const currentEventIndex = eventsData.findIndex(e => e.id === eventId);
    if (currentEventIndex === -1) {
      navigate('/events');
      return;
    }
    
    setEvent(eventsData[currentEventIndex]);
    setPrevEvent(currentEventIndex > 0 ? eventsData[currentEventIndex - 1] : undefined);
    setNextEvent(currentEventIndex < eventsData.length - 1 ? eventsData[currentEventIndex + 1] : undefined);
  }, [eventId, navigate]);
  
  if (!event) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="animate-fade-in">
      {/* Hero Header */}
      <section 
        className="relative py-20 bg-neutral-900 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${event.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-custom relative z-10">
          <Breadcrumbs 
            items={[
              { label: 'Home', path: '/' },
              { label: 'Events', path: '/events' },
              { label: event.title, path: '' },
            ]} 
            light
          />
          <div className="max-w-3xl mx-auto text-center mt-8">
            <div className="inline-flex items-center text-secondary-400 mb-4">
              <Calendar className="h-5 w-5 mr-2" />
              {event.date}
            </div>
            <h1 className="mb-6">{event.title}</h1>
          </div>
        </div>
      </section>
      
      {/* Event Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg mx-auto">
              {event.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>
            
            {/* Additional Resources */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <h3 className="text-xl mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary-600" />
                Sources & References
              </h3>
              <EventSources sources={event.sources} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Event Navigation */}
      <section className="py-8 bg-neutral-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {prevEvent ? (
              <Link 
                to={`/events/${prevEvent.slug}`}
                className="flex items-center text-primary-600 hover:text-primary-700 mb-4 md:mb-0"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Previous: {prevEvent.title}</span>
              </Link>
            ) : (
              <div></div>
            )}
            
            <Link 
              to="/events"
              className="btn btn-outline"
            >
              All Events
            </Link>
            
            {nextEvent ? (
              <Link 
                to={`/events/${nextEvent.slug}`}
                className="flex items-center text-primary-600 hover:text-primary-700 mt-4 md:mt-0"
              >
                <span>Next: {nextEvent.title}</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetailPage;