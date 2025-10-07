import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Page } from './Router';

interface FeaturedPlacesSectionProps {
  onNavigate?: (page: Page, data?: any) => void;
}

export function FeaturedPlacesSection({ onNavigate }: FeaturedPlacesSectionProps) {
  const places = [
    {
      title: "Coastal Café",
      subtitle: "Restaurant • 4.8 ⭐",
      price: "$25-40",
      distance: "0.3 km",
      image: "https://images.unsplash.com/photo-1661082565547-91c046200cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwY2FmZSUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTcyMzA3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Mountain View Hotel",
      subtitle: "Hotel • 4.6 ⭐",
      price: "$150/night",
      distance: "0.8 km",
      image: "https://images.unsplash.com/photo-1743794260156-a9bc22c570f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZpZXclMjBob3RlbCUyMGx1eHVyeXxlbnwxfHx8fDE3NTcyMzA3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="px-6 mb-8" data-bravo="[container]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-1" data-bravo="[text]">Featured Places</h2>
          <p className="text-sm text-slate-600" data-bravo="[text]">Discover the best spots around you</p>
        </div>
        <Button variant="ghost" className="text-indigo-600 hover:bg-indigo-50 p-2 h-auto font-medium" data-bravo="[button]">
          View All
        </Button>
      </div>
      
      <div className="space-y-4">
        {places.map((place, index) => (
          <div key={index} className="group bg-white rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden transition-all duration-300" data-bravo="[container]">
            <div className="relative">
              <ImageWithFallback
                src={place.image}
                alt={place.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-xs font-medium text-slate-700">📍 {place.distance}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors" data-bravo="[bind:title]">{place.title}</h3>
                  <p className="text-sm text-slate-600 mb-2" data-bravo="[text]">{place.subtitle}</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-slate-900" data-bravo="[bind:price]">{place.price}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 rounded-xl border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all" 
                  onClick={() => onNavigate?.('PlaceDetail', place)}
                  data-bravo="[button]"
                >
                  View Details
                </Button>
                <Button 
                  className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => onNavigate?.('Booking', { type: 'place', item: place })}
                  data-bravo="[button]"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}