import React from 'react';
import { Heart, Camera, Plane, Home, BellRing as Ring, Church } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const NotreHistoire: React.FC = () => {
  return (
    <div className="section-container">
      <AnimatedSection>
        <h2 className="section-title">Notre Histoire</h2>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <AnimatedSection delay={200}>
          <div className="card p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-sage-100 rounded-md text-sage-700 mr-3">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium text-sage-800">Tiffany</h3>
            </div>
            <p className="mb-3">
              Tiffany, parisienne de 29 ans, est une passionnée de photographie et de voyages. 
              Avec son sourire contagieux et son énergie débordante, elle illumine chaque pièce où elle entre.
            </p>
            <p>
              Professionnellement, elle est architecte d'intérieur et transforme les espaces avec une 
              créativité remarquable et un œil pour les détails.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <div className="card p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-sage-100 rounded-md text-sage-700 mr-3">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium text-sage-800">Warren</h3>
            </div>
            <p className="mb-3">
              Warren, bordelais de 31 ans, est un amoureux de la nature et des sports d'extérieur. 
              Calme et réfléchi, il apporte l'équilibre parfait à leur relation.
            </p>
            <p>
              Dans sa vie professionnelle, il est ingénieur informatique, combinant logique et créativité 
              pour résoudre des problèmes complexes.
            </p>
          </div>
        </AnimatedSection>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <AnimatedSection delay={600}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-sage-100 rounded-md text-sage-700 mr-3">
                  <Camera className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium">Notre Rencontre</h3>
              </div>
              <p className="text-sage-700">
                Nous nous sommes rencontrés lors d'un workshop de photographie à Lyon. Warren était là pour la technique, 
                Tiffany pour l'esthétique - nos mondes se sont percutés et ne se sont plus quittés.
              </p>
              <img 
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Notre rencontre"
                className="mt-4 rounded-lg"
              />
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-sage-100 rounded-md text-sage-700 mr-3">
                  <Ring className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium">La Demande</h3>
              </div>
              <p className="text-sage-700">
                Lors d'une randonnée au coucher du soleil dans les Pyrénées, Warren a demandé Tiffany en mariage 
                au sommet d'une montagne. Elle a dit oui sans hésiter!
              </p>
              <img 
                src="https://images.pexels.com/photos/1459113/pexels-photo-1459113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="La demande"
                className="mt-4 rounded-lg"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={800}>
          <div className="mt-8 card p-6 text-center">
            <div className="inline-block p-2 bg-sage-100 rounded-md text-sage-700 mb-4">
              <div className="relative h-6 w-6">
                <Ring className="h-4 w-4 absolute top-0 left-0" />
                <Ring className="h-4 w-4 absolute top-1 left-1" />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-4">Et maintenant...</h3>
            <p className="text-sage-700">
              Nous sommes heureux de célébrer notre amour avec vous, nos proches, 
              dans une journée qui promet d'être inoubliable.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default NotreHistoire;