import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  relation: string;
  description: string;
  image: string;
}

const PersonCard: React.FC<{ person: TeamMember }> = ({ person }) => {
  return (
    <div className="card overflow-hidden h-full transition-all duration-300 hover:shadow-lg group">
      <div className="aspect-w-1 aspect-h-1 overflow-hidden">
        <img 
          src={person.image} 
          alt={person.name} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-xl font-medium mb-1">{person.name}</h3>
        <div className="mb-3 flex flex-col">
          <span className="text-gold-600 font-medium">{person.role}</span>
          <span className="text-sm text-sage-600">{person.relation}</span>
        </div>
        <p className="text-sm text-sage-700">{person.description}</p>
      </div>
    </div>
  );
};

const Casting: React.FC = () => {
  const teamBride: TeamMember[] = [
    {
      name: "Claire Dubois",
      role: "Témoin",
      relation: "Meilleure amie depuis l'université",
      description: "Toujours présente dans les moments importants de la vie de Tiffany, Claire est une amie fidèle dont l'énergie contagieuse illumine chaque pièce où elle entre.",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      name: "Sophie Martin",
      role: "Demoiselle d'honneur",
      relation: "Cousine de Tiffany",
      description: "Sophie et Tiffany ont grandi ensemble, partageant d'innombrables souvenirs d'enfance. Sa créativité a été précieuse dans l'organisation de ce mariage.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      name: "Emma Lefebvre",
      role: "Demoiselle d'honneur",
      relation: "Amie d'enfance",
      description: "Amie de Tiffany depuis l'école primaire, Emma a toujours été là pour partager les rires et essuyer les larmes. Son sens de l'humour est légendaire.",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ];
  
  const teamGroom: TeamMember[] = [
    {
      name: "Thomas Moreau",
      role: "Témoin",
      relation: "Ami d'enfance",
      description: "Thomas et Warren sont inséparables depuis la maternelle. Complice de toutes les aventures, c'est naturellement qu'il sera le témoin de cette nouvelle étape.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      name: "Julien Petit",
      role: "Garçon d'honneur",
      relation: "Frère de Warren",
      description: "Frère aîné et protecteur, Julien a toujours veillé sur Warren. Son organisation et son pragmatisme ont été d'une aide précieuse pour préparer ce grand jour.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      name: "Antoine Durand",
      role: "Garçon d'honneur",
      relation: "Ami de Warren depuis l'université",
      description: "Antoine et Warren se sont rencontrés sur les bancs de l'école d'ingénieurs. Passionnés d'informatique, ils ont fondé leur première startup ensemble.",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ];

  return (
    <div className="section-container fade-in">
      <h2 className="section-title">Le Casting de l'événement</h2>
      
      <div className="mb-16">
        <h3 className="text-2xl font-medium mb-8 text-center">L'équipe de Tiffany</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamBride.map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
      </div>
      
      <div className="mb-16">
        <h3 className="text-2xl font-medium mb-8 text-center">L'équipe de Warren</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamGroom.map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
      </div>
      
      <div className="card p-6 max-w-3xl mx-auto">
        <h3 className="text-xl font-medium mb-4 text-center">Anecdotes sur les témoins</h3>
        <div className="space-y-4">
          <div className="p-4 bg-sage-50 rounded-lg">
            <h4 className="font-medium mb-2">Le pari perdu de Thomas</h4>
            <p className="text-sm text-sage-700">
              Thomas avait parié que Warren ne trouverait jamais le courage de demander Tiffany en mariage avant leurs 30 ans. 
              Il a perdu ce pari et devra donc faire son discours de témoin... en chantant !
            </p>
          </div>
          
          <div className="p-4 bg-sage-50 rounded-lg">
            <h4 className="font-medium mb-2">Claire, l'entremetteuse</h4>
            <p className="text-sm text-sage-700">
              Si Tiffany et Warren sont ensemble aujourd'hui, c'est grâce à Claire qui a organisé 
              "par hasard" leur rencontre lors de ce fameux workshop de photographie à Lyon.
            </p>
          </div>
          
          <div className="p-4 bg-sage-50 rounded-lg">
            <h4 className="font-medium mb-2">Le voyage mémorable</h4>
            <p className="text-sm text-sage-700">
              La première fois que les témoins ont rencontré le partenaire de leur ami(e), c'était lors d'un weekend
              improbable où ils se sont tous retrouvés bloqués dans un chalet à la montagne à cause d'une tempête de neige.
              Une amitié solide est née de cette expérience !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casting;