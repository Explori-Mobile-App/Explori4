import { Heart, MapPin, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { BottomNavigation } from '../BottomNavigation';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Page } from '../Router';

interface SavedPageProps {
  onNavigate: (page: Page, data?: any) => void;
}

export default function SavedPage({ onNavigate }: SavedPageProps) {
  const savedItems = [
    {
      type: 'place',
      title: "Coastal Café",
      subtitle: "Restaurant • 4.8 ⭐",
      price: "$25-40",
      distance: "0.3 km",
      image: "https://images.unsplash.com/photo-1661082565547-91c046200cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwY2FmZSUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTcyMzA3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      type: 'event',
      title: "Spring Food Festival",
      subtitle: "🍴 Culinary Experience",
      date: "April 8–10",
      price: "$25 entry",
      attendees: "1,200 joining"
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#fdfcfb]" data-bravo="[container]">
      {/* Header */}
      <div className="bg-white border-b border-[#e5e7eb] p-4 pt-12">
        <h1 className="text-xl font-medium text-[#1f2937]" data-bravo="[text]">Saved</h1>
        <p className="text-sm text-[#64748b] mt-1" data-bravo="[text]">Your favorite places and events</p>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        {savedItems.length > 0 ? (
          <div className="space-y-4">
            {savedItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-[#e5e7eb] overflow-hidden" data-bravo="[container]">
                {item.type === 'place' && item.image && (
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                )}
                
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-medium text-[#1f2937] mb-1" data-bravo="[text]">{item.title}</h3>
                      <p className="text-sm text-[#64748b] mb-2" data-bravo="[text]">{item.subtitle}</p>
                      
                      {item.type === 'place' ? (
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-[#1f2937]" data-bravo="[text]">{item.price}</span>
                          <span className="text-sm text-[#64748b]" data-bravo="[text]">📍 {item.distance}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-sm text-[#64748b]" data-bravo="[text]">📅 {item.date}</span>
                          <span className="text-sm text-[#64748b]" data-bravo="[text]">👥 {item.attendees}</span>
                        </div>
                      )}
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600" data-bravo="[button]">
                      <Heart className="w-4 h-4 fill-current" />
                    </Button>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" data-bravo="[button]">
                      View Details
                    </Button>
                    <Button className="flex-1 bg-[#ff6b35] hover:bg-[#e55a2b]" data-bravo="[button]">
                      {item.type === 'place' ? 'Book Now' : 'Join Event'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-6xl mb-4">💾</div>
            <h3 className="font-medium text-[#1f2937] mb-2" data-bravo="[text]">No saved items</h3>
            <p className="text-[#64748b] mb-6" data-bravo="[text]">Save places and events you love to find them easily later</p>
            <Button 
              className="bg-[#ff6b35] hover:bg-[#e55a2b]"
              onClick={() => onNavigate('Home')}
              data-bravo="[button]"
            >
              Explore Places & Events
            </Button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation currentPage="Saved" onNavigate={onNavigate} />
    </div>
  );
}