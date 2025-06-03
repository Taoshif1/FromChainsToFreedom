import { ExternalLink } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { sourceData } from '../data/sourceData';

const SourcesPage = () => {
  // Group sources by category
  const groupedSources = sourceData.reduce((groups, source) => {
    if (!groups[source.category]) {
      groups[source.category] = [];
    }
    groups[source.category].push(source);
    return groups;
  }, {} as Record<string, typeof sourceData>);
  
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs 
            items={[
              { label: 'Home', path: '/' },
              { label: 'Sources', path: '' },
            ]} 
            light
          />
          <div className="max-w-3xl mx-auto text-center mt-8">
            <h1 className="mb-4">Sources & References</h1>
            <p className="text-lg">
              A comprehensive list of all sources used in researching and documenting the historical events on this site.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl mb-6 text-primary-800">About Our Sources</h2>
            <p className="mb-4">
              This website draws on a wide range of historical sources to provide a comprehensive and accurate account 
              of the events leading to Bangladesh's independence. We have consulted academic publications, primary sources, 
              news archives, and established historical repositories.
            </p>
            <p>
              All sources have been carefully evaluated for reliability and accuracy. We believe in transparent 
              attribution and encourage further exploration of these resources for a deeper understanding of this 
              significant historical period.
            </p>
          </div>
        </div>
      </section>
      
      {/* Sources by Category */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {Object.entries(groupedSources).map(([category, sources]) => (
              <div key={category} className="mb-12">
                <h2 className="text-2xl mb-6 text-primary-800 pb-2 border-b border-neutral-300">
                  {category}
                </h2>
                <ul className="space-y-6">
                  {sources.map((source, index) => (
                    <li key={index} className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-lg font-semibold mb-2 text-primary-700">
                        {source.title}
                      </h3>
                      {source.author && (
                        <p className="text-neutral-700 mb-1">
                          <span className="font-semibold">Author:</span> {source.author}
                        </p>
                      )}
                      {source.publication && (
                        <p className="text-neutral-700 mb-1">
                          <span className="font-semibold">Publication:</span> {source.publication}
                        </p>
                      )}
                      {source.year && (
                        <p className="text-neutral-700 mb-1">
                          <span className="font-semibold">Year:</span> {source.year}
                        </p>
                      )}
                      {source.url && (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 mt-2"
                        >
                          Access Source
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Citation Guidelines */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl mb-6 text-primary-800">How to Cite This Website</h2>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="mb-4">
                If you would like to cite content from this website in your research or publications,
                please use the following format:
              </p>
              <div className="bg-white p-4 rounded border border-neutral-200 font-mono text-sm">
                "The Path to Independence: Key Events in Bangladesh's Formation." (2023).
                Accessed on [Date], from [URL].
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SourcesPage;