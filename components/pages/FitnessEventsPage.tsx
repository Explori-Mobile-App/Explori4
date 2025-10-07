import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Star, Filter, Search, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Page } from '../Router';
import { useCapacitor } from '../../hooks/useCapacitor';

interface FitnessEventsPageProps {
  onNavigate: (page: Page, data?: any) => void;
}

interface FitnessEvent {
  id: string;
  title: string;
  type: 'running' | 'yoga' | 'cycling' | 'fitness' | 'wellness';
  date: string;
  time: string;
  location: string;
  organizer: string;
  attendees: number;
  maxAttendees: number;
  price: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  description: string;
  image: string;
  isPopular?: boolean;
  isBooked?: boolean;
}

export default function FitnessEventsPage({ onNavigate }: FitnessEventsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedDate, setSelectedDate] = useState('all');
  const { triggerHaptic } = useCapacitor();

  const events: FitnessEvent[] = [
    {
      id: '1',
      title: 'Central Park Morning Run',
      type: 'running',
      date: 'Today',
      time: '7:00 AM',
      location: 'Central Park, NYC',
      organizer: 'NYC Running Club',
      attendees: 24,
      maxAttendees: 30,
      price: 0,
      difficulty: 'Intermediate',
      rating: 4.8,
      description: 'Join us for a refreshing morning run through Central Park',
      image: 'https://images.unsplash.com/photo-1753800487227-ea7582de9a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHJ1bm5pbmclMjBjaXR5JTIwcGFya3xlbnwxfHx8fDE3NTc2NTYxODV8MA&ixlib=rb-4.1.0&q=80&w=400',
      isPopular: true,
      isBooked: true
    },
    {
      id: '2',
      title: 'Sunrise Yoga in Bryant Park',
      type: 'yoga',
      date: 'Tomorrow',
      time: '6:30 AM',
      location: 'Bryant Park, NYC',
      organizer: 'Urban Zen Studio',
      attendees: 18,
      maxAttendees: 25,
      price: 25,
      difficulty: 'Beginner',
      rating: 4.9,
      description: 'Start your day with peaceful yoga as the city awakens',
      image: 'https://images.unsplash.com/photo-1660057819415-bcccd06d9ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIweW9nYSUyMHN1bnJpc2UlMjBwYXJrfGVufDF8fHx8MTc1NzY1NjE4MXww&ixlib=rb-4.1.0&q=80&w=400',
      isPopular: true
    },
    {
      id: '3',
      title: 'Brooklyn Bridge Cycling Tour',
      type: 'cycling',
      date: 'This Weekend',
      time: '9:00 AM',
      location: 'Brooklyn Bridge, NYC',
      organizer: 'Bridge Cyclists',
      attendees: 15,
      maxAttendees: 20,
      price: 35,
      difficulty: 'Intermediate',
      rating: 4.7,
      description: 'Explore NYC landmarks on this guided cycling tour',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400',
      isPopular: true
    },
    {
      id: '4',
      title: 'HIIT Bootcamp in the Park',
      type: 'fitness',
      date: 'Wed, Dec 13',
      time: '6:00 PM',
      location: 'Prospect Park, Brooklyn',
      organizer: 'FitNYC Collective',
      attendees: 12,
      maxAttendees: 15,
      price: 20,
      difficulty: 'Advanced',
      rating: 4.6,
      description: 'High-intensity interval training in a beautiful outdoor setting',
      image: 'https://images.unsplash.com/photo-1561579890-3ace74d8e378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYm9vdGNhbXAlMjBmaXRuZXNzfGVufDF8fHx8MTc1NzY1NjE4OHww&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '5',
      title: 'Meditation & Mindfulness Session',
      type: 'wellness',
      date: 'Fri, Dec 15',
      time: '7:30 PM',
      location: 'High Line Park, NYC',
      organizer: 'Mindful NYC',
      attendees: 8,
      maxAttendees: 12,
      price: 15,
      difficulty: 'Beginner',
      rating: 4.8,
      description: 'Unwind with guided meditation overlooking the Hudson River',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400'
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.organizer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || event.type === selectedFilter;
    const matchesDate = selectedDate === 'all' || 
                       (selectedDate === 'today' && event.date === 'Today') ||
                       (selectedDate === 'tomorrow' && event.date === 'Tomorrow') ||
                       (selectedDate === 'weekend' && event.date === 'This Weekend');
    return matchesSearch && matchesFilter && matchesDate;
  });

  const typeOptions = [
    { value: 'all', label: 'All Events', icon: '🏃‍♂️' },
    { value: 'running', label: 'Running', icon: '🏃‍♂️' },
    { value: 'yoga', label: 'Yoga', icon: '🧘‍♀️' },
    { value: 'cycling', label: 'Cycling', icon: '🚴‍♂️' },
    { value: 'fitness', label: 'Fitness', icon: '💪' },
    { value: 'wellness', label: 'Wellness', icon: '🌿' }
  ];

  const dateOptions = [
    { value: 'all', label: 'All Dates' },
    { value: 'today', label: 'Today' },
    { value: 'tomorrow', label: 'Tomorrow' },
    { value: 'weekend', label: 'This Weekend' }
  ];

  const bookEvent = (event: FitnessEvent) => {
    triggerHaptic('medium');
    onNavigate('Booking', { type: 'event', event });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'running': return '🏃‍♂️';
      case 'yoga': return '🧘‍♀️';
      case 'cycling': return '🚴‍♂️';
      case 'fitness': return '💪';
      case 'wellness': return '🌿';
      default: return '🏃‍♂️';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Fitness Events</h1>
            <p className="text-slate-600">Join local fitness activities & meet new people</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="gradient-primary text-white border-0"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Event
          </Button>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="Search events, locations, organizers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/50 border-slate-200/50"
          />
        </div>

        {/* Filters */}
        <div className="space-y-3">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {typeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedFilter(option.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedFilter === option.value
                    ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-300'
                    : 'bg-white/50 text-slate-600 border border-slate-200/50 hover:bg-white/80'
                }`}
              >
                <span>{option.icon}</span>
                <span className="text-sm font-medium">{option.label}</span>
              </button>
            ))}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {dateOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedDate(option.value)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all text-sm ${
                  selectedDate === option.value
                    ? 'bg-purple-100 text-purple-700 border-2 border-purple-300'
                    : 'bg-white/50 text-slate-600 border border-slate-200/50 hover:bg-white/80'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Popular Events */}
        <Card className="glass-bg border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Popular This Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {filteredEvents.filter(event => event.isPopular).map((event) => (
                <div
                  key={event.id}
                  className="bg-white/50 rounded-xl overflow-hidden border border-slate-200/50 hover:bg-white/80 transition-all"
                >
                  <div className="flex">
                    <div className="w-24 h-24 bg-cover bg-center relative overflow-hidden rounded-l-xl">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      {event.isBooked && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">✓</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 mb-1">{event.title}</h3>
                          
                          <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                            <Calendar className="w-3 h-3" />
                            <span>{event.date} at {event.time}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                            <MapPin className="w-3 h-3" />
                            <span>{event.location}</span>
                          </div>

                          <div className="flex items-center gap-3 text-sm">
                            <span className="flex items-center gap-1">
                              <span>{getTypeIcon(event.type)}</span>
                              {event.organizer}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3 text-slate-400" />
                              {event.attendees}/{event.maxAttendees}
                            </span>
                            <Badge className={getDifficultyColor(event.difficulty)}>
                              {event.difficulty}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="font-medium">{event.rating}</span>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-slate-900">
                              {event.price === 0 ? 'Free' : `$${event.price}`}
                            </p>
                          </div>
                          <Button
                            size="sm"
                            onClick={() => bookEvent(event)}
                            className={`${
                              event.isBooked 
                                ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                                : 'gradient-primary text-white'
                            }`}
                            disabled={event.attendees >= event.maxAttendees}
                          >
                            {event.isBooked ? 'Booked' : 
                             event.attendees >= event.maxAttendees ? 'Full' : 'Join'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* All Events */}
        <Card className="glass-bg border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Upcoming Events ({filteredEvents.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {filteredEvents.filter(event => !event.isPopular).map((event) => (
                <div
                  key={event.id}
                  onClick={() => onNavigate('EventDetail', event)}
                  className="bg-white/50 rounded-xl overflow-hidden border border-slate-200/50 hover:bg-white/80 transition-all cursor-pointer"
                >
                  <div className="flex">
                    <div className="w-20 h-20 bg-cover bg-center relative overflow-hidden rounded-l-xl">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 text-sm">{event.title}</h3>
                          <div className="flex items-center gap-2 text-xs text-slate-600 mb-1">
                            <Calendar className="w-3 h-3" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs">
                            <Users className="w-3 h-3 text-slate-400" />
                            <span>{event.attendees}/{event.maxAttendees}</span>
                            <span className="ml-2 font-semibold">
                              {event.price === 0 ? 'Free' : `$${event.price}`}
                            </span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-xs mb-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span>{event.rating}</span>
                          </div>
                          <Badge className={`${getDifficultyColor(event.difficulty)} text-xs`}>
                            {event.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}