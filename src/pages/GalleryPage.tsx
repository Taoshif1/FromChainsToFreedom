import { useState } from 'react';
import { X } from 'lucide-react';
import { galleryData } from '../data/galleryData';
import Breadcrumbs from '../components/Breadcrumbs';

type FilterType = 'all' | 'language-movement' | 'political' | 'liberation-war';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCaption, setSelectedCaption] = useState<string>('');
  
  const filterButtons: { label: string; value: FilterType }[] = [
    { label: 'All Images', value: 'all' },
    { label: 'Language Movement', value: 'language-movement' },
    { label: 'Political Events', value: 'political' },
    { label: 'Liberation War', value: 'liberation-war' },
  ];
  
  const filteredImages = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(image => image.category === activeFilter);
    
  const openModal = (image: string, caption: string) => {
    setSelectedImage(image);
    setSelectedCaption(caption);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs 
            items={[
              { label: 'Home', path: '/' },
              { label: 'Gallery', path: '' },
            ]} 
            light
          />
          <div className="max-w-3xl mx-auto text-center mt-8">
            <h1 className="mb-4">Historical Image Gallery</h1>
            <p className="text-lg">
              Browse photographs documenting the key events in Bangladesh's journey to independence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {filterButtons.map(button => (
              <button
                key={button.value}
                onClick={() => setActiveFilter(button.value)}
                className={`px-4 py-2 rounded-full transition ${
                  activeFilter === button.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          {filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-600">No images found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                  onClick={() => openModal(image.url, image.caption)}
                >
                  <div 
                    className="h-64 bg-center bg-cover"
                    style={{ backgroundImage: `url(${image.url})` }}
                  ></div>
                  <div className="p-4">
                    <p className="text-sm text-neutral-500">{image.year}</p>
                    <p className="text-neutral-700 mt-1">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-secondary-500 transition"
            onClick={closeModal}
          >
            <X className="h-8 w-8" />
          </button>
          
          <div 
            className="max-w-4xl max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt={selectedCaption} 
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
            <div className="text-white text-center mt-4 max-w-2xl mx-auto">
              <p>{selectedCaption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;