import React from 'react';
import { Heart } from 'lucide-react';

const Remerciements: React.FC = () => {
  return (
    <div className="section-container fade-in">
      <h2 className="section-title">Remerciements</h2>
      
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-block p-3 bg-sage-100 rounded-full mb-6">
          <Heart className="h-10 w-10 text-gold-500 fill-gold-500" />
        </div>
        
        <h3 className="text-2xl font-medium mb-4">Un grand merci</h3>
        <p className="text-lg mb-8">
          Cette journée spéciale ne serait pas possible sans le soutien et l'aide de nombreuses personnes chères à nos cœurs.
          Nous tenons à exprimer notre sincère gratitude à tous ceux qui contribuent à rendre notre mariage inoubliable.
        </p>
      </div>
      
      <div className="card p-6 max-w-2xl mx-auto text-center">
        <h3 className="text-xl font-medium mb-4">Message spécial à nos invités</h3>
        <p className="mb-6">
          Et bien sûr, nous voulons vous remercier, chers invités, d'avoir accepté de partager ce jour si important avec nous.
          Votre présence est le plus beau des cadeaux et nous sommes impatients de créer ensemble des souvenirs qui dureront toute une vie.
        </p>
        <p className="text-lg font-medium text-sage-800">
          Avec tout notre amour,<br />
          Tiffany & Warren
        </p>
      </div>
    </div>
  );
};

export default Remerciements;