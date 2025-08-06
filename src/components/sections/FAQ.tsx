import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, MapPin, Gift, Car, Shirt, Camera, Phone, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  icon: React.ReactNode;
}

const FAQAccordion: React.FC<{ items: FAQItem[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="border border-sage-200 rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 text-left font-medium focus:outline-none"
            onClick={() => toggleItem(index)}
          >
            <div className="flex items-center">
              <div className="p-1 bg-sage-100 rounded-md text-sage-700 mr-2">
                {item.icon}
              </div>
              <span>{item.question}</span>
            </div>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-sage-600" />
            ) : (
              <ChevronDown className="h-5 w-5 text-sage-600" />
            )}
          </button>
          {openIndex === index && (
            <div className="p-4 pt-0 bg-sage-50">
              <div className="text-sage-700">
                {item.answer}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const FAQ: React.FC = () => {
  const allFAQs: FAQItem[] = [
    {
      question: "À quelle heure devrions-nous arriver ?",
      answer: (
        <p>
          Pour la cérémonie civile à la Mairie de Bordeaux, merci d'arriver à 13h30 au plus tard.
          Pour ceux qui ne peuvent assister qu'à la cérémonie laïque, l'arrivée au Château Pape Clément est prévue à 15h30.
        </p>
      ),
      icon: <Clock className="h-4 w-4" />
    },
    {
      question: "Comment s'habiller pour l'événement ?",
      answer: (
        <div>
          <p className="mb-2">
            Nous vous invitons à porter des tenues élégantes, idéalement dans notre palette de couleurs : vert sauge, blanc et touches d'or.
          </p>
          <p>
            Les messieurs sont encouragés à porter une veste ou un costume. Pour les dames, attention aux talons hauts pour les parties extérieures (pelouse).
          </p>
        </div>
      ),
      icon: <Shirt className="h-4 w-4" />
    },
    {
      question: "Les enfants sont-ils les bienvenus ?",
      answer: (
        <p>
          Oui, les enfants sont les bienvenus. Un service de garde d'enfants et des animations seront organisés pendant le dîner et la soirée pour leur permettre de s'amuser entre eux.
          Merci de préciser l'âge de vos enfants dans le formulaire de confirmation de présence.
        </p>
      ),
      icon: <HelpCircle className="h-4 w-4" />
    },
    {
      question: "Comment se rendre sur les lieux ?",
      answer: (
        <div>
          <p className="mb-2">
            <strong>Mairie de Bordeaux :</strong> Accessible en tramway (ligne A ou B, arrêt Hôtel de Ville), ainsi qu'en voiture (parkings à proximité : parking Victor Hugo ou Pey Berland).
          </p>
          <p>
            <strong>Château Pape Clément :</strong> À 15 minutes en voiture du centre de Bordeaux. Un service de navette sera disponible depuis la Mairie après la cérémonie civile.
          </p>
        </div>
      ),
      icon: <MapPin className="h-4 w-4" />
    },
    {
      question: "Où se garer ?",
      answer: (
        <div>
          <p className="mb-2">
            <strong>Mairie de Bordeaux :</strong> Parkings payants à proximité (Victor Hugo, Pey Berland, Tourny).
          </p>
          <p>
            <strong>Château Pape Clément :</strong> Parking gratuit sur place avec une capacité de 80 véhicules. Nous vous encourageons à privilégier le covoiturage ou notre service de navette.
          </p>
        </div>
      ),
      icon: <Car className="h-4 w-4" />
    },
    {
      question: "Y aura-t-il une navette pour rentrer à l'hôtel ?",
      answer: (
        <p>
          Oui, un service de navette sera organisé en fin de soirée (à partir de 00h30 et jusqu'à 2h30) pour raccompagner les invités vers les hôtels du centre-ville de Bordeaux.
          Les points de dépose seront : Place de la Bourse, Quinconces et Mériadeck.
        </p>
      ),
      icon: <Car className="h-4 w-4" />
    },
    {
      question: "Avez-vous une liste de mariage ?",
      answer: (
        <p>
          Oui, nous avons créé une liste de mariage en ligne accessible à l'adresse suivante : <a href="https://www.millemercismariage.com/tiffanyetwarren/" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-800 underline">www.millemercismariage.com/tiffanyetwarren</a>
        </p>
      ),
      icon: <Gift className="h-4 w-4" />
    },
    {
      question: "Préférez-vous des cadeaux ou une participation financière ?",
      answer: (
        <p>
          Votre présence est déjà un merveilleux cadeau pour nous ! Cependant, si vous souhaitez nous gâter, nous privilégions une participation à notre voyage de noces au Japon. 
          Vous pouvez contribuer via notre liste de mariage en ligne.
        </p>
      ),
      icon: <Gift className="h-4 w-4" />
    }
  ];

  return (
    <div className="section-container fade-in">
      <h2 className="section-title">Questions Fréquentes</h2>
      
      <div className="max-w-3xl mx-auto">
        <FAQAccordion items={allFAQs} />
      </div>
    </div>
  );
};

export default FAQ;