import { Link } from 'react-router-dom';
import { Clock, Book, Image, ArrowRight } from 'lucide-react';
import { eventsData } from '../data/eventsData'; // Assuming this path is correct

const HomePage = () => {
  // Get a few featured events - let's take the first 3 for example
  // You can adjust this logic to pick specific featured events if needed
  const featuredEvents = eventsData.slice(0, 3);
  // If you want to ensure there are always events, add a check:
  // const featuredEvents = eventsData.length >= 3 ? eventsData.slice(0, 3) : eventsData;


  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-30"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/3698049/pexels-photo-3698049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`, // Replace with your desired hero image
          }}
        ></div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 font-bold font-opensans">The Path to Independence</h1> {/* Ensure font-opensans if h1 default is georgia */}
            <p className="text-lg md:text-xl mb-8 text-neutral-100 font-georgia"> {/* Ensure font-georgia if p default is opensans */}
              Explore the defining moments in Bangladesh's birth from 1948 to 1971
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link
                to="/timeline"
                // btn-primary: bg-primary-600 text-white hover:bg-primary-700
                // Added explicit hover:text-white to ensure text remains visible
                className="btn bg-primary-600 text-white hover:bg-primary-700 hover:text-white"
              >
                <Clock className="mr-2 h-5 w-5" />
                Explore Timeline
              </Link>
              <Link
                to="/events"
                // Custom styling for outline button on dark background
                // Initial: transparent bg (implicitly), white border, white text
                // Hover: white bg, dark text (e.g., text-primary-800 or text-neutral-800)
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-800 transition-colors duration-300"
              >
                <Book className="mr-2 h-5 w-5" />
                Discover Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8 text-primary-800 font-opensans">Introduction</h2> {/* Ensure font-opensans */}
            {/* Consider adding Tailwind 'prose' class for better typography if you have the plugin */}
            <div className="mx-auto text-neutral-800 font-georgia"> {/* Ensure font-georgia */}
              <p>
                The journey to Bangladesh's independence was marked by profound struggles for linguistic, cultural,
                and political rights, culminating in a devastating war and the birth of a new nation. This website
                chronicles twelve pivotal events from 1948 to 1971 that shaped this remarkable journey.
              </p>
              <p>
                From the early language movements to the ultimate declaration of independence, these moments
                showcase the resilience, determination, and sacrifice of the Bengali people in their quest for
                self-determination and freedom.
              </p>
              <p>
                Through carefully researched historical narratives, images, and primary sources, we invite you
                to explore this significant chapter of world history and understand the formation of what is now
                Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section - Now shows multiple events */}
      <section className="py-16 bg-neutral-100">
        <div className="container-custom">
          <h2 className="text-center mb-2 text-primary-800 font-opensans">Featured Events</h2>
          <p className="text-center mb-12 text-neutral-600 font-georgia">Significant moments in the journey to independence</p>

          {featuredEvents.length > 0 ? (
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col event-card hover:-translate-y-1 transition-all duration-300"> {/* Added hover:-translate-y-1 and transition-all */}
                  <div
                    className="h-56 w-full bg-center bg-cover" // Fixed height for images
                    style={{
                      backgroundImage: `url(${event.imageUrl})`,
                    }}
                  ></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="uppercase tracking-wide text-sm text-secondary-600 font-semibold font-opensans">
                      {event.date}
                    </div>
                    <h3 className="mt-2 mb-3 text-primary-800 font-opensans text-xl">{event.title}</h3>
                    <p className="text-neutral-600 mb-4 line-clamp-3 flex-grow font-georgia">
                      {event.summary}
                    </p>
                    <Link
                      to={`/events/${event.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 mt-auto font-opensans font-semibold"
                    >
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-neutral-600 font-georgia">No featured events to display at this moment.</p>
          )}
        </div>
      </section>

      {/* Explore Sections (Timeline, Events, Gallery links) */}
      <section className="py-16 bg-white"> {/* Parent section remains white */}
        <div className="container-custom">
          {/* Added Title for Explore More Section */}
          <h2 className="text-center mb-12 text-primary-800 font-opensans">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Timeline Card - Changed background to bg-neutral-100, added border, and hover effect */}
            <div className="bg-neutral-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col border border-neutral-200 hover:-translate-y-1">
              <div className="bg-primary-100 p-4 inline-block rounded-full mb-6 mx-auto">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="mb-4 text-primary-800 font-opensans">Timeline</h3>
              <p className="text-neutral-600 mb-6 flex-grow font-georgia">
                Explore the chronological journey from 1948 to 1971, visualizing how each event built
                upon the previous in the path to independence.
              </p>
              <Link
                to="/timeline"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 mt-auto font-opensans font-semibold justify-center"
              >
                View Timeline
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Events Card - Changed background to bg-neutral-100, added border, and hover effect */}
            <div className="bg-neutral-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col border border-neutral-200 hover:-translate-y-1">
              <div className="bg-primary-100 p-4 inline-block rounded-full mb-6 mx-auto">
                <Book className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="mb-4 text-primary-800 font-opensans">Events</h3>
              <p className="text-neutral-600 mb-6 flex-grow font-georgia">
                Delve into detailed accounts of each pivotal moment, with historical context, key figures,
                and the lasting impact on Bangladesh's formation.
              </p>
              <Link
                to="/events"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 mt-auto font-opensans font-semibold justify-center"
              >
                Discover Events
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Gallery Card - Changed background to bg-neutral-100, added border, and hover effect */}
            <div className="bg-neutral-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col border border-neutral-200 hover:-translate-y-1">
              <div className="bg-primary-100 p-4 inline-block rounded-full mb-6 mx-auto">
                <Image className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="mb-4 text-primary-800 font-opensans">Gallery</h3>
              <p className="text-neutral-600 mb-6 flex-grow font-georgia">
                Browse historical photographs documenting the struggle for independence, providing
                visual context to this significant period of history.
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 mt-auto font-opensans font-semibold justify-center"
              >
                View Gallery
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
