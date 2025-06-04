import { Mail, GitBranch, Heart, Users, Code, Edit3, MapPin } from 'lucide-react'; // Added Users, Code, Edit3, MapPin
import Breadcrumbs from '../components/Breadcrumbs'; // Assuming this path is correct

const AboutPage = () => {
  return (
    <div className="animate-fade-in font-opensans"> {/* Applied base font */}
      {/* Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumbs 
            items={[
              { label: 'Home', path: '/' },
              { label: 'About', path: '/about' }, // Corrected path for About
            ]} 
            light
          />
          <div className="max-w-3xl mx-auto text-center mt-8">
            <h1 className="mb-4">About This Project</h1>
            <p className="text-lg font-georgia"> {/* Added font-georgia */}
              Learn about our mission and the team behind "From Chains To Freedom."
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-6 text-primary-800 text-center md:text-left">Our Mission</h2>
            <div className="font-georgia text-neutral-700 space-y-4">
              <p>
                The project, "From Chains To Freedom," aims to provide an accessible, 
                well-sourced, and engaging digital narrative of the pivotal historical events from 1948 to 1971 that 
                led to the creation of Bangladesh.
              </p>
              <p>
                Our goal is to educate visitors about the complexities of this struggle, highlighting the fight for language, 
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
        </div>
      </section>
      
      {/* Development Team Section - Updated */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-primary-800 text-center md:text-left">Meet the Team</h2>
            <div className="space-y-8">
              {/* Team Member 1: Gazi Taoshif */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col sm:flex-row items-center text-center sm:text-left">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-primary-100 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 flex-shrink-0 ring-4 ring-primary-200">
                  <Code className="h-12 w-12 sm:h-14 sm:w-14 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1 text-primary-800">Gazi Taoshif</h3>
                  <p className="text-md text-secondary-600 font-semibold mb-2">Main Developer</p>
                  <p className="text-neutral-600 font-georgia mb-1">
                    A passionate CSE student from Bangladesh, responsible for the technical architecture, development, and implementation of this website.
                  </p>
                  <div className="flex items-center justify-center sm:justify-start text-sm text-neutral-500">
                    <MapPin size={14} className="mr-1.5"/> Bangladesh
                  </div>
                </div>
              </div>

              {/* Team Member 2: Homaira Erin */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col sm:flex-row items-center text-center sm:text-left">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-secondary-100 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 flex-shrink-0 ring-4 ring-secondary-200">
                  <Edit3 className="h-12 w-12 sm:h-14 sm:w-14 text-secondary-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1 text-primary-800">Homaira Erin</h3>
                  <p className="text-md text-secondary-600 font-semibold mb-2">Lead Researcher & Writing Specialist</p>
                  <p className="text-neutral-600 font-georgia mb-1">
                    A dedicated CSE student from Bangladesh, spearheading the historical research, content creation, and narrative accuracy for this project.
                  </p>
                   <div className="flex items-center justify-center sm:justify-start text-sm text-neutral-500">
                    <MapPin size={14} className="mr-1.5"/> Bangladesh
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center md:items-start">
                <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <Heart className="h-10 w-10 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary-800 text-center md:text-left">Our Commitment</h3>
                  <p className="mb-3 font-georgia text-neutral-700">
                    As CSE students from Bangladesh, we are deeply committed to historical accuracy, educational value, and a respectful presentation of these 
                    significant events. Our research draws on a wide range of academic sources, primary documents, and 
                    historical archives to provide a comprehensive and balanced account.
                  </p>
                  <p className="font-georgia text-neutral-700">
                    We welcome feedback, corrections, and additional information that could enhance the educational value 
                    of this resource. Our goal is to continually improve and expand this digital archive to better serve 
                    those interested in this important historical period.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section - Unchanged from your provided code */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-6 text-primary-800 text-center md:text-left">Contact Us</h2>
            <p className="mb-8 font-georgia text-neutral-700">
              We welcome your feedback, questions, and suggestions regarding this historical resource. 
              If you have additional information, corrections, or would like to collaborate on expanding this project, 
              please reach out using the methods below.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-50 p-6 rounded-lg flex items-start shadow-sm">
                <Mail className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary-700">Email</h3>
                  <p className="text-neutral-600 font-georgia">
                    For general inquiries, feedback, or contributions:
                    <a href="mailto:contact@fromchainstofreedom.info" className="block mt-1 text-primary-600 hover:underline"> {/* Example email */}
                      contact@fromchainstofreedom.info
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg flex items-start shadow-sm">
                <GitBranch className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary-700">Contribute</h3>
                  <p className="text-neutral-600 font-georgia">
                    Interested in contributing research, translations, or technical improvements?
                    Please reach out via email with details of how you'd like to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Acknowledgements Section - Unchanged */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-6 text-primary-800 text-center md:text-left">Acknowledgements</h2>
            <div className="font-georgia text-neutral-700 space-y-4">
              <p>
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
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
