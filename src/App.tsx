import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TimelinePage from './pages/TimelinePage';
import EventsListPage from './pages/EventsListPage';
import EventDetailPage from './pages/EventDetailPage';
import GalleryPage from './pages/GalleryPage';
import SourcesPage from './pages/SourcesPage';
import AboutPage from './pages/AboutPage';
import { eventsData } from './data/eventsData';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="timeline" element={<TimelinePage />} />
        <Route path="events" element={<EventsListPage />} />
        {eventsData.map((event) => (
          <Route 
            key={event.id}
            path={`events/${event.slug}`} 
            element={<EventDetailPage eventId={event.id} />} 
          />
        ))}
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="sources" element={<SourcesPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;