import { useState, useEffect } from 'react';
import { Activity, Target, TrendingUp, Calendar, Award, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Page } from './Router';

interface FitnessStatsSectionProps {
  onNavigate: (page: Page, data?: any) => void;
}

interface WeeklyStats {
  workouts: number;
  distance: number;
  calories: number;
  activeMinutes: number;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress?: number;
  total?: number;
}

export default function FitnessStatsSection({ onNavigate }: FitnessStatsSectionProps) {
  const [weeklyStats, setWeeklyStats] = useState<WeeklyStats>({
    workouts: 8,
    distance: 42.5,
    calories: 2840,
    activeMinutes: 380
  });

  const weeklyGoals = {
    workouts: 10,
    distance: 50,
    calories: 3500,
    activeMinutes: 420
  };

  const recentAchievements: Achievement[] = [
    {
      id: '1',
      title: 'First 5K',
      description: 'Complete your first 5K run',
      icon: '🏃‍♂️',
      unlocked: true
    },
    {
      id: '2', 
      title: 'Consistency King',
      description: 'Work out 7 days in a row',
      icon: '👑',
      unlocked: true
    },
    {
      id: '3',
      title: 'Century Rider',
      description: 'Cycle 100km in a week',
      icon: '🚴‍♂️',
      unlocked: false,
      progress: 67,
      total: 100
    }
  ];

  const calculateProgress = (current: number, goal: number) => {
    return Math.min((current / goal) * 100, 100);
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-orange-600';
  };

  return (
    <div className="space-y-6">
      {/* Weekly Overview */}
      <Card className="glass-bg border-0 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-indigo-600" />
              This Week
            </CardTitle>
            <p className="text-sm text-slate-600 mt-1">Your fitness progress</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate('Achievements')}
            className="gradient-secondary text-white border-0"
          >
            <Award className="w-4 h-4 mr-2" />
            View All
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Workouts Progress */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-600" />
                <span className="font-medium">Workouts</span>
              </div>
              <span className={`font-bold ${getProgressColor(calculateProgress(weeklyStats.workouts, weeklyGoals.workouts))}`}>
                {weeklyStats.workouts}/{weeklyGoals.workouts}
              </span>
            </div>
            <Progress 
              value={calculateProgress(weeklyStats.workouts, weeklyGoals.workouts)} 
              className="h-2" 
            />
          </div>

          {/* Distance Progress */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="font-medium">Distance</span>
              </div>
              <span className={`font-bold ${getProgressColor(calculateProgress(weeklyStats.distance, weeklyGoals.distance))}`}>
                {weeklyStats.distance}/{weeklyGoals.distance} km
              </span>
            </div>
            <Progress 
              value={calculateProgress(weeklyStats.distance, weeklyGoals.distance)} 
              className="h-2" 
            />
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="text-center p-3 bg-white/50 rounded-lg">
              <p className="text-2xl font-bold text-orange-600">{weeklyStats.calories.toLocaleString()}</p>
              <p className="text-sm text-slate-600">Calories Burned</p>
              <div className="mt-1">
                <Badge variant="secondary" className="text-xs">
                  {Math.round(calculateProgress(weeklyStats.calories, weeklyGoals.calories))}% of goal
                </Badge>
              </div>
            </div>
            <div className="text-center p-3 bg-white/50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">{weeklyStats.activeMinutes}</p>
              <p className="text-sm text-slate-600">Active Minutes</p>
              <div className="mt-1">
                <Badge variant="secondary" className="text-xs">
                  {Math.round(calculateProgress(weeklyStats.activeMinutes, weeklyGoals.activeMinutes))}% of goal
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card className="glass-bg border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-3 rounded-lg border transition-all ${
                achievement.unlocked
                  ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200'
                  : 'bg-white/50 border-slate-200/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`text-2xl ${achievement.unlocked ? '' : 'grayscale opacity-60'}`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${achievement.unlocked ? 'text-slate-900' : 'text-slate-600'}`}>
                    {achievement.title}
                  </h3>
                  <p className={`text-sm ${achievement.unlocked ? 'text-slate-700' : 'text-slate-500'}`}>
                    {achievement.description}
                  </p>
                  {!achievement.unlocked && achievement.progress && achievement.total && (
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-slate-600 mb-1">
                        <span>Progress</span>
                        <span>{achievement.progress}/{achievement.total} km</span>
                      </div>
                      <Progress 
                        value={(achievement.progress / achievement.total) * 100} 
                        className="h-1" 
                      />
                    </div>
                  )}
                </div>
                {achievement.unlocked && (
                  <div className="text-right">
                    <Badge className="bg-yellow-100 text-yellow-800">
                      Unlocked!
                    </Badge>
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="glass-bg border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => onNavigate('Workout')}
              className="h-16 flex flex-col gap-1 gradient-primary text-white"
            >
              <Activity className="w-5 h-5" />
              <span className="text-sm">Start Workout</span>
            </Button>
            <Button
              onClick={() => onNavigate('Routes')}
              className="h-16 flex flex-col gap-1 gradient-secondary text-white"
            >
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Find Routes</span>
            </Button>
            <Button
              onClick={() => onNavigate('FitnessEvents')}
              variant="outline"
              className="h-16 flex flex-col gap-1"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Events</span>
            </Button>
            <Button
              onClick={() => onNavigate('Achievements')}
              variant="outline"
              className="h-16 flex flex-col gap-1"
            >
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm">Progress</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}