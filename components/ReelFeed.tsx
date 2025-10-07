import { useState, useEffect, useRef } from 'react';
import { ReelCard } from './ReelCard';
import { FilterDrawer } from './FilterDrawer';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Filter, UserPlus, Sparkles, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from './Router';

interface ReelFeedProps {
  onNavigate: (page: Page, data?: any) => void;
  isSignedIn?: boolean;
}

export function ReelFeed({ onNavigate, isSignedIn = false }: ReelFeedProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [likedEvents, setLikedEvents] = useState<Set<string | number>>(new Set());
  const [savedEvents, setSavedEvents] = useState<Set<string | number>>(new Set());
  const [filters, setFilters] = useState({
    categories: [],
    difficulty: [],
    price: [],
    location: []
  });
  const [activeTab, setActiveTab] = useState<'discover' | 'foryou'>('discover');
  
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number>(0);
  const isScrolling = useRef<boolean>(false);

  // Mock data combining fitness and regular events
  const allEvents = [
    {
      id: 1,
      title: "Beach Yoga Sunrise",
      location: "Santa Monica Beach",
      date: "Tomorrow, 6:30 AM",
      participants: 28,
      price: "Free",
      category: "Yoga",
      rating: 4.8,
      image: "🧘‍♀️",
      backgroundImage: "https://images.unsplash.com/photo-1585059896947-f99dd6c80101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHlvZ2ElMjBzdW5yaXNlJTIwcGVvcGxlfGVufDF8fHx8MTc1OTQzMjMwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Start your day with peaceful yoga as the sun rises over the Pacific Ocean. Perfect for all skill levels.",
      difficulty: "Beginner",
      type: 'fitness' as const,
      videoUrl: undefined
    },
    {
      id: 2,
      title: "City Running Club",
      location: "Central Park",
      date: "Today, 7:00 PM",
      participants: 45,
      price: "$15",
      category: "Running",
      rating: 4.9,
      image: "🏃‍♂️",
      backgroundImage: "https://images.unsplash.com/photo-1628521359469-a099ce320f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwcnVubmluZyUyMGdyb3VwJTIwcGVvcGxlfGVufDF8fHx8MTc1OTQzMjMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Join local runners for a scenic 5K through the heart of the city. Make new friends while staying fit!",
      difficulty: "Intermediate",
      type: 'fitness' as const,
      videoUrl: undefined
    },
    {
      id: 3,
      title: "Spring Food Festival",
      location: "Downtown Plaza",
      date: "April 8–10",
      attendees: "1,200 joining",
      price: "$25 entry",
      category: "Food",
      rating: 4.7,
      image: "🍴",
      backgroundImage: "https://images.unsplash.com/photo-1683731509782-22668b4ba48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZmVzdGl2YWwlMjBzdHJlZXQlMjBmb29kfGVufDF8fHx8MTc1OTQzMjMxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Discover amazing local cuisine and street food from around the world. Three days of culinary heaven!",
      type: 'event' as const,
      videoUrl: undefined
    },
    {
      id: 4,
      title: "Outdoor Bootcamp",
      location: "Griffith Park",
      date: "Sat, 8:00 AM",
      participants: 22,
      price: "$25",
      category: "HIIT",
      rating: 4.6,
      image: "💪",
      backgroundImage: "https://images.unsplash.com/photo-1561579890-3ace74d8e378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYm9vdGNhbXAlMjBmaXRuZXNzfGVufDF8fHx8MTc1OTQzMjMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "High-intensity workout with stunning city views. Push your limits with our expert trainers!",
      difficulty: "Advanced",
      type: 'fitness' as const,
      videoUrl: undefined
    },
    {
      id: 5,
      title: "Sunset Beach Volleyball",
      location: "Venice Beach",
      date: "Tonight, 6 PM",
      attendees: "16 joining",
      price: "Free",
      category: "Sports",
      rating: 4.5,
      image: "🏐",
      backgroundImage: "https://images.unsplash.com/photo-1658213282959-33e255d9cae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHZvbGxleWJhbGwlMjBzdW5zZXR8ZW58MXx8fHwxNzU5NDMyMzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Casual beach volleyball as the sun sets. Great vibes, friendly competition, and new connections!",
      type: 'event' as const,
      videoUrl: undefined
    },
    {
      id: 6,
      title: "Meditation & Mindfulness",
      location: "Botanical Garden",
      date: "Sun, 9:00 AM",
      participants: 35,
      price: "$20",
      category: "Wellness",
      rating: 4.9,
      image: "🌸",
      backgroundImage: "https://images.unsplash.com/photo-1610953233014-c1824324d3a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwZ2FyZGVuJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzU5NDMyMzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Find inner peace surrounded by nature. Guided meditation session in beautiful garden setting.",
      difficulty: "Beginner",
      type: 'fitness' as const,
      videoUrl: undefined
    }
  ];

  const [filteredEvents, setFilteredEvents] = useState(allEvents);

  // Filter events based on selected filters
  useEffect(() => {
    let filtered = allEvents;
    
    if (filters.categories.length > 0) {
      filtered = filtered.filter(event => 
        filters.categories.some(cat => 
          event.category.toLowerCase().includes(cat.toLowerCase())
        )
      );
    }
    
    setFilteredEvents(filtered);
  }, [filters]);

  const handleScroll = (direction: 'up' | 'down') => {
    if (isScrolling.current) return;
    
    isScrolling.current = true;
    
    if (direction === 'down' && currentIndex < filteredEvents.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (direction === 'up' && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
    
    setTimeout(() => {
      isScrolling.current = false;
    }, 300);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      handleScroll('down');
    } else {
      handleScroll('up');
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleScroll('down');
      } else {
        handleScroll('up');
      }
    }
  };

  const handleRSVP = (eventId: string | number) => {
    if (!isSignedIn) {
      // Show sign up prompt
      onNavigate('Onboarding');
      return;
    }
    // Handle RSVP logic
    console.log('RSVP for event:', eventId);
  };

  const handleLike = (eventId: string | number) => {
    if (!isSignedIn) {
      onNavigate('Onboarding');
      return;
    }
    setLikedEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  const handleSave = (eventId: string | number) => {
    if (!isSignedIn) {
      onNavigate('Onboarding');
      return;
    }
    setSavedEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  const handleShare = (eventId: string | number) => {
    // Share doesn't require sign in
    console.log('Share event:', eventId);
    // Here you would implement sharing logic
  };

  const handleViewDetails = (event: any) => {
    onNavigate('EventDetail', event);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 right-0 z-30 p-4">
        <div className="flex items-center justify-between">
          {/* Tab Switcher */}
          <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-2xl p-1">
            <button
              onClick={() => setActiveTab('discover')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'discover'
                  ? 'bg-white text-slate-900'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <TrendingUp className="w-4 h-4 inline mr-1" />
              Discover
            </button>
            {isSignedIn && (
              <button
                onClick={() => setActiveTab('foryou')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === 'foryou'
                    ? 'bg-white text-slate-900'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Sparkles className="w-4 h-4 inline mr-1" />
                For You
              </button>
            )}
          </div>

          {/* Filter Button */}
          <Button
            variant="ghost"
            size="sm"
            className="bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 rounded-2xl"
            onClick={() => setShowFilters(true)}
          >
            <Filter className="w-4 h-4 mr-1" />
            Filters
            {Object.values(filters).flat().length > 0 && (
              <Badge className="ml-2 bg-indigo-500 text-white scale-75">
                {Object.values(filters).flat().length}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      {/* Reel Cards Container */}
      <div
        ref={containerRef}
        className="w-full h-full relative"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="absolute inset-0 p-4"
              initial={{ 
                y: index > currentIndex ? '100%' : index < currentIndex ? '-100%' : 0,
                opacity: index === currentIndex ? 1 : 0 
              }}
              animate={{ 
                y: index > currentIndex ? '100%' : index < currentIndex ? '-100%' : 0,
                opacity: index === currentIndex ? 1 : 0 
              }}
              exit={{ 
                y: index > currentIndex ? '100%' : '-100%',
                opacity: 0 
              }}
              transition={{ 
                type: 'spring',
                damping: 20,
                stiffness: 300,
              }}
              style={{ zIndex: index === currentIndex ? 20 : 10 }}
            >
              <ReelCard
                event={event}
                isActive={index === currentIndex}
                onRSVP={handleRSVP}
                onLike={handleLike}
                onSave={handleSave}
                onShare={handleShare}
                onViewDetails={handleViewDetails}
                isLiked={likedEvents.has(event.id)}
                isSaved={savedEvents.has(event.id)}
                likesCount={Math.floor(Math.random() * 100) + 10}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Floating Sign Up Button */}
      {!isSignedIn && (
        <motion.div
          className="absolute bottom-6 left-4 right-4 z-30"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 rounded-2xl shadow-lg backdrop-blur-sm"
            onClick={() => onNavigate('Onboarding')}
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Sign Up to Join Events
          </Button>
        </motion.div>
      )}

      {/* Progress Indicator */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 space-y-2">
        {filteredEvents.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-8 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white shadow-lg'
                : index < currentIndex
                ? 'bg-white/60'
                : 'bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* Filter Drawer */}
      <FilterDrawer
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
        selectedFilters={filters}
        onFiltersChange={setFilters}
      />
    </div>
  );
}