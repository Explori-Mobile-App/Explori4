import { useState, useEffect } from 'react';
import { Heart, Bookmark, Share2, Calendar, MapPin, Users, Star, Play, Pause } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ReelCardProps {
  event: {
    id: string | number;
    title: string;
    location: string;
    date: string;
    participants?: number;
    attendees?: string;
    price: string;
    category: string;
    rating?: number;
    image?: string;
    backgroundImage?: string;
    videoUrl?: string;
    description: string;
    difficulty?: string;
    type: 'fitness' | 'event';
  };
  isActive: boolean;
  onRSVP: (eventId: string | number) => void;
  onLike: (eventId: string | number) => void;
  onSave: (eventId: string | number) => void;
  onShare: (eventId: string | number) => void;
  onViewDetails: (event: any) => void;
  isLiked: boolean;
  isSaved: boolean;
  likesCount: number;
}

export function ReelCard({ 
  event, 
  isActive, 
  onRSVP, 
  onLike, 
  onSave, 
  onShare, 
  onViewDetails,
  isLiked,
  isSaved,
  likesCount
}: ReelCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsPlaying(true);
      // Auto-hide controls after 3 seconds
      const timer = setTimeout(() => setShowControls(false), 3000);
      return () => clearTimeout(timer);
    } else {
      setIsPlaying(false);
    }
  }, [isActive]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    setShowControls(true);
  };

  const participantCount = event.participants || parseInt(event.attendees?.replace(/\D/g, '') || '0');

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-300';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300';
      case 'Advanced': return 'bg-red-500/20 text-red-300';
      default: return 'bg-blue-500/20 text-blue-300';
    }
  };

  return (
    <motion.div 
      className="relative w-full h-full bg-black/90 rounded-3xl overflow-hidden group"
      whileInView={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        {event.videoUrl ? (
          <video
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            autoPlay={isPlaying}
          >
            <source src={event.videoUrl} type="video/mp4" />
          </video>
        ) : event.backgroundImage ? (
          <ImageWithFallback
            src={event.backgroundImage}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/30 rounded-full animate-pulse"></div>
              <div className="absolute top-32 right-16 w-14 h-14 bg-white/20 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-24 left-20 w-16 h-16 bg-white/25 rounded-full animate-pulse delay-500"></div>
            </div>
            
            {/* Large emoji/icon display */}
            <div className="absolute inset-0 flex items-center justify-center">
              {event.image && (
                <div className="text-8xl opacity-40 animate-pulse">
                  {event.image}
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      {/* Play/Pause Button */}
      {event.videoUrl && (
        <motion.button
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-opacity duration-300 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handlePlayPause}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 text-white" />
          ) : (
            <Play className="w-8 h-8 text-white ml-1" />
          )}
        </motion.button>
      )}

      {/* Top Content - Category and Price */}
      <div className="absolute top-6 left-6 right-6 flex items-start justify-between z-10">
        <div className="flex flex-col gap-2">
          <Badge className="w-fit bg-white/20 backdrop-blur-sm text-white border-white/30">
            {event.category}
          </Badge>
          {event.difficulty && (
            <Badge className={`w-fit ${getDifficultyColor(event.difficulty)} backdrop-blur-sm border-0`}>
              {event.difficulty}
            </Badge>
          )}
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <Badge className="bg-gradient-to-r from-indigo-500/80 to-purple-500/80 backdrop-blur-sm text-white border-0">
            {event.price}
          </Badge>
          {event.rating && (
            <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-white">{event.rating}</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="space-y-4">
          {/* Event Info */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white leading-tight">
              {event.title}
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-wrap gap-4 text-sm text-white/80">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{participantCount} joining</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-2">
            <Button
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 rounded-2xl shadow-lg"
              onClick={() => onRSVP(event.id)}
            >
              RSVP Now
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 rounded-2xl ml-2"
              onClick={() => onViewDetails(event)}
            >
              Details
            </Button>
          </div>
        </div>
      </div>

      {/* Side Action Buttons */}
      <div className="absolute right-4 bottom-32 flex flex-col gap-4 z-10">
        <motion.button
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          onClick={() => onLike(event.id)}
          whileTap={{ scale: 0.9 }}
        >
          <Heart className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
        </motion.button>
        
        {likesCount > 0 && (
          <span className="text-xs text-white text-center -mt-2">{likesCount}</span>
        )}

        <motion.button
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          onClick={() => onSave(event.id)}
          whileTap={{ scale: 0.9 }}
        >
          <Bookmark className={`w-6 h-6 ${isSaved ? 'fill-white' : ''} text-white`} />
        </motion.button>

        <motion.button
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          onClick={() => onShare(event.id)}
          whileTap={{ scale: 0.9 }}
        >
          <Share2 className="w-6 h-6 text-white" />
        </motion.button>
      </div>
    </motion.div>
  );
}