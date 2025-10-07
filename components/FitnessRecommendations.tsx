import { useState, useEffect } from 'react';
import { Brain, MapPin, Clock, Star, TrendingUp, Users, Zap, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Page } from './Router';

interface FitnessRecommendationsProps {
  onNavigate: (page: Page, data?: any) => void;
  userPreferences?: {
    fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
    preferredActivities: string[];
    weeklyGoal: number;
    location: string;
  };
}

interface Recommendation {
  id: string;
  type: 'route' | 'workout' | 'event' | 'challenge';
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: number;
  location?: string;
  matchScore: number;
  reasons: string[];
  image: string;
  participants?: number;
  category: string;
  benefits: string[];
}

export default function FitnessRecommendations({ 
  onNavigate, 
  userPreferences 
}: FitnessRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Mock user preferences if not provided
  const defaultPreferences = {
    fitnessLevel: 'intermediate' as const,
    preferredActivities: ['running', 'cycling', 'yoga'],
    weeklyGoal: 4,
    location: 'New York City'
  };

  const prefs = userPreferences || defaultPreferences;

  useEffect(() => {
    // Generate personalized recommendations based on user data
    const generateRecommendations = () => {
      const mockRecommendations: Recommendation[] = [
        {
          id: '1',
          type: 'route',
          title: 'Riverside Running Path',
          description: 'Scenic 5K route along the Hudson River with minimal elevation changes',
          difficulty: 'Easy',
          duration: 30,
          location: 'Hudson River Park',
          matchScore: 95,
          reasons: ['Matches your running preference', 'Perfect for your fitness level', 'Close to your location'],
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400',
          category: 'running',
          benefits: ['Improves cardiovascular health', 'Scenic views', 'Low impact']
        },
        {
          id: '2',
          type: 'workout',
          title: 'HIIT Bootcamp',
          description: '25-minute high-intensity interval training for intermediate fitness levels',
          difficulty: 'Medium',
          duration: 25,
          matchScore: 88,
          reasons: ['Efficient time use', 'Builds on your current fitness level', 'Burns maximum calories'],
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400',
          category: 'strength',
          benefits: ['Burns calories efficiently', 'Builds strength', 'Time efficient']
        },
        {
          id: '3',
          type: 'event',
          title: 'Central Park Yoga Class',
          description: 'Outdoor yoga session in Central Park with expert instructor',
          difficulty: 'Easy',
          duration: 60,
          location: 'Central Park Great Lawn',
          matchScore: 82,
          participants: 24,
          reasons: ['Matches yoga preference', 'Stress relief benefits', 'Social activity'],
          image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400',
          category: 'yoga',
          benefits: ['Improves flexibility', 'Reduces stress', 'Social connection']
        },
        {
          id: '4',
          type: 'challenge',
          title: '7-Day Cycling Challenge',
          description: 'Join 200+ cyclists in a week-long distance challenge',
          difficulty: 'Medium',
          duration: 0, // Variable
          matchScore: 79,
          participants: 247,
          reasons: ['Group motivation', 'Progressive difficulty', 'Cycling enthusiast match'],
          image: 'https://images.unsplash.com/photo-1558618047-fd5c1f0b8670?auto=format&fit=crop&w=400',
          category: 'cycling',
          benefits: ['Community support', 'Progressive goals', 'Track progress']
        },
        {
          id: '5',
          type: 'route',
          title: 'Brooklyn Bridge Loop',
          description: 'Iconic cycling route across Brooklyn Bridge with city views',
          difficulty: 'Medium',
          duration: 45,
          location: 'Brooklyn Bridge',
          matchScore: 76,
          reasons: ['Scenic route', 'Cultural landmark', 'Good cycling infrastructure'],
          image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400',
          category: 'cycling',
          benefits: ['Sightseeing', 'Cardio workout', 'Photo opportunities']
        }
      ];

      // Filter and sort by match score
      const filtered = mockRecommendations
        .filter(rec => selectedCategory === 'all' || rec.category === selectedCategory)
        .sort((a, b) => b.matchScore - a.matchScore);

      setRecommendations(filtered);
    };

    generateRecommendations();
  }, [selectedCategory, prefs]);

  const categories = [
    { id: 'all', label: 'All', icon: '🎯' },
    { id: 'running', label: 'Running', icon: '🏃‍♂️' },
    { id: 'cycling', label: 'Cycling', icon: '🚴‍♂️' },
    { id: 'yoga', label: 'Yoga', icon: '🧘‍♀️' },
    { id: 'strength', label: 'Strength', icon: '💪' }
  ];

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
      case 'route': return <MapPin className="w-4 h-4" />;
      case 'workout': return <Zap className="w-4 h-4" />;
      case 'event': return <Users className="w-4 h-4" />;
      case 'challenge': return <Target className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const handleRecommendationClick = (recommendation: Recommendation) => {
    switch (recommendation.type) {
      case 'route':
        onNavigate('RouteDetail', recommendation);
        break;
      case 'workout':
        onNavigate('WorkoutDetail', recommendation);
        break;
      case 'event':
        onNavigate('EventDetail', recommendation);
        break;
      case 'challenge':
        onNavigate('FitnessEvents', { selectedChallenge: recommendation });
        break;
    }
  };

  return (
    <Card className="glass-bg border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-indigo-600" />
          Personalized For You
        </CardTitle>
        <p className="text-sm text-slate-600">
          Based on your preferences and fitness level
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-full whitespace-nowrap transition-all text-sm ${
                selectedCategory === category.id
                  ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-300'
                  : 'bg-white/50 text-slate-600 border border-slate-200/50 hover:bg-white/80'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Recommendations List */}
        <div className="space-y-3">
          {recommendations.slice(0, 3).map((recommendation) => (
            <div
              key={recommendation.id}
              onClick={() => handleRecommendationClick(recommendation)}
              className="bg-white/50 rounded-xl p-4 border border-slate-200/50 hover:bg-white/80 transition-all cursor-pointer"
            >
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-cover bg-center rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={recommendation.image} 
                    alt={recommendation.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {getTypeIcon(recommendation.type)}
                        <h3 className="font-semibold text-slate-900 text-sm">{recommendation.title}</h3>
                      </div>
                      <p className="text-xs text-slate-600 mb-2">{recommendation.description}</p>
                      
                      <div className="flex items-center gap-2 text-xs">
                        <Badge variant="secondary" className={getDifficultyColor(recommendation.difficulty)}>
                          {recommendation.difficulty}
                        </Badge>
                        <div className="flex items-center gap-1 text-slate-500">
                          <Clock className="w-3 h-3" />
                          <span>{recommendation.duration} min</span>
                        </div>
                        {recommendation.participants && (
                          <div className="flex items-center gap-1 text-slate-500">
                            <Users className="w-3 h-3" />
                            <span>{recommendation.participants}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-right ml-2">
                      <div className="flex items-center gap-1 text-xs text-indigo-600 font-medium">
                        <TrendingUp className="w-3 h-3" />
                        <span>{recommendation.matchScore}% match</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Why Recommended */}
                  <div className="bg-indigo-50 rounded-lg p-2 mt-2">
                    <p className="text-xs text-indigo-700 font-medium mb-1">Why this is perfect for you:</p>
                    <ul className="text-xs text-indigo-600 space-y-1">
                      {recommendation.reasons.slice(0, 2).map((reason, index) => (
                        <li key={index} className="flex items-center gap-1">
                          <span className="w-1 h-1 bg-indigo-400 rounded-full flex-shrink-0"></span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => onNavigate('FitnessEvents')}
        >
          View All Recommendations
        </Button>
      </CardContent>
    </Card>
  );
}