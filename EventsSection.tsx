import { Button } from './ui/button';
import { Page } from './Router';

interface EventsSectionProps {
  onNavigate?: (page: Page, data?: any) => void;
}

export function EventsSection({ onNavigate }: EventsSectionProps) {
  const events = [
    {
      title: "Sunset Beach Volleyball",
      subtitle: "🏐 Fitness & Fun",
      date: "📅 Tonight, 6 PM",
      attendees: "👥 16 joining",
      price: "Free"
    },
    {
      title: "Spring Food Festival",
      subtitle: "🍴 Culinary Experience",
      date: "📅 April 8–10",
      attendees: "👥 1,200 joining",
      price: "$25 entry"
    }
  ];

  return (
    <div className="px-6 mb-8" data-bravo="[container]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-1" data-bravo="[text]">Upcoming Events</h2>
          <p className="text-sm text-slate-600" data-bravo="[text]">Join local adventures and meet people</p>
        </div>
        <Button variant="ghost" className="text-indigo-600 hover:bg-indigo-50 p-2 h-auto font-medium" data-bravo="[button]">
          See All
        </Button>
      </div>
      
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="group relative bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-all duration-300" data-bravo="[container]">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-3 py-1">
              <span className="text-xs font-semibold text-indigo-700" data-bravo="[bind:price]">{event.price}</span>
            </div>
            
            <div className="pr-16">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors" data-bravo="[bind:title]">{event.title}</h3>
              <p className="text-slate-600 mb-3" data-bravo="[text]">{event.subtitle}</p>
              
              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-sm text-slate-600" data-bravo="[text]">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-slate-600" data-bravo="[text]">{event.attendees}</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => onNavigate?.('EventDetail', event)}
                  data-bravo="[button]"
                >
                  Join Event
                </Button>
                <Button 
                  variant="outline" 
                  className="rounded-xl border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
                  onClick={() => onNavigate?.('Planner')}
                  data-bravo="[button]"
                >
                  <span className="text-lg mr-1">🎯</span>
                  Plan
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}