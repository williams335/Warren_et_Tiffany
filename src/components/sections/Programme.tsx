import React from 'react';
import { Clock, Camera, GlassWater, Music, Utensils, HeartHandshake, Car, Sun, Moon, PartyPopper } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProgrammeEvent: React.FC<TimelineEvent & { delay?: number }> = ({ time, title, description, icon, delay = 0 }) => {
  return (
    <AnimatedSection delay={delay} className="flex flex-col sm:flex-row mb-8">
      <div className="w-full sm:w-24 flex-shrink-0 text-center sm:text-right mb-2 sm:mb-0 sm:mr-6">
        <span className="inline-block px-3 py-1 bg-sage-100 text-sage-800 rounded-md font-medium text-sm">
          {time}
        </span>
      </div>
      <div className="flex-grow text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start mb-1">
          <div className="p-1 bg-sage-100 rounded-md text-sage-700 mr-2">
            {icon}
          </div>
          <h4 className="text-base sm:text-lg font-medium">{title}</h4>
        </div>
        <p className="text-sage-700 text-sm sm:text-base">{description}</p>
      </div>
    </AnimatedSection>
  );
};

const Programme: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      time: "13h30",
      title: "Accueil des invités à la Mairie",
      description: "Retrouvons-nous devant la Mairie de Miribel.",
      icon: <HeartHandshake className="h-4 w-4" />
    },
    {
      time: "14h00",
      title: "Cérémonie Civile",
      description: "Célébration de notre union civile à la Mairie de Miribel.",
      icon: <Sun className="h-4 w-4" />
    },
    {
      time: "14h45",
      title: "Départ pour le Domaine",
      description: "Direction le Domaine du Cuiset pour la suite des festivités.",
      icon: <Car className="h-4 w-4" />
    },
    {
      time: "16h00",
      title: "Cérémonie Laïque",
      description: "Célébration de notre union dans le cadre enchanteur du Domaine du Cuiset.",
      icon: <Sun className="h-4 w-4" />
    },
    {
      time: "17h00",
      title: "Photos de groupe",
      description: "Immortalisons ces moments de bonheur tous ensemble.",
      icon: <Camera className="h-4 w-4" />
    },
    {
      time: "18h00",
      title: "Vin d'honneur",
      description: "Cocktail et animations dans les jardins du domaine.",
      icon: <GlassWater className="h-4 w-4" />
    },
    {
      time: "21h00",
      title: "Dîner & Animations",
      description: "Un moment convivial et festif autour d'un repas raffiné.",
      icon: <Utensils className="h-4 w-4" />
    },
    {
      time: "00h00",
      title: "Soirée dansante",
      description: "Préparez vos chaussures les plus confortables... la piste ne fermera qu'au lever du jour !",
      icon: <Music className="h-4 w-4" />
    }
  ];

  return (
    <div className="section-container">
      <AnimatedSection>
        <h2 className="section-title">Programme</h2>
      </AnimatedSection>
      
      <div className="max-w-3xl mx-auto">
        <div className="relative sm:border-l-2 sm:border-sage-300 sm:pl-10 mx-auto text-center">
          {events.map((event, index) => (
            <div key={index} className="relative mb-6 sm:mb-10">
              <div className="hidden sm:block absolute -left-16 top-1 w-4 h-4 rounded-full bg-gold-500"></div>
              <ProgrammeEvent 
                {...event}
                delay={200 * (index + 1)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programme;