import { useState } from 'react';
import { ArrowLeft, Share2, Clock, Zap, TrendingUp, MapPin, Calendar, Trophy, Target } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Page } from '../Router';
import { useCapacitor } from '../../hooks/useCapacitor';

interface WorkoutDetailPageProps {
  onNavigate: (page: Page, data?: any) => void;
  workout: any;
}

export default function WorkoutDetailPage({ onNavigate, workout }: WorkoutDetailPageProps) {
  const { triggerHaptic } = useCapacitor();

  // Mock workout data if not provided
  const workoutData = workout || {
    id: '1',
    type: 'Morning Run',
    duration: 35,
    calories: 320,
    distance: 5.2,
    date: 'Today',
    location: 'Central Park, NYC',
    startTime: '7:00 AM',
    endTime: '7:35 AM',
    avgPace: '6:45',
    maxPace: '5:30',
    avgHeartRate: 152,
    maxHeartRate: 178,
    elevationGain: 45,
    steps: 6420,
    zones: {
      fat: 8,
      cardio: 20,
      peak: 7
    }
  };

  const shareWorkout = () => {
    triggerHaptic('light');
    // Would trigger native share functionality
    if (navigator.share) {
      navigator.share({
        title: `${workoutData.type} - ${workoutData.duration} minutes`,
        text: `I just completed a ${workoutData.duration}-minute ${workoutData.type.toLowerCase()} and burned ${workoutData.calories} calories!`,
        url: window.location.href
      });
    }
  };

  const getZoneColor = (zone: string) => {
    switch (zone) {
      case 'fat': return 'bg-blue-500';
      case 'cardio': return 'bg-orange-500';
      case 'peak': return 'bg-red-500';
      default: return 'bg-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate('Workout')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={shareWorkout}
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Workout Summary */}
        <Card className="glass-bg border-0 shadow-xl">
          <CardHeader className="text-center">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-2xl text-slate-900">{workoutData.type}</CardTitle>
            <div className="flex items-center justify-center gap-2 text-slate-600">
              <Calendar className="w-4 h-4" />
              <span>{workoutData.date} • {workoutData.startTime} - {workoutData.endTime}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-600">
              <MapPin className="w-4 h-4" />
              <span>{workoutData.location}</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-indigo-600">{workoutData.duration}</p>
                <p className="text-sm text-slate-600">Minutes</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">{workoutData.calories}</p>
                <p className="text-sm text-slate-600">Calories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">{workoutData.distance}</p>
                <p className="text-sm text-slate-600">km</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">{workoutData.avgPace}</p>
                <p className="text-sm text-slate-600">Avg Pace</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card className="glass-bg border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/50 rounded-xl p-4 text-center">
                <p className="text-lg font-bold text-red-600">{workoutData.avgHeartRate}</p>
                <p className="text-sm text-slate-600">Avg Heart Rate</p>
                <p className="text-xs text-slate-500">Max: {workoutData.maxHeartRate} bpm</p>
              </div>
              <div className="bg-white/50 rounded-xl p-4 text-center">
                <p className="text-lg font-bold text-green-600">{workoutData.steps}</p>
                <p className="text-sm text-slate-600">Steps</p>
                <p className="text-xs text-slate-500">Elevation: +{workoutData.elevationGain}m</p>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Heart Rate Zones</span>
                <span>{workoutData.duration} min total</span>
              </div>
              <div className="flex rounded-full overflow-hidden h-3">
                <div 
                  className={`${getZoneColor('fat')} flex-1`}
                  style={{ flexGrow: workoutData.zones.fat }}
                />
                <div 
                  className={`${getZoneColor('cardio')} flex-1`}
                  style={{ flexGrow: workoutData.zones.cardio }}
                />
                <div 
                  className={`${getZoneColor('peak')} flex-1`}
                  style={{ flexGrow: workoutData.zones.peak }}
                />
              </div>
              <div className="flex justify-between text-xs text-slate-600 mt-1">
                <span>Fat Burn ({workoutData.zones.fat}min)</span>
                <span>Cardio ({workoutData.zones.cardio}min)</span>
                <span>Peak ({workoutData.zones.peak}min)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Route Map */}
        <Card className="glass-bg border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Route</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Simplified route visualization */}
            <div className="relative bg-slate-100 rounded-xl overflow-hidden h-48 mb-4">
              <div className="absolute inset-4">
                <svg className="w-full h-full" viewBox="0 0 300 160">
                  <path
                    d="M20,80 Q80,40 120,60 T200,80 Q240,100 280,80"
                    stroke="#6366f1"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Start point */}
                  <circle cx="20" cy="80" r="8" fill="#10b981" />
                  <text x="20" y="70" textAnchor="middle" className="text-xs fill-slate-600">Start</text>
                  {/* End point */}
                  <circle cx="280" cy="80" r="8" fill="#ef4444" />
                  <text x="280" y="70" textAnchor="middle" className="text-xs fill-slate-600">Finish</text>
                  {/* Progress markers */}
                  <circle cx="120" cy="60" r="4" fill="#6366f1" />
                  <circle cx="200" cy="80" r="4" fill="#6366f1" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-lg font-bold text-blue-600">{workoutData.distance}</p>
                <p className="text-sm text-slate-600">Distance</p>
              </div>
              <div>
                <p className="text-lg font-bold text-yellow-600">{workoutData.avgPace}</p>
                <p className="text-sm text-slate-600">Avg Pace</p>
              </div>
              <div>
                <p className="text-lg font-bold text-green-600">{workoutData.elevationGain}m</p>
                <p className="text-sm text-slate-600">Elevation</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="glass-bg border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-xl border border-yellow-200">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-yellow-800">Personal Best!</h3>
                  <p className="text-sm text-yellow-700">Fastest 5K time this month</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-200">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800">Weekly Goal Achieved</h3>
                  <p className="text-sm text-blue-700">150 minutes of activity completed</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            onClick={() => onNavigate('Routes')}
            className="h-14"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Find Similar Routes
          </Button>
          <Button
            onClick={shareWorkout}
            className="gradient-primary text-white h-14"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share Workout
          </Button>
        </div>
      </div>
    </div>
  );
}