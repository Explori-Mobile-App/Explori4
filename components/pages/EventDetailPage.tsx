import { ArrowLeft, Calendar, Users, MapPin, Clock, Heart, Share } from 'lucide-react';
import { Button } from '../ui/button';
import { Page } from '../Router';

interface EventDetailPageProps {
  onNavigate: (page: Page, data?: any) => void;
  event: any;
}

export default function EventDetailPage({ onNavigate, event }: EventDetailPageProps) {
  const defaultEvent = {
    title: "City Marathon 2025",
    subtitle: "🏃 Fitness Challenge",
    date: "March 15, 2025",
    time: "6:00 AM - 12:00 PM",
    attendees: 2500,
    price: "Free",
    location: "Central Park, Downtown",
    organizer: "City Sports Association",
    description: "Join thousands of runners in our annual city marathon! Whether you're a seasoned runner or just starting out, this event welcomes all fitness levels. Enjoy scenic routes through the city's most beautiful areas."
  };

  const currentEvent = event || defaultEvent;

  const handleJoin = () => {
    onNavigate('Booking', {
      type: 'event',
      item: currentEvent
    });
  };

  return (
    <div className="flex flex-col min-h-full bg-[#fdfcfb]" data-bravo="[container]">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-6 pt-16">
        <div className="absolute top-12 left-4">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/20 border-white/30 text-white hover:bg-white/30"
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
            className="bg-white/20 border-white/30 text-white hover:bg-white/30"
            data-bravo="[button]"
          >
            <Heart className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-white/20 border-white/30 text-white hover:bg-white/30"
            data-bravo="[button]"
          >
            <Share className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="text-center text-white mt-8">
          <div className="text-4xl mb-3">🏃</div>
          <h1 className="text-2xl font-medium mb-2" data-bravo="[text]">{currentEvent.title}</h1>
          <p className="text-white/90" data-bravo="[text]">{currentEvent.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Event Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-[#e5e7eb]">
            <Calendar className="w-5 h-5 text-[#ff6b35] mb-2" />
            <p className="text-sm text-[#64748b] mb-1" data-bravo="[text]">Date</p>
            <p className="font-medium text-[#1f2937]" data-bravo="[text]">{currentEvent.date}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-[#e5e7eb]">
            <Clock className="w-5 h-5 text-[#ff6b35] mb-2" />
            <p className="text-sm text-[#64748b] mb-1" data-bravo="[text]">Time</p>
            <p className="font-medium text-[#1f2937]" data-bravo="[text]">{currentEvent.time}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-[#e5e7eb]">
            <Users className="w-5 h-5 text-[#ff6b35] mb-2" />
            <p className="text-sm text-[#64748b] mb-1" data-bravo="[text]">Attendees</p>
            <p className="font-medium text-[#1f2937]" data-bravo="[text]">{currentEvent.attendees.toLocaleString()} joining</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-[#e5e7eb]">
            <MapPin className="w-5 h-5 text-[#ff6b35] mb-2" />
            <p className="text-sm text-[#64748b] mb-1" data-bravo="[text]">Location</p>
            <p className="font-medium text-[#1f2937]" data-bravo="[text]">{currentEvent.location}</p>
          </div>
        </div>

        {/* Price */}
        <div className="bg-white rounded-xl p-4 border border-[#e5e7eb]">
          <h3 className="font-medium text-[#1f2937] mb-2" data-bravo="[text]">Entry Fee</h3>
          <p className="text-2xl font-medium text-[#ff6b35]" data-bravo="[text]">{currentEvent.price}</p>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl p-4 border border-[#e5e7eb]">
          <h3 className="font-medium text-[#1f2937] mb-3" data-bravo="[text]">About This Event</h3>
          <p className="text-[#64748b] leading-relaxed" data-bravo="[text]">{currentEvent.description}</p>
        </div>

        {/* Organizer */}
        <div className="bg-white rounded-xl p-4 border border-[#e5e7eb]">
          <h3 className="font-medium text-[#1f2937] mb-2" data-bravo="[text]">Organizer</h3>
          <p className="text-[#64748b]" data-bravo="[text]">{currentEvent.organizer}</p>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-6 bg-white border-t border-[#e5e7eb]">
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1" data-bravo="[button]">
            🎯 Plan
          </Button>
          <Button 
            className="flex-1 bg-[#ff6b35] hover:bg-[#e55a2b]"
            onClick={handleJoin}
            data-bravo="[button]"
          >
            Join & Connect
          </Button>
        </div>
      </div>
    </div>
  );
}