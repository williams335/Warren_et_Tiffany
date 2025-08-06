import React, { useState } from 'react';
import { Send, Mail, Phone, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with delay
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="section-container fade-in">
      <h2 className="section-title">Contact</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="card p-6 h-full">
              <h3 className="text-xl font-medium mb-6">Nos coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-sage-100 p-2 rounded-md mr-4">
                    <Mail className="h-5 w-5 text-sage-700" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:mariage.tiffanyetwarren@gmail.com" 
                      className="text-sage-600 hover:text-sage-800"
                    >
                      mariage.tiffanyetwarren@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sage-100 p-2 rounded-md mr-4">
                    <Phone className="h-5 w-5 text-sage-700" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Téléphone</h4>
                    <p className="text-sage-700">Tiffany : 06 XX XX XX XX</p>
                    <p className="text-sage-700">Warren : 06 XX XX XX XX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sage-100 p-2 rounded-md mr-4">
                    <MessageSquare className="h-5 w-5 text-sage-700" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Contact jour J</h4>
                    <p className="text-sage-700">Claire (témoin) : 06 XX XX XX XX</p>
                    <p className="text-sage-700">Thomas (témoin) : 06 XX XX XX XX</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-sage-50 rounded-lg">
                <h4 className="font-medium mb-2">Note importante</h4>
                <p className="text-sm text-sage-700">
                  Le jour du mariage, nous serons occupés à profiter de chaque moment. Pour toute question logistique, 
                  merci de contacter directement nos témoins qui seront ravis de vous aider.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="card p-6">
              <h3 className="text-xl font-medium mb-6">Envoyez-nous un message</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-sage-100 text-sage-700 rounded-lg flex items-center">
                  <div className="mr-3 bg-sage-200 rounded-full p-1">
                    <svg className="h-5 w-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Message envoyé avec succès ! Nous vous répondrons dès que possible.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="form-label">Nom <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="form-label">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="form-label">Message <span className="text-red-500">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-input"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="h-4 w-4 mr-2" />
                        Envoyer
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;