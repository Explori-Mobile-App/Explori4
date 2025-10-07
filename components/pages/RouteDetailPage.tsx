import { useState } from 'react';
import { ArrowLeft, Play, Heart, Share2, MapPin, Clock, Zap, TrendingUp, Star, User, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Page } from '../Router';
import { useCapacitor } from '../../hooks/useCapacitor';
import GPSRouteMap from '../GPSRouteMap';

interface RouteDetailPageProps {
  onNavigate: (page: Page, data?: any) => void;
  route: any;
}

interface RoutePoint {
  lat: number;
  lng: number;
  elevation: number;
  distance: number;
}

export default function RouteDetailPage({ onNavigate, route }: RouteDetailPageProps) {
  const [isSaved, setIsSaved] = useState(route?.isSaved || false);
  const [showElevation, setShowElevation] = useState(false);
  const { triggerHaptic } = useCapacitor();

  // Mock GPS route points for visualization
  const routePoints: RoutePoint[] = [
    { lat: 40.7829, lng: -73.9654, elevation: 30, distance: 0 },
    { lat: 40.7831, lng: -73.9651, elevation: 35, distance: 0.5 },
    { lat: 40.7835, lng: -73.9648, elevation: 40, distance: 1.0 },
    { lat: 40.7842, lng: -73.9642, elevation: 45, distance: 1.8 },
    { lat: 40.7848, lng: -73.9638, elevation: 50, distance: 2.5 },
    { lat: 40.7852, lng: -73.9635, elevation: 55, distance: 3.2 },
    { lat: 40.7856, lng: -73.9632, elevation: 48, distance: 4.0 },
    { lat: 40.7859, lng: -73.9628, elevation: 42, distance: 4.8 },
    { lat: 40.7862, lng: -73.9625, elevation: 38, distance: 5.5 },
    { lat: 40.7865, lng: -73.9622, elevation: 35, distance: 6.1 }
  ];

  const reviews = [
    {
      id: '1',
      user: 'Sarah M.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=40',
      rating: 5,
      comment: 'Perfect morning run! Beautiful scenery and well-maintained path.',
      date: '2 days ago',
      helpful: 12
    },
    {
      id: '2',
      user: 'Mike R.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=40',
      rating: 4,
      comment: 'Great route but can get crowded on weekends. Early morning is best!',
      date: '1 week ago',
      helpful: 8
    }
  ];

  const startWorkout = () => {
    triggerHaptic('medium');
    // Would start GPS tracking and navigate to active workout
    onNavigate('Workout', { route, isActive: true });
  };

  const toggleSave = () => {
    triggerHaptic('light');
    setIsSaved(!isSaved);
  };

  const shareRoute = () => {
    triggerHaptic('light');
    // Would trigger native share functionality
    if (navigator.share) {
      navigator.share({
        title: route.name,
        text: `Check out this ${route.type} route: ${route.name}`,
        url: window.location.href
      });
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  if (!route) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <p>Route not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="relative">
        <div className="h-64 bg-cover bg-center relative overflow-hidden">
          <img 
            src={route.image} 
            alt={route.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Header Controls */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate('Routes')}
              className="bg-black/30 backdrop-blur-sm text-white hover:bg-black/50"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleSave}
                className="bg-black/30 backdrop-blur-sm text-white hover:bg-black/50"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-current text-red-500' : ''}`} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={shareRoute}
                className="bg-black/30 backdrop-blur-sm text-white hover:bg-black/50"
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Route Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="text-2xl font-bold text-white mb-2">{route.name}</h1>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-4 h-4" />
              <span>{route.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6 -mt-6 relative">
        {/* Quick Stats */}
        <Card className="glass-bg border-0 shadow-xl">
          <CardContent className="p-6">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-indigo-600">{route.distance}</p>
                <p className="text-sm text-slate-600">km</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">{route.duration}</p>
                <p className="text-sm text-slate-600">min</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">{route.elevation}</p>
                <p className="text-sm text-slate-600">elevation</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">{route.rating}</p>
                <p className="text-sm text-slate-600">rating</p>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge className={getDifficultyColor(route.difficulty)}>
                  {route.difficulty}
                </Badge>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>{route.rating}</span>
                  <span className="text-slate-500">({route.reviews} reviews)</span>
                </div>
              </div>
              
              <Button
                onClick={startWorkout}
                className="gradient-primary text-white"
              >
                <Play className="w-4 h-4 mr-2" />
                Start Route
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* GPS Route Map */}
        <GPSRouteMap 
          route={route}
          onStartRoute={startWorkout}
        />

        {/* Description */}
        <Card className="glass-bg border-0 shadow-lg">
          <CardHeader>
            <CardTitle>About This Route</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">{route.description}</p>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <User className="w-4 h-4" />
              <span>Created by {route.creator}</span>
            </div>
          </CardContent>
        </Card>

        {/* Reviews */}
        <Card className="glass-bg border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Reviews ({route.reviews})</span>
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Add Review
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white/50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <img
                    src={review.avatar}
                    alt={review.user}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900">{review.user}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < review.rating ? 'text-yellow-500 fill-current' : 'text-slate-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-slate-500">{review.date}</span>
                    </div>
                    <p className="text-slate-700 text-sm mb-2">{review.comment}</p>
                    <button className="text-xs text-slate-500 hover:text-slate-700">
                      👍 Helpful ({review.helpful})
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}