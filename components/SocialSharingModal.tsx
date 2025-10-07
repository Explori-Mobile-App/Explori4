import { useState } from 'react';
import { X, Share2, Camera, MapPin, Clock, Zap, Trophy, Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { useCapacitor } from '../hooks/useCapacitor';

interface SocialSharingModalProps {
  isOpen: boolean;
  onClose: () => void;
  workoutData?: {
    type: string;
    duration: number;
    distance?: number;
    calories: number;
    location: string;
    route?: string;
    achievements?: string[];
  };
  achievement?: {
    title: string;
    description: string;
    icon: string;
  };
}

export default function SocialSharingModal({ 
  isOpen, 
  onClose, 
  workoutData, 
  achievement 
}: SocialSharingModalProps) {
  const [caption, setCaption] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const { triggerHaptic } = useCapacitor();

  if (!isOpen) return null;

  const shareToSocial = (platform: string) => {
    triggerHaptic('light');
    
    const baseText = workoutData 
      ? `Just completed a ${workoutData.type} workout! 🏃‍♂️\n${workoutData.duration} min • ${workoutData.calories} calories${workoutData.distance ? ` • ${workoutData.distance} km` : ''}\n📍 ${workoutData.location}\n\n${caption}`
      : `New achievement unlocked! ${achievement?.icon} ${achievement?.title}\n${achievement?.description}\n\n${caption}`;

    const hashtags = '\n\n#explori #fitness #workout #travel #adventure';
    const fullText = baseText + hashtags;

    switch (platform) {
      case 'instagram':
        // Would open Instagram with pre-filled content
        console.log('Share to Instagram:', fullText);
        break;
      case 'twitter':
        // Would open Twitter with pre-filled content
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullText)}`;
        window.open(twitterUrl, '_blank');
        break;
      case 'facebook':
        // Would open Facebook with pre-filled content
        console.log('Share to Facebook:', fullText);
        break;
      case 'strava':
        // Would open Strava or redirect to connect
        console.log('Share to Strava:', workoutData);
        break;
      case 'copy':
        navigator.clipboard.writeText(fullText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  const socialPlatforms = [
    { id: 'instagram', name: 'Instagram', icon: '📷', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { id: 'twitter', name: 'Twitter', icon: '🐦', color: 'bg-blue-500' },
    { id: 'facebook', name: 'Facebook', icon: '👥', color: 'bg-blue-600' },
    { id: 'strava', name: 'Strava', icon: '🟠', color: 'bg-orange-500' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md glass-bg border-0 shadow-2xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-indigo-600" />
            Share Your {workoutData ? 'Workout' : 'Achievement'}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Workout/Achievement Preview */}
          <div className="bg-white/50 rounded-xl p-4">
            {workoutData ? (
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{workoutData.type}</h3>
                    <div className="flex items-center gap-1 text-sm text-slate-600">
                      <MapPin className="w-3 h-3" />
                      <span>{workoutData.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-lg font-bold text-indigo-600">{workoutData.duration}</p>
                    <p className="text-xs text-slate-600">Minutes</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-orange-600">{workoutData.calories}</p>
                    <p className="text-xs text-slate-600">Calories</p>
                  </div>
                  {workoutData.distance && (
                    <div>
                      <p className="text-lg font-bold text-green-600">{workoutData.distance}</p>
                      <p className="text-xs text-slate-600">km</p>
                    </div>
                  )}
                </div>

                {workoutData.achievements && workoutData.achievements.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-slate-200/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium text-slate-700">New Achievements!</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {workoutData.achievements.map((achievement, index) => (
                        <Badge key={index} className="bg-yellow-100 text-yellow-800">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              achievement && (
                <div className="text-center">
                  <div className="text-6xl mb-3">{achievement.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-slate-600">{achievement.description}</p>
                </div>
              )
            )}
          </div>

          {/* Caption Input */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Add a caption
            </label>
            <Textarea
              placeholder="Share your experience..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="bg-white/50 border-slate-200/50"
              rows={3}
            />
          </div>

          {/* Social Platform Buttons */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">
              Share to
            </label>
            <div className="grid grid-cols-2 gap-3">
              {socialPlatforms.map((platform) => (
                <Button
                  key={platform.id}
                  onClick={() => shareToSocial(platform.id)}
                  className={`${platform.color} text-white h-12 flex items-center gap-3`}
                >
                  <span className="text-lg">{platform.icon}</span>
                  <span>{platform.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Copy Link */}
          <div className="pt-4 border-t border-slate-200/50">
            <Button
              onClick={() => shareToSocial('copy')}
              variant="outline"
              className="w-full flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy to Clipboard</span>
                </>
              )}
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={() => {
                triggerHaptic('medium');
                // Would trigger native share functionality
                if (navigator.share && workoutData) {
                  navigator.share({
                    title: `${workoutData.type} Workout`,
                    text: `Just completed a ${workoutData.type} workout on Explori!`,
                    url: window.location.href
                  });
                }
                onClose();
              }}
              className="flex-1 gradient-primary text-white"
            >
              <Camera className="w-4 h-4 mr-2" />
              Share Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}