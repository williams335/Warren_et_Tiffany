import React, { useState } from 'react';
import { Music, Check, ExternalLink } from 'lucide-react';

const Playlist: React.FC = () => {
  const [songSuggestion, setSongSuggestion] = useState('');
  const [artistSuggestion, setArtistSuggestion] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ song: songSuggestion, artist: artistSuggestion });
    setSongSuggestion('');
    setArtistSuggestion('');
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  
  return (
    <div className="section-container fade-in">
      <h2 className="section-title">Playlist</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">La playlist collaborative</h3>
            <p className="mb-6 text-sage-700">
              Nous avons créé une playlist Spotify collaborative pour le jour J. N'hésitez pas à l'écouter, 
              et surtout à y ajouter vos morceaux préférés que vous aimeriez entendre pendant la soirée !
            </p>
            
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-lg mb-4 max-w-2xl mx-auto">
              <iframe 
                src="https://open.spotify.com/embed/playlist/5xu1EWPbvUHE7eldN6e2sO?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Playlist Spotify du mariage"
              ></iframe>
            </div>
            
            <div className="text-center">
              <a 
                href="https://open.spotify.com/playlist/5xu1EWPbvUHE7eldN6e2sO?si=_j5y3VfxSdGgZ7ZcD-SUyg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center"
              >
                <Music className="w-4 h-4 mr-2" />
                Ajouter vos morceaux sur Spotify
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;