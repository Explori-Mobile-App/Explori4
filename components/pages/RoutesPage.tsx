import { useState } from 'react';
import { MapPin, Star, Clock, Zap, Search, Filter, Navigation, Heart, Play } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Page } from '../Router';
import { useCapacitor } from '../../hooks/useCapacitor';

interface RoutesPageProps {
  onNavigate: (page: Page, data?: any) => void;
}

interface Route {
  id: string;
  name: string;
  distance: number;
  duration: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  rating: number;
  reviews: number;
  location: string;
  image: string;
  type: 'running' | 'cycling' | 'walking' | 'hiking';
  elevation: number;
  description: string;
  creator: string;
  isPopular?: boolean;
  isSaved?: boolean;
}

export default function RoutesPage({ onNavigate }: RoutesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const { triggerHaptic } = useCapacitor();

  const routes: Route[] = [
    {
      id: '1',
      name: 'Central Park Loop',
      distance: 6.1,
      duration: 35,
      difficulty: 'Easy',
      rating: 4.8,
      reviews: 324,
      location: 'Central Park, NYC',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?auto=format&fit=crop&w=400',
      type: 'running',
      elevation: 45,
      description: 'Classic loop around Central Park with scenic views',
      creator: 'NYC Running Club',
      isPopular: true,
      isSaved: true
    },
    {
      id: '2',
      name: 'Brooklyn Bridge Trail',
      distance: 4.2,
      duration: 25,
      difficulty: 'Medium',
      rating: 4.6,
      reviews: 189,
      location: 'Brooklyn, NYC',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400',
      type: 'running',
      elevation: 78,
      description: 'Cross the iconic Brooklyn Bridge with stunning city views',
      creator: 'Bridge Runners',
      isPopular: true
    },
    {
      id: '3',
      name: 'High Line Park Walk',
      distance: 2.3,
      duration: 30,
      difficulty: 'Easy',
      rating: 4.9,
      reviews: 456,
      location: 'Chelsea, NYC',
      image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=400',
      type: 'walking',
      elevation: 12,
      description: 'Elevated park built on former railway line',
      creator: 'Urban Explorers'
    },
    {
      id: '4',
      name: 'Prospect Park Circuit',
      distance: 5.5,
      duration: 32,
      difficulty: 'Medium',
      rating: 4.7,
      reviews: 267,
      location: 'Brooklyn, NYC',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400',
      type: 'cycling',
      elevation: 65,
      description: 'Perfect cycling route through Brooklyn\'s premier park',
      creator: 'Brooklyn Cyclists'
    }
  ];

  const filteredRoutes = routes.filter(route => {
    const matchesSearch = route.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         route.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || route.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const filterOptions = [
    { value: 'all', label: 'All Routes', icon: '🗺️' },
    { value: 'running', label: 'Running', icon: '🏃‍♂️' },
    { value: 'cycling', label: 'Cycling', icon: '🚴‍♂️' },
    { value: 'walking', label: 'Walking', icon: '🚶‍♂️' },
    { value: 'hiking', label: 'Hiking', icon: '🥾' }
  ];

  const startRoute = (route: Route) => {
    triggerHaptic('medium');
    onNavigate('RouteDetail', route);
  };

  const toggleSaveRoute = (routeId: string) => {
    triggerHaptic('light');
    // Would update in backend/local storage
    console.log('Toggle save route:', routeId);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'running': return '🏃‍♂️';
      case 'cycling': return '🚴‍♂️';
      case 'walking': return '🚶‍♂️';
      case 'hiking': return '🥾';
      default: return '🗺️';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Routes</h1>
            <p className="text-slate-600">Discover local running & cycling routes</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate('Workout')}
            className="gradient-primary text-white border-0"
          >
            <Zap className="w-4 h-4 mr-2" />
            Workout
          </Button>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="Search routes, locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/50 border-slate-200/50"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filterOptions.map((option) => (
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
      </div>

      <div className="p-6 space-y-6">
        {/* Popular Routes */}
        <Card className="glass-bg border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Popular Near You
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {filteredRoutes.filter(route => route.isPopular).map((route) => (
                <div
                  key={route.id}
                  className="relative bg-white/50 rounded-xl overflow-hidden border border-slate-200/50 hover:bg-white/80 transition-all"
                >
                  <div className="flex">
                    <div className="w-24 h-24 bg-cover bg-center relative overflow-hidden rounded-l-xl">
                      <img 
                        src={route.image} 
                        alt={route.name}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => toggleSaveRoute(route.id)}
                        className="absolute top-2 right-2 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center"
                      >
                        <Heart className={`w-3 h-3 ${route.isSaved ? 'text-red-500 fill-current' : 'text-white'}`} />
                      </button>
                    </div>
                    
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 mb-1">{route.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                            <MapPin className="w-3 h-3" />
                            <span>{route.location}</span>
                          </div>
                          
                          <div className="flex items-center gap-3 text-sm">
                            <span className="flex items-center gap-1">
                              <span>{getTypeIcon(route.type)}</span>
                              {route.distance} km
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-slate-400" />
                              {route.duration} min
                            </span>
                            <Badge variant="secondary" className={getDifficultyColor(route.difficulty)}>
                              {route.difficulty}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="font-medium">{route.rating}</span>
                            <span className="text-slate-500">({route.reviews})</span>
                          </div>
                          <Button
                            size="sm"
                            onClick={() => startRoute(route)}
                            className="gradient-primary text-white"
                          >
                            <Play className="w-3 h-3 mr-1" />
                            Start
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

        {/* All Routes */}
        <Card className="glass-bg border-0 shadow-lg">
          <CardHeader>
            <CardTitle>All Routes ({filteredRoutes.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {filteredRoutes.filter(route => !route.isPopular).map((route) => (
                <div
                  key={route.id}
                  onClick={() => onNavigate('RouteDetail', route)}
                  className="bg-white/50 rounded-xl overflow-hidden border border-slate-200/50 hover:bg-white/80 transition-all cursor-pointer"
                >
                  <div className="flex">
                    <div className="w-20 h-20 bg-cover bg-center relative overflow-hidden rounded-l-xl">
                      <img 
                        src={route.image} 
                        alt={route.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 text-sm">{route.name}</h3>
                          <div className="flex items-center gap-2 text-xs text-slate-600 mb-1">
                            <span>{getTypeIcon(route.type)}</span>
                            <span>{route.distance} km</span>
                            <span>•</span>
                            <span>{route.duration} min</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span>{route.rating}</span>
                            <Badge variant="secondary" className={`${getDifficultyColor(route.difficulty)} text-xs`}>
                              {route.difficulty}
                            </Badge>
                          </div>
                        </div>
                        
                        <Button size="sm" variant="ghost">
                          <Navigation className="w-4 h-4" />
                        </Button>
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