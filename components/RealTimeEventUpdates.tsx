import { useState, useEffect } from 'react';
import { Bell, Clock, MapPin, Users, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Page } from './Router';

interface RealTimeEventUpdatesProps {
  onNavigate: (page: Page, data?: any) => void;
}

interface EventUpdate {
  id: string;
  type: 'registration_open' | 'weather_alert' | 'last_chance' | 'event_full' | 'route_change' | 'cancelled';
  eventId: string;
  eventName: string;
  message: string;
  timestamp: Date;
  severity: 'info' | 'warning' | 'urgent';
  actionRequired?: boolean;
  location?: string;
  startTime?: Date;
}

export default function RealTimeEventUpdates({ onNavigate }: RealTimeEventUpdatesProps) {
  const [updates, setUpdates] = useState<EventUpdate[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Simulate real-time updates
    const mockUpdates: EventUpdate[] = [
      {
        id: '1',
        type: 'registration_open',
        eventId: 'evt_001',
        eventName: 'Central Park 5K Run',
        message: 'Registration now open! Early bird pricing until tomorrow.',
        timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
        severity: 'info',
        location: 'Central Park',
        startTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days from now
      },
      {
        id: '2',
        type: 'weather_alert',
        eventId: 'evt_002',
        eventName: 'Brooklyn Bridge Cycling',
        message: 'Weather update: Light rain expected. Event still on with modified route.',
        timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
        severity: 'warning',
        actionRequired: true,
        location: 'Brooklyn Bridge',
        startTime: new Date(Date.now() + 2 * 60 * 60 * 1000) // 2 hours from now
      },
      {
        id: '3',
        type: 'last_chance',
        eventId: 'evt_003',
        eventName: 'Outdoor Yoga Session',
        message: 'Only 3 spots left! Register now or miss out.',
        timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
        severity: 'urgent',
        actionRequired: true,
        location: 'Bryant Park',
        startTime: new Date(Date.now() + 24 * 60 * 60 * 1000) // Tomorrow
      }
    ];

    setUpdates(mockUpdates);
    setUnreadCount(mockUpdates.length);

    // Simulate receiving new updates
    const interval = setInterval(() => {
      const newUpdate: EventUpdate = {
        id: `update_${Date.now()}`,
        type: 'registration_open',
        eventId: 'evt_new',
        eventName: 'Morning HIIT Class',
        message: 'New event added! Join our high-intensity workout.',
        timestamp: new Date(),
        severity: 'info',
        location: 'Fitness Studio NYC'
      };

      setUpdates(prev => [newUpdate, ...prev.slice(0, 9)]); // Keep only 10 latest
      setUnreadCount(prev => prev + 1);
    }, 60000); // New update every minute

    return () => clearInterval(interval);
  }, []);

  const getUpdateIcon = (type: string, severity: string) => {
    switch (type) {
      case 'registration_open':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'weather_alert':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'last_chance':
        return <Clock className="w-4 h-4 text-orange-500" />;
      case 'event_full':
        return <Users className="w-4 h-4 text-blue-500" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Bell className="w-4 h-4 text-slate-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'urgent':
        return 'border-l-red-500 bg-red-50';
      case 'warning':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'info':
        return 'border-l-blue-500 bg-blue-50';
      default:
        return 'border-l-slate-500 bg-slate-50';
    }
  };

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  const handleUpdateClick = (update: EventUpdate) => {
    onNavigate('EventDetail', { id: update.eventId, name: update.eventName });
  };

  const markAllAsRead = () => {
    setUnreadCount(0);
  };

  if (updates.length === 0) {
    return null;
  }

  return (
    <Card className="glass-bg border-0 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-indigo-600" />
          <CardTitle>Live Updates</CardTitle>
          {unreadCount > 0 && (
            <Badge className="bg-red-100 text-red-800 text-xs">
              {unreadCount} new
            </Badge>
          )}
        </div>
        {unreadCount > 0 && (
          <Button variant="ghost" size="sm" onClick={markAllAsRead}>
            Mark all read
          </Button>
        )}
      </CardHeader>

      <CardContent className="space-y-3">
        {updates.slice(0, 5).map((update) => (
          <div
            key={update.id}
            onClick={() => handleUpdateClick(update)}
            className={`p-3 rounded-lg border-l-4 cursor-pointer transition-all hover:shadow-sm ${getSeverityColor(update.severity)}`}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                {getUpdateIcon(update.type, update.severity)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-semibold text-slate-900 text-sm truncate">
                    {update.eventName}
                  </h3>
                  <span className="text-xs text-slate-500 ml-2 flex-shrink-0">
                    {formatTimeAgo(update.timestamp)}
                  </span>
                </div>
                
                <p className="text-sm text-slate-700 mb-2">{update.message}</p>
                
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  {update.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{update.location}</span>
                    </div>
                  )}
                  
                  {update.startTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>
                        {update.startTime.toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          hour: 'numeric',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                  )}
                </div>

                {update.actionRequired && (
                  <div className="mt-2">
                    <Button size="sm" variant="outline" className="text-xs h-6">
                      Take Action
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {updates.length > 5 && (
          <Button
            variant="ghost"
            className="w-full text-sm"
            onClick={() => onNavigate('FitnessEvents')}
          >
            View All Updates ({updates.length})
          </Button>
        )}
      </CardContent>
    </Card>
  );
}