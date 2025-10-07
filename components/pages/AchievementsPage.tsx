import { useState } from 'react';
import { Trophy, Star, Target, Flame, Award, Share2, Calendar, TrendingUp, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Page } from '../Router';
import { useCapacitor } from '../../hooks/useCapacitor';

interface AchievementsPageProps {
  onNavigate: (page: Page, data?: any) => void;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: 'distance' | 'time' | 'frequency' | 'speed' | 'social';
  progress: number;
  target: number;
  unit: string;
  isCompleted: boolean;
  completedDate?: string;
  category: 'weekly' | 'monthly' | 'yearly' | 'lifetime';
  points: number;
}

interface Stat {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: any;
}

export default function AchievementsPage({ onNavigate }: AchievementsPageProps) {
  const [selectedTab, setSelectedTab] = useState('achievements');
  const { triggerHaptic } = useCapacitor();

  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'Marathon Runner',
      description: 'Complete 26.2 miles total distance',
      icon: '🏃‍♂️',
      type: 'distance',
      progress: 18.5,
      target: 26.2,
      unit: 'miles',
      isCompleted: false,
      category: 'monthly',
      points: 100
    },
    {
      id: '2',
      title: 'Early Bird',
      description: 'Complete 5 workouts before 8 AM',
      icon: '🌅',
      type: 'frequency',
      progress: 5,
      target: 5,
      unit: 'workouts',
      isCompleted: true,
      completedDate: '2 days ago',
      category: 'weekly',
      points: 50
    },
    {
      id: '3',
      title: 'Speed Demon',
      description: 'Run 5K under 25 minutes',
      icon: '⚡',
      type: 'speed',
      progress: 26.3,
      target: 25,
      unit: 'minutes',
      isCompleted: false,
      category: 'monthly',
      points: 75
    },
    {
      id: '4',
      title: 'Social Butterfly',
      description: 'Join 3 group fitness events',
      icon: '🦋',
      type: 'social',
      progress: 2,
      target: 3,
      unit: 'events',
      isCompleted: false,
      category: 'monthly',
      points: 60
    },
    {
      id: '5',
      title: 'Consistency King',
      description: 'Work out 7 days in a row',
      icon: '👑',
      type: 'frequency',
      progress: 4,
      target: 7,
      unit: 'days',
      isCompleted: false,
      category: 'weekly',
      points: 80
    },
    {
      id: '6',
      title: 'Century Club',
      description: 'Burn 100 calories in a single workout',
      icon: '🔥',
      type: 'time',
      progress: 100,
      target: 100,
      unit: 'calories',
      isCompleted: true,
      completedDate: 'Today',
      category: 'weekly',
      points: 40
    }
  ];

  const stats: Stat[] = [
    {
      label: 'Total Workouts',
      value: '23',
      change: '+3 this week',
      isPositive: true,
      icon: Target
    },
    {
      label: 'Total Distance',
      value: '47.2 km',
      change: '+12.5 km this week',
      isPositive: true,
      icon: TrendingUp
    },
    {
      label: 'Active Streak',
      value: '4 days',
      change: 'Keep it up!',
      isPositive: true,
      icon: Flame
    },
    {
      label: 'Achievement Points',
      value: '340',
      change: '+90 this month',
      isPositive: true,
      icon: Star
    }
  ];

  const leaderboard = [
    { name: 'Sarah M.', points: 450, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=40', rank: 1 },
    { name: 'You', points: 340, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40', rank: 2, isCurrentUser: true },
    { name: 'Mike R.', points: 290, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=40', rank: 3 },
    { name: 'Lisa K.', points: 275, avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=40', rank: 4 },
    { name: 'Alex T.', points: 230, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=40', rank: 5 }
  ];

  const shareAchievement = (achievement: Achievement) => {
    triggerHaptic('medium');
    if (navigator.share) {
      navigator.share({
        title: `🏆 Achievement Unlocked: ${achievement.title}`,
        text: `I just earned the "${achievement.title}" achievement in Explori! ${achievement.description}`,
        url: window.location.href
      });
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'weekly': return '📅';
      case 'monthly': return '🗓️';
      case 'yearly': return '📆';
      case 'lifetime': return '♾️';
      default: return '🏆';
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Achievements</h1>
            <p className="text-slate-600">Track your fitness journey & compete with friends</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-indigo-600">340</p>
            <p className="text-sm text-slate-600">Total Points</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/50 border border-slate-200/50">
            <TabsTrigger value="achievements" className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-700">
              <Trophy className="w-4 h-4 mr-2" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="stats" className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-700">
              <TrendingUp className="w-4 h-4 mr-2" />
              Stats
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-700">
              <Users className="w-4 h-4 mr-2" />
              Leaderboard
            </TabsTrigger>
          </TabsList>

          <TabsContent value="achievements" className="space-y-6">
            {/* Completed Achievements */}
            <Card className="glass-bg border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Recently Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {achievements.filter(a => a.isCompleted).map((achievement) => (
                    <div
                      key={achievement.id}
                      className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{achievement.icon}</div>
                          <div>
                            <h3 className="font-bold text-slate-900">{achievement.title}</h3>
                            <p className="text-sm text-slate-600">{achievement.description}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                {getCategoryIcon(achievement.category)} {achievement.category}
                              </Badge>
                              <span className="text-xs text-slate-500">Completed {achievement.completedDate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="text-yellow-600 font-bold">+{achievement.points} pts</div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => shareAchievement(achievement)}
                            className="bg-white/50"
                          >
                            <Share2 className="w-3 h-3 mr-1" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* In Progress Achievements */}
            <Card className="glass-bg border-0 shadow-lg">
              <CardHeader>
                <CardTitle>In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {achievements.filter(a => !a.isCompleted).map((achievement) => (
                    <div
                      key={achievement.id}
                      className="bg-white/50 rounded-xl p-4 border border-slate-200/50"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl opacity-60">{achievement.icon}</div>
                          <div>
                            <h3 className="font-semibold text-slate-900">{achievement.title}</h3>
                            <p className="text-sm text-slate-600">{achievement.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-indigo-600 font-semibold">{achievement.points} pts</div>
                          <Badge variant="secondary" className="text-xs">
                            {getCategoryIcon(achievement.category)}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>
                            {achievement.type === 'speed' 
                              ? `${achievement.progress} / ${achievement.target} ${achievement.unit}`
                              : `${achievement.progress} / ${achievement.target} ${achievement.unit}`
                            }
                          </span>
                        </div>
                        <Progress 
                          value={achievement.type === 'speed' 
                            ? Math.max(0, 100 - ((achievement.progress - achievement.target) / achievement.target * 100))
                            : (achievement.progress / achievement.target) * 100
                          } 
                          className="h-2" 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            {/* Overview Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="glass-bg border-0 shadow-lg">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
                    <p className={`text-xs ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Weekly Progress */}
            <Card className="glass-bg border-0 shadow-lg">
              <CardHeader>
                <CardTitle>This Week's Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Weekly Goal</span>
                      <span>4/5 workouts</span>
                    </div>
                    <Progress value={80} className="h-3" />
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                      <div key={day} className="text-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold mb-1 ${
                          index < 4 ? 'bg-green-500 text-white' : 
                          index === 4 ? 'bg-yellow-500 text-white' : 'bg-slate-200 text-slate-500'
                        }`}>
                          {index < 4 ? '✓' : index === 4 ? '!' : ''}
                        </div>
                        <span className="text-xs text-slate-600">{day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Comparison */}
            <Card className="glass-bg border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Monthly Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xl font-bold text-blue-600">23</p>
                    <p className="text-sm text-slate-600">This Month</p>
                    <p className="text-xs text-green-600">+15% vs last month</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-orange-600">47.2km</p>
                    <p className="text-sm text-slate-600">Distance</p>
                    <p className="text-xs text-green-600">+22% vs last month</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-purple-600">18h</p>
                    <p className="text-sm text-slate-600">Active Time</p>
                    <p className="text-xs text-green-600">+8% vs last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="glass-bg border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Monthly Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((user) => (
                    <div
                      key={user.name}
                      className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                        user.isCurrentUser 
                          ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200' 
                          : 'bg-white/50 border border-slate-200/50'
                      }`}
                    >
                      <div className="text-2xl">
                        {getRankIcon(user.rank)}
                      </div>
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className={`font-semibold ${user.isCurrentUser ? 'text-indigo-900' : 'text-slate-900'}`}>
                          {user.name}
                        </h3>
                        <p className="text-sm text-slate-600">{user.points} points</p>
                      </div>
                      {user.isCurrentUser && (
                        <Badge className="bg-indigo-100 text-indigo-700">You</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card className="glass-bg border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Active Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-white/50 rounded-xl p-4 border border-slate-200/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-slate-900">December Distance Challenge</h3>
                        <p className="text-sm text-slate-600">Run 50km in December</p>
                        <Progress value={38} className="h-2 mt-2" />
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-indigo-600">19/50km</p>
                        <p className="text-xs text-slate-500">12 days left</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}