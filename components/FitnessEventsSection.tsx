import { Calendar, MapPin, Users, Trophy, Clock, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Page } from './Router';

interface FitnessEventsSectionProps {
  onNavigate?: (page: Page, data?: any) => void;
}

export function FitnessEventsSection({ onNavigate }: FitnessEventsSectionProps) {
  const fitnessEvents = [
    {
      id: 1,
      title: "Beach Yoga Sunrise",
      location: "Santa Monica Beach",
      date: "Tomorrow, 6:30 AM",
      participants: 28,
      difficulty: "Beginner",
      price: "Free",
      category: "Yoga",
      rating: 4.8,
      image: "🧘‍♀️",
      description: "Start your day with peaceful yoga as the sun rises over the Pacific Ocean"
    },
    {
      id: 2,
      title: "City Running Club",
      location: "Central Park",
      date: "Today, 7:00 PM",
      participants: 45,
      difficulty: "Intermediate",
      price: "$15",
      category: "Running",
      rating: 4.9,
      image: "🏃‍♂️",
      description: "Join local runners for a scenic 5K through the heart of the city"
    },
    {
      id: 3,
      title: "Outdoor Bootcamp",
      location: "Griffith Park",
      date: "Sat, 8:00 AM",
      participants: 22,
      difficulty: "Advanced",
      price: "$25",
      category: "HIIT",
      rating: 4.7,
      image: "💪",
      description: "High-intensity workout with stunning city views"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="px-6 mb-8" data-bravo="[container]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-1" data-bravo="[text]">
            Fitness Events
          </h2>
          <p className="text-sm text-slate-600" data-bravo="[text]">
            Join unique fitness challenges at your destination
          </p>
        </div>
        <Button 
          variant="ghost" 
          className="text-indigo-600 hover:bg-indigo-50 p-2 h-auto font-medium"
          onClick={() => onNavigate?.('FitnessEvents')}
          data-bravo="[button]"
        >
          See All
        </Button>
      </div>

      <div className="space-y-4">
        {fitnessEvents.slice(0, 2).map((event) => (
          <div 
            key={event.id} 
            className="group relative bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            onClick={() => onNavigate?.('EventDetail', event)}
            data-bravo="[container]"
          >
            {/* Header with price and rating */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{event.image}</div>
                <div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-600">{event.category}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <Badge 
                  variant="secondary" 
                  className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-0"
                >
                  {event.price}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-slate-600">{event.rating}</span>
                </div>
              </div>
            </div>

            {/* Event details */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-600">{event.participants} joined</span>
                  </div>
                  <Badge className={`text-xs px-2 py-1 ${getDifficultyColor(event.difficulty)}`}>
                    {event.difficulty}
                  </Badge>
                </div>
                
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate?.('Booking', { type: 'fitness-event', event });
                  }}
                >
                  <Trophy className="w-4 h-4 mr-1" />
                  Join
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick challenge banner */}
      <div className="mt-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">Weekend Challenge</span>
          </div>
          <h3 className="text-lg font-bold mb-2">5K Tourist Run</h3>
          <p className="text-sm text-white/90 mb-4">
            Explore the city's highlights while staying active
          </p>
          <Button 
            variant="secondary"
            size="sm"
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            onClick={() => onNavigate?.('FitnessEvents')}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}