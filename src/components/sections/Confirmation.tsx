import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Download } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  civilCeremony: boolean;
  laiqueCeremony: boolean;
  dinner: boolean;
  drinks: string[];
  dietaryRestrictions: string[];
  allergies: string;
  musicRequest: string;
  comments: string;
}

const Confirmation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    civilCeremony: false,
    laiqueCeremony: false,
    dinner: false,
    drinks: [],
    dietaryRestrictions: [],
    allergies: '',
    musicRequest: '',
    comments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (submitSuccess) {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const colors = ['#83ba8c', '#D4AF37', '#e0efe2'];

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < animationEnd) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    }
  }, [submitSuccess]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (name === 'drinks' || name === 'dietaryRestrictions') {
      setFormData(prev => ({
        ...prev,
        [name]: checked 
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://hook.eu2.make.com/nmx53rouxzppd7fxxea23nzcku7uhpen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        civilCeremony: false,
        laiqueCeremony: false,
        dinner: false,
        drinks: [],
        dietaryRestrictions: [],
        allergies: '',
        musicRequest: '',
        comments: ''
      });
    } catch (error) {
      setSubmitError('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateCalendarEvent = () => {
    const startDate = new Date(2026, 5, 6, 14, 0); // 6 juin 2026, 14h00
    const endDate = new Date(2026, 5, 7, 2, 0); // 7 juin 2026, 02h00
    
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const eventDetails = {
      title: 'Mariage Tiffany & Warren',
      start: formatDate(startDate),
      end: formatDate(endDate),
      description: 'Célébration du mariage de Tiffany et Warren\\n\\nProgramme:\\n- 14h00: Cérémonie civile (Mairie de Miribel)\\n- 16h00: Cérémonie laïque (Domaine du Cuiset)\\n- 18h00: Vin d\'honneur\\n- 21h00: Dîner\\n- 00h00: Soirée dansante',
      location: 'Mairie de Miribel puis Domaine du Cuiset, 763 route de Condeissiat, 01960 Saint-André-sur-Vieux-Jonc'
    };

    return eventDetails;
  };

  const downloadICSFile = () => {
    const event = generateCalendarEvent();
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Tiffany & Warren//Mariage//FR
BEGIN:VEVENT
UID:${Date.now()}@tiffanyetwarren.com
DTSTAMP:${event.start}
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'mariage-tiffany-warren.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const addToGoogleCalendar = () => {
    const event = generateCalendarEvent();
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalendarUrl, '_blank');
  };

  const addToOutlookCalendar = () => {
    const event = generateCalendarEvent();
    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(event.title)}&startdt=${event.start}&enddt=${event.end}&body=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    window.open(outlookUrl, '_blank');
  };

  if (submitSuccess) {
    return (
      <div className="section-container fade-in">
        <h2 className="section-title">Confirmation de présence</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="card-static p-8 text-center">
            <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 text-sage-600">✓</div>
            </div>
            <h3 className="text-2xl font-medium mb-4 text-sage-800">Merci pour votre réponse!</h3>
            <p className="mb-6">
              Nous avons bien reçu votre confirmation de présence.
            </p>
            
            {/* Section pour ajouter au calendrier */}
            <div className="bg-sage-50 p-6 rounded-lg mb-6">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-sage-600 mr-2" />
                <h4 className="text-lg font-medium text-sage-800">Ajoutez l'événement à votre calendrier</h4>
              </div>
              <p className="text-sm text-sage-600 mb-4">
                N'oubliez pas notre grand jour ! Ajoutez l'événement à votre calendrier préféré.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  onClick={addToGoogleCalendar}
                  className="btn btn-outline text-sm py-2 px-4"
                >
                  Google Calendar
                </button>
                <button 
                  onClick={addToOutlookCalendar}
                  className="btn btn-outline text-sm py-2 px-4"
                >
                  Outlook
                </button>
                <button 
                  onClick={downloadICSFile}
                  className="btn btn-outline text-sm py-2 px-4 flex items-center justify-center"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Télécharger .ics
                </button>
              </div>
            </div>
            
            <button 
              onClick={() => setSubmitSuccess(false)}
              className="btn btn-outline"
            >
              Modifier ma réponse
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-container fade-in">
      <h2 className="section-title">Confirmation de présence</h2>
      
      <div className="max-w-2xl mx-auto">
        <div className="card-static p-6">
          <p className="text-center mb-8">
            Merci de nous confirmer votre présence avant le <strong>15 mars 2026</strong>.
          </p>
          
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
              {submitError}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="form-label">
                Nom et prénom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="phone" className="form-label">
                N° de téléphone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <div className="space-y-4">
              <div>
                <label className="form-label">
                  Serez-vous présent(e) à la cérémonie civile ? (Mairie de Miribel) <span className="text-red-500">*</span>
                </label>
                <div className="mt-2 space-y-2">
                  <label className="inline-flex items-center mr-6">
                    <input
                      type="radio"
                      name="civilCeremony"
                      value="true"
                      checked={formData.civilCeremony}
                      onChange={() => setFormData(prev => ({ ...prev, civilCeremony: true }))}
                      className="form-radio"
                    />
                    <span className="ml-2">Oui, je serai présent(e)</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="civilCeremony"
                      value="false"
                      checked={!formData.civilCeremony}
                      onChange={() => setFormData(prev => ({ ...prev, civilCeremony: false }))}
                      className="form-radio"
                    />
                    <span className="ml-2">Non, je ne pourrai pas venir</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="form-label">
                  Serez-vous présent(e) à la cérémonie laïque suivie du vin d'honneur ? (Domaine du Cuiset) <span className="text-red-500">*</span>
                </label>
                <div className="mt-2 space-y-2">
                  <label className="inline-flex items-center mr-6">
                    <input
                      type="radio"
                      name="laiqueCeremony"
                      value="true"
                      checked={formData.laiqueCeremony}
                      onChange={() => setFormData(prev => ({ ...prev, laiqueCeremony: true }))}
                      className="form-radio"
                    />
                    <span className="ml-2">Oui, je serai présent(e)</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="laiqueCeremony"
                      value="false"
                      checked={!formData.laiqueCeremony}
                      onChange={() => setFormData(prev => ({ ...prev, laiqueCeremony: false }))}
                      className="form-radio"
                    />
                    <span className="ml-2">Non, je ne pourrai pas venir</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="form-label">
                  Serez-vous présent(e) au dîner et à la soirée ? (Domaine du Cuiset) <span className="text-red-500">*</span>
                </label>
                <div className="mt-2 space-y-2">
                  <label className="inline-flex items-center mr-6">
                    <input
                      type="radio"
                      name="dinner"
                      value="true"
                      checked={formData.dinner}
                      onChange={() => setFormData(prev => ({ ...prev, dinner: true }))}
                      className="form-radio"
                    />
                    <span className="ml-2">Oui, je serai présent(e)</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="dinner"
                      value="false"
                      checked={!formData.dinner}
                      onChange={() => setFormData(prev => ({ ...prev, dinner: false }))}
                      className="form-radio"
                    />
                    <span className="ml-2">Non, je ne pourrai pas venir</span>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="form-label">
                Que préférez-vous boire ? <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Vin blanc', 'Vin Rouge', 'Champagne', 'Clairette de Die', 'Bière', 'Sans alcool'].map((drink) => (
                  <label key={drink} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="drinks"
                      value={drink}
                      checked={formData.drinks.includes(drink)}
                      onChange={handleCheckboxChange}
                      className="form-checkbox h-4 w-4 text-sage-600"
                    />
                    <span className="ml-2">{drink}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="form-label">Avez-vous un régime alimentaire particulier ?</label>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Végétarien', 'Sans viande', 'Sans poisson', 'Sans fruits de mer / crustacés'].map((diet) => (
                  <label key={diet} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="dietaryRestrictions"
                      value={diet}
                      checked={formData.dietaryRestrictions.includes(diet)}
                      onChange={handleCheckboxChange}
                      className="form-checkbox h-4 w-4 text-sage-600"
                    />
                    <span className="ml-2">{diet}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="allergies" className="form-label">Avez-vous des allergies ? (Précisez)</label>
              <input
                type="text"
                id="allergies"
                name="allergies"
                value={formData.allergies}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Si oui, précisez ici"
              />
            </div>

            <div>
              <label htmlFor="musicRequest" className="form-label">
                Il y a-t-il une musique que vous souhaitez écouter pendant la soirée ?
              </label>
              <input
                type="text"
                id="musicRequest"
                name="musicRequest"
                value={formData.musicRequest}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Titre et artiste"
              />
            </div>

            <div>
              <label htmlFor="comments" className="form-label">Commentaire libre/suggestion:</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows={4}
                className="form-input"
                placeholder="Partagez vos commentaires ou suggestions..."
              />
            </div>

            <div className="text-center pt-4">
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></span>
                    Envoi en cours...
                  </span>
                ) : (
                  'Confirmer ma présence'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;