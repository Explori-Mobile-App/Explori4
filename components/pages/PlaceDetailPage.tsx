import { ArrowLeft, Star, MapPin, Clock, Phone, Globe, Heart, Share } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Page } from '../Router';

interface PlaceDetailPageProps {
  onNavigate: (page: Page, data?: any) => void;
  place: any;
}

export default function PlaceDetailPage({ onNavigate, place }: PlaceDetailPageProps) {
  const defaultPlace = {
    title: "Coastal Café",
    subtitle: "Restaurant • 4.8 ⭐",
    price: "$25-40",
    distance: "0.3 km",
    image: "https://images.unsplash.com/photo-1661082565547-91c046200cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwY2FmZSUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTcyMzA3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 234,
    address: "123 Ocean Drive, Coastal City",
    phone: "+1 (555) 123-4567",
    website: "coastalcafe.com",
    hours: "8:00 AM - 10:00 PM",
    description: "A charming seaside café offering fresh seafood, artisanal coffee, and breathtaking ocean views. Perfect for breakfast, lunch, or a romantic dinner."
  };

  const currentPlace = place || defaultPlace;

  const handleBooking = () => {
    onNavigate('Booking', {
      type: 'place',
      item: currentPlace
    });
  };

  return (
    <div className="flex flex-col min-h-full bg-[#fdfcfb]" data-bravo="[container]">
      {/* Header */}
      <div className="relative">
        <ImageWithFallback
          src={currentPlace.image}
          alt={currentPlace.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-12 left-4">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/90 backdrop-blur-sm"
            onClick={() => onNavigate('Home')}
            data-bravo="[button]"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute top-12 right-4 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/90 backdrop-blur-sm"
            data-bravo="[button]"
          >
            <Heart className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-white/90 backdrop-blur-sm"
            data-bravo="[button]"
          >
            <Share className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Title & Rating */}
        <div>
          <h1 className="text-2xl font-medium text-[#1f2937] mb-2" data-bravo="[text]">{currentPlace.title}</h1>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-[#1f2937]" data-bravo="[text]">{currentPlace.rating}</span>
              <span className="text-[#64748b]" data-bravo="[text]">({currentPlace.reviews} reviews)</span>
            </div>
          </div>
          <p className="text-[#64748b]" data-bravo="[text]">{currentPlace.price} • {currentPlace.distance}</p>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-medium text-[#1f2937] mb-2" data-bravo="[text]">About</h3>
          <p className="text-[#64748b] leading-relaxed" data-bravo="[text]">{currentPlace.description}</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="font-medium text-[#1f2937]" data-bravo="[text]">Contact & Hours</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#64748b]" />
              <span className="text-[#64748b]" data-bravo="[text]">{currentPlace.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#64748b]" />
              <span className="text-[#64748b]" data-bravo="[text]">{currentPlace.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#64748b]" />
              <span className="text-[#64748b]" data-bravo="[text]">{currentPlace.website}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#64748b]" />
              <span className="text-[#64748b]" data-bravo="[text]">{currentPlace.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-6 bg-white border-t border-[#e5e7eb]">
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1" data-bravo="[button]">
            <MapPin className="w-4 h-4 mr-2" />
            Directions
          </Button>
          <Button 
            className="flex-1 bg-[#ff6b35] hover:bg-[#e55a2b]"
            onClick={handleBooking}
            data-bravo="[button]"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}