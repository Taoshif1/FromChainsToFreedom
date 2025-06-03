import { ExternalLink } from 'lucide-react';

interface EventSourcesProps {
  sources: {
    title: string;
    url?: string;
  }[];
}

const EventSources = ({ sources }: EventSourcesProps) => {
  if (sources.length === 0) {
    return <p className="text-neutral-500 italic">No sources provided for this event.</p>;
  }
  
  return (
    <ul className="space-y-3">
      {sources.map((source, index) => (
        <li key={index} className="flex">
          <span className="text-primary-600 mr-2">•</span>
          <span className="text-neutral-700">
            {source.title}
            {source.url && (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center ml-2 text-primary-600 hover:text-primary-700"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                <span className="text-sm">Link</span>
              </a>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default EventSources;