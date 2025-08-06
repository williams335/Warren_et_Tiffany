import React from 'react';
import { Clock, MapPin, Car, Shirt, CalendarCheck, Gift, Music, Camera } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const InfoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay?: number;
}> = ({ icon, title, children, delay = 0 }) => {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <div className="card p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-sage-100 rounded-md text-sage-700 mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        <div>{children}</div>
      </div>
    </AnimatedSection>
  );
};

const InfosPratiques: React.FC = () => {
  return (
    <div className="section-container">
      <AnimatedSection>
        <h2 className="section-title">Infos Pratiques</h2>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <InfoCard 
          icon={<Clock className="h-5 w-5" />} 
          title="Date & Horaires"
          delay={200}
        >
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-gold-600">Cérémonie Civile</h4>
              <p className="text-sage-700">6 Juin 2026 à 14h00</p>
              <p className="text-sm">Mairie de Miribel</p>
              <p className="text-sm">Rue de l'Hôtel de ville, 01700 Miribel</p>
              <a 
                href="https://maps.google.com/?q=Mairie+de+Miribel+Rue+de+l'Hôtel+de+ville+01700+Miribel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-sage-600 hover:text-sage-800 underline mt-1 inline-block"
              >
                <MapPin className="h-4 w-4 inline mr-1" />
                Voir sur Google Maps
              </a>
            </div>
            
            <div>
              <h4 className="font-medium text-gold-600">Cérémonie Laïque & Réception</h4>
              <p className="text-sage-700">6 Juin 2026 à 16h00</p>
              <p className="text-sm">Le Domaine du Cuiset</p>
              <p className="text-sm">763 route de Condeissiat</p>
              <p className="text-sm">01960 Saint-André-sur-Vieux-Jonc</p>
              <a 
                href="https://maps.google.com/?q=Le+domaine+du+cuiset+763+route+de+condeissiat+01960+Saint-André-sur-Vieux-Jonc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-sage-600 hover:text-sage-800 underline mt-1 inline-block"
              >
                <MapPin className="h-4 w-4 inline mr-1" />
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </InfoCard>
        
        <InfoCard 
          icon={<Car className="h-5 w-5" />} 
          title="Transport & Parking"
          delay={400}
        >
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-gold-600">Parking</h4>
              <p className="text-sm">
                Des places de stationnement gratuites sont disponibles sur les deux lieux.
              </p>
            </div>
          </div>
        </InfoCard>
        
        <InfoCard 
          icon={<Shirt className="h-5 w-5" />} 
          title="Dress Code"
          delay={600}
        >
          <div>
            <p className="mb-4 text-lg font-medium text-sage-800">
              Venez beaux, venez chics, pas de couleurs imposées... mais laissez le blanc aux stars du jour ! 👰🤵🏾‍♂
            </p>
            
            <p className="text-sm text-sage-700">
              Les tenues formelles sont recommandées. 
              Messieurs, une veste sera appréciée.
              Mesdames, attention aux talons hauts pour la partie extérieure (pelouse).
            </p>
          </div>
        </InfoCard>

        <InfoCard 
          icon={<Gift className="h-5 w-5" />} 
          title="Cadeaux"
          delay={800}
        >
          <div className="space-y-3">
            <p className="text-sm text-sage-700">
              Votre présence est notre plus beau cadeau ! Si vous souhaitez néanmoins nous gâter, une urne sera à votre disposition pour participer à notre voyage de noces au Japon.
            </p>
          </div>
        </InfoCard>
      </div>
      
      <AnimatedSection delay={1000}>
        <div className="mt-10">
          <h3 className="text-xl font-medium mb-4 text-center">Plan des lieux</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.9046115562824!2d4.9619444!3d45.8275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sMairie%20de%20Miribel!5e0!3m2!1sfr!2sfr!4v1619788888888!5m2!1sfr!2sfr"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mairie de Miribel"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.9046115562824!2d4.9619444!3d45.8275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sLe%20Domaine%20du%20Cuiset!5e0!3m2!1sfr!2sfr!4v1619788888888!5m2!1sfr!2sfr"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Le Domaine du Cuiset"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default InfosPratiques;