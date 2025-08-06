import React from 'react';
import { Star, MapPin, Phone, Car } from 'lucide-react';

interface Hotel {
  name: string;
  description: string;
  address: string;
  phone: string;
  stars: number;
  price: string;
  distance: string;
  website: string;
  image: string;
}

const HotelCard: React.FC<{ hotel: Hotel }> = ({ hotel }) => {
  return (
    <div className="card overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={hotel.image} 
          alt={hotel.name} 
          className="w-full h-56 object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium">{hotel.name}</h3>
          <div className="flex">
            {[...Array(hotel.stars)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
            ))}
          </div>
        </div>
        
        <p className="text-sm text-sage-700 mb-3">{hotel.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-start">
            <MapPin className="w-4 h-4 text-sage-600 mt-1 mr-2 flex-shrink-0" />
            <span className="text-sm">{hotel.address}</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 text-sage-600 mr-2 flex-shrink-0" />
            <span className="text-sm">{hotel.phone}</span>
          </div>
          <div className="flex items-center">
            <Car className="w-4 h-4 text-sage-600 mr-2 flex-shrink-0" />
            <span className="text-sm">{hotel.distance} du lieu de réception</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="font-medium text-gold-600">{hotel.price}</span>
          <a 
            href={hotel.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline py-1 px-3 text-sm"
          >
            Réserver
          </a>
        </div>
      </div>
    </div>
  );
};

const Hebergements: React.FC = () => {
  const hotels: Hotel[] = [
    {
      name: "Château Pape Clément",
      description: "Séjournez directement sur le lieu de notre réception dans ce Château historique, classé 5 étoiles.",
      address: "216 Av. Dr Nancel Penard, 33600 Pessac",
      phone: "05 57 26 38 38",
      stars: 5,
      price: "À partir de 250€/nuit",
      distance: "Sur place",
      website: "https://chateau-pape-clement.fr/",
      image: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      name: "Hôtel Burdigala",
      description: "Hôtel 4 étoiles alliant luxe et confort avec un service impeccable.",
      address: "115 Rue Georges Bonnac, 33000 Bordeaux",
      phone: "05 56 90 16 16",
      stars: 4,
      price: "À partir de 150€/nuit",
      distance: "15 min",
      website: "https://www.hotelburdigala.com/",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      name: "Mercure Bordeaux Centre",
      description: "Hôtel moderne et confortable en plein cœur de Bordeaux.",
      address: "5 Rue Robert Lateulade, 33000 Bordeaux",
      phone: "05 56 56 43 43",
      stars: 4,
      price: "À partir de 120€/nuit",
      distance: "20 min",
      website: "https://all.accor.com/hotel/1281/index.fr.shtml",
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      name: "Ibis Bordeaux Centre Mériadeck",
      description: "Option économique mais confortable, idéale pour un court séjour.",
      address: "35 Cours du Maréchal Juin, 33000 Bordeaux",
      phone: "05 56 90 74 00",
      stars: 3,
      price: "À partir de 85€/nuit",
      distance: "25 min",
      website: "https://all.accor.com/hotel/0950/index.fr.shtml",
      image: "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ];
  
  const airbnbs = [
    {
      title: "Appartement Vue sur la Garonne",
      description: "Magnifique appartement avec vue sur la Garonne, à 15 minutes du lieu de réception.",
      link: "https://www.airbnb.fr/"
    },
    {
      title: "Maison de Charme Bordeaux Centre",
      description: "Maison typique bordelaise en pierre, idéale pour les familles.",
      link: "https://www.airbnb.fr/"
    },
    {
      title: "Studio Cosy Quartier Saint Pierre",
      description: "Studio rénové au cœur du quartier historique de Bordeaux.",
      link: "https://www.airbnb.fr/"
    }
  ];

  return (
    <div className="section-container fade-in">
      <h2 className="section-title">Hébergements</h2>
      
      <div className="mb-12">
        <h3 className="text-2xl font-medium mb-6 text-center">Hôtels recommandés</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </div>
      </div>
      
      <div className="card-static p-6 max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-medium mb-4">Airbnbs recommandés</h3>
        <ul className="space-y-4">
          {airbnbs.map((airbnb, index) => (
            <li key={index} className="border-b border-sage-100 pb-3 last:border-b-0 last:pb-0">
              <h4 className="font-medium">{airbnb.title}</h4>
              <p className="text-sm text-sage-700 mb-2">{airbnb.description}</p>
              <a 
                href={airbnb.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-sage-600 hover:text-sage-800 underline"
              >
                Voir sur Airbnb
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-sage-50 p-6 rounded-lg border border-sage-100 max-w-2xl mx-auto">
        <h3 className="text-xl font-medium mb-4 text-center">Informations importantes</h3>
        <div className="space-y-4 text-sage-800">
          <p>
            <strong>Navette :</strong> Une navette sera disponible à la fin de la soirée pour raccompagner
            les invités vers les hôtels du centre-ville de Bordeaux.
          </p>
          <p>
            <strong>Réservation :</strong> Nous vous conseillons de réserver votre hébergement dès que possible
            car Bordeaux est une destination touristique prisée en juin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hebergements;