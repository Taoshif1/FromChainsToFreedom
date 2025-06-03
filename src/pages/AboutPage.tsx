import { Mail, GitBranch, Heart } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const AboutPage = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs 
            items={[
              { label: 'Home', path: '/' },
              { label: 'About', path: '' },
            ]} 
            light
          />
          <div className="max-w-3xl mx-auto text-center mt-8">
            <h1 className="mb-4">About This Project</h1>
            <p className="text-lg">
              Learn about our mission to document the journey to Bangladesh's independence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl mb-6 text-primary-800">Our Mission</h2>
            <p className="mb-4">
              "The Path to Independence: Key Events in Bangladesh's Formation" was created to provide an accessible, 
              well-sourced, and engaging digital narrative of the pivotal historical events from 1948 to 1971 that 
              led to the creation of Bangladesh.
            </p>
            <p className="mb-4">
              Our aim is to educate visitors about the complexities of this struggle, highlighting the fight for language, 
              rights, and self-determination, as well as the immense sacrifices made during this period. We believe that 
              understanding this history is crucial not only for preserving the memory of those who participated in these 
              events but also for contextualizing the birth of nations in the post-colonial era.
            </p>
            <p>
              This website serves as an educational tool for students, researchers, and the general public interested in 
              South Asian history, and as a commemorative platform honoring the memory of those who participated in and 
              were affected by these events.
            </p>
          </div>
        </div>
      </section>
      
      {/* Development Team */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl mb-6 text-primary-800">Development Team</h2>
            <p className="mb-8">
              This project was developed by a team of digital historians and web developers specializing in South Asian history, 
              combining historical expertise with modern web technologies to create an engaging educational resource.
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center md:items-start">
              <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <Heart className="h-10 w-10 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary-800 text-center md:text-left">Our Commitment</h3>
                <p className="mb-3">
                  We are committed to historical accuracy, educational value, and respectful presentation of these 
                  significant events. Our research draws on a wide range of academic sources, primary documents, and 
                  historical archives to provide a comprehensive and balanced account.
                </p>
                <p>
                  We welcome feedback, corrections, and additional information that could enhance the educational value 
                  of this resource. Our goal is to continually improve and expand this digital archive to better serve 
                  those interested in this important historical period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl mb-6 text-primary-800">Contact Us</h2>
            <p className="mb-8">
              We welcome your feedback, questions, and suggestions regarding this historical resource. 
              If you have additional information, corrections, or would like to collaborate on expanding this project, 
              please reach out using the methods below.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-50 p-6 rounded-lg flex items-start">
                <Mail className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary-700">Email</h3>
                  <p className="text-neutral-600">
                    For general inquiries, feedback, or contributions:
                    <a href="mailto:contact@bangladeshindependence.org" className="block mt-1">
                      contact@bangladeshindependence.org
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg flex items-start">
                <GitBranch className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary-700">Contribute</h3>
                  <p className="text-neutral-600">
                    Interested in contributing research, translations, or technical improvements?
                    Please reach out via email with details of how you'd like to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Acknowledgements */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl mb-6 text-primary-800">Acknowledgements</h2>
            <p className="mb-4">
              We would like to express our gratitude to the numerous historians, researchers, and institutions whose work has 
              made this project possible. Their dedication to preserving and analyzing the history of Bangladesh's formation 
              has provided the foundation for this educational resource.
            </p>
            <p>
              Special thanks to libraries, archives, and educational institutions that maintain and provide access to 
              historical documents, photographs, and academic resources related to this period of history.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;