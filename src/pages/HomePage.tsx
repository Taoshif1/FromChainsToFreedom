import { Link } from 'react-router-dom';
import { Clock, Book, Image, ArrowRight } from 'lucide-react';
import { eventsData } from '../data/eventsData'; // Assuming this path is correct

const HomePage = () => {
  // Get a few featured events - let's take the first 3 for example
  const featuredEvents = eventsData.slice(0, 3);

  // Define the specific images for the featured event cards on the homepage
  // IMPORTANT: Ensure hs2.png, hs3.png, hs4.png are in your public/images/ folder
  const featuredEventImages = [
    '/images/hs2.png', // For the first featured event
    '/images/hs3.png', // For the second featured event
    '/images/hs4.png', // For the third featured event
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section - Updated with hs1.png and parallax preparation */}
      <section 
        className="relative text-white h-screen flex flex-col justify-center items-center" // Ensure h-screen for full viewport, added flex for centering
        style={{
          backgroundImage: `url(/images/hs1.png)`, // Path to your hs1.png
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // This creates the parallax effect
        }}
      >
        {/* Overlay for text readability - Placed inside the section */}
        <div 
          className="absolute inset-0 bg-neutral-900 opacity-50 z-0"> 
        </div>

        <div className="container-custom relative z-10 py-20 md:py-32 text-center"> {/* Ensure text is above overlay */}
          <div className="max-w-3xl mx-auto">
            <h1 className="mb-4 font-bold font-opensans text-4xl sm:text-5xl md:text-6xl lg:text-7xl">From Chains To Freedom</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-neutral-100 font-georgia">
              Explore the lesser talked historical moments in Bangladesh's birth from 1948 to 1971
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link
                to="/timeline"
                className="btn bg-primary-600 text-white hover:bg-primary-700 hover:text-white"
              >
                <Clock className="mr-2 h-5 w-5" />
                Explore Timeline
              </Link>
              <Link
                to="/events"
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
            <h2 className="text-center mb-8 text-primary-800 font-opensans">Introduction</h2>
            <div className="mx-auto text-neutral-800 font-georgia prose prose-lg">
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

      {/* Featured Events Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container-custom">
          <h2 className="text-center mb-2 text-primary-800 font-opensans">Featured Events</h2>
          <p className="text-center mb-12 text-neutral-600 font-georgia">Significant moments in the journey to independence</p>

          {featuredEvents.length > 0 ? (
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredEvents.map((event, index) => ( // Added index here
                <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col event-card hover:-translate-y-1.5 transition-all duration-300">
                  <div
                    className="h-56 w-full bg-center bg-cover"
                    style={{
                      // Use the specific image for the card based on its index,
                      // or fallback to event.imageUrl if not enough specific images are provided
                      backgroundImage: `url(${featuredEventImages[index] || event.imageUrl || 'https://placehold.co/600x400/cccccc/333333?text=Event+Image'})`,
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
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12 text-primary-800 font-opensans">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Timeline Card */}
            <div className="bg-neutral-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col border border-neutral-200 hover:-translate-y-1.5">
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

            {/* Events Card */}
            <div className="bg-neutral-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col border border-neutral-200 hover:-translate-y-1.5">
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

            {/* Gallery Card */}
            <div className="bg-neutral-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col border border-neutral-200 hover:-translate-y-1.5">
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
