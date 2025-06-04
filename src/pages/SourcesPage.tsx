import { ExternalLink } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs'; // Assuming this path is correct
import { sourceData, SourceItem } from '../data/sourceData'; // Assuming sourceData is exported and SourceItem type is defined

const SourcesPage = () => {
  // Group sources by category
  const groupedSources = sourceData.reduce((groups, source) => {
    const category = source.category || "Uncategorized"; // Default category if undefined
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(source);
    return groups;
  }, {} as Record<string, SourceItem[]>); // Specify SourceItem[] for the value type
  
  const currentYear = new Date().getFullYear(); // Get current year for citation
  // Safely get window.location.origin, provide a fallback for build/SSR scenarios
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://fromchainstofreedom.netlify.app'; 

  return (
    <div className="animate-fade-in font-opensans"> {/* Applied base font for consistency */}
      {/* Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs 
            items={[
              { label: 'Home', path: '/' },
              { label: 'Sources', path: '/sources' }, // Corrected path for Sources
            ]} 
            light
          />
          <div className="max-w-3xl mx-auto text-center mt-8">
            <h1 className="mb-4">Sources & References</h1>
            <p className="text-lg font-georgia"> {/* Applied Georgia font as per your index.css for body text */}
              A list of all sources used in researching and documenting the historical events on this site.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-6 text-primary-800 text-center md:text-left">About Our Sources</h2>
            <div className="font-georgia text-neutral-700 space-y-4"> {/* Applied Georgia font */}
              <p>
                This website, "From Chains To Freedom," draws on a wide range of historical sources to provide a comprehensive and accurate account 
                of the lesser talked historical events leading to Bangladesh's independence. We have consulted academic publications, primary documents, 
                news archives, and established historical repositories from platforms like Wikipedia, Encyclopaedia, Britannica, BBC News, Banglapedia, and various research institutions.
              </p>
              <p>
                All sources have been carefully selected for their relevance and reliability. We believe in transparent 
                attribution and encourage further exploration of these resources for a deeper understanding of this 
                significant historical period. While we strive for accuracy, the interpretation of historical events can vary, and we welcome constructive feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sources by Category */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {Object.entries(groupedSources).sort(([catA], [catB]) => catA.localeCompare(catB)).map(([category, sources]) => ( // Sort categories alphabetically
              <div key={category} className="mb-12">
                <h2 className="text-2xl md:text-3xl mb-6 text-primary-800 pb-2 border-b border-neutral-300">
                  {category}
                </h2>
                <ul className="space-y-6">
                  {sources.map((source, index) => (
                    <li key={index} className="bg-white p-6 rounded-lg shadow-md border border-neutral-200">
                      <h3 className="text-lg font-semibold mb-2 text-primary-700">
                        {source.title || "Untitled Source"}
                      </h3>
                      {source.author && (
                        <p className="text-neutral-700 mb-1 text-sm font-georgia">
                          <span className="font-semibold font-opensans">Author:</span> {source.author}
                        </p>
                      )}
                      {source.publication && (
                        <p className="text-neutral-700 mb-1 text-sm font-georgia">
                          <span className="font-semibold font-opensans">Publication/Site:</span> {source.publication}
                        </p>
                      )}
                      {source.year && (
                        <p className="text-neutral-700 mb-1 text-sm font-georgia">
                          <span className="font-semibold font-opensans">Year:</span> {source.year}
                        </p>
                      )}
                      {source.url && (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 mt-2 text-sm font-semibold"
                        >
                          Access Source
                          <ExternalLink className="ml-1.5 h-4 w-4" />
                        </a>
                      )}
                       {!source.url && (
                        <p className="text-neutral-500 mt-2 text-sm italic">Link not available</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Citation Guidelines - UPDATED SECTION */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-6 text-primary-800 text-center md:text-left">How to Cite This Website</h2>
            <div className="bg-neutral-100 p-6 rounded-lg border border-neutral-200 shadow-sm">
              <p className="mb-4 font-georgia text-neutral-700">
                If you are using information from this website for your research or publications, we recommend the following citation formats as a guideline. Please adapt it to your specific style guide (e.g., APA, MLA, Chicago).
              </p>
              
              <div className="bg-white p-4 rounded border border-neutral-300 font-mono text-sm text-neutral-600 space-y-3 mt-4">
                <div>
                  <p className="font-semibold text-neutral-700 mb-1">For the website as a whole:</p>
                  <p>Taoshif, Gazi, and Homaira Erin. <em>From Chains To Freedom</em>. {currentYear}. Accessed [Date of Access, e.g., June 5, 2025]. {siteUrl}.</p>
                </div>
                
                <hr className="my-3 border-neutral-200"/>

                <div>
                  <p className="font-semibold text-neutral-700 mb-1">For a specific event page (example):</p>
                  <p>Taoshif, Gazi, and Homaira Erin. "Title of Specific Event Page." In <em>From Chains To Freedom</em>. {currentYear}. Accessed [Date of Access]. {`${siteUrl}/events/your-event-slug`}.</p>
                </div>
              </div>
               <p className="mt-4 text-xs font-georgia text-neutral-600">
                Replace bracketed information with the relevant details. For specific event pages, use the actual title of that event page and replace 'your-event-slug' with the specific slug from the URL (e.g., '1952-language-movement').
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SourcesPage;
