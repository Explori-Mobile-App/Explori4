import { useState } from 'react';
import { X, Filter, MapPin, Calendar, Users, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'motion/react';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFilters: {
    categories: string[];
    difficulty: string[];
    price: string[];
    location: string[];
  };
  onFiltersChange: (filters: any) => void;
}

export function FilterDrawer({ isOpen, onClose, selectedFilters, onFiltersChange }: FilterDrawerProps) {
  const [tempFilters, setTempFilters] = useState(selectedFilters);

  const categories = [
    { id: 'fitness', label: 'Fitness', icon: '💪', color: 'bg-emerald-100 text-emerald-700' },
    { id: 'yoga', label: 'Yoga', icon: '🧘‍♀️', color: 'bg-purple-100 text-purple-700' },
    { id: 'running', label: 'Running', icon: '🏃‍♂️', color: 'bg-blue-100 text-blue-700' },
    { id: 'food', label: 'Food', icon: '🍴', color: 'bg-orange-100 text-orange-700' },
    { id: 'cultural', label: 'Cultural', icon: '🎭', color: 'bg-pink-100 text-pink-700' },
    { id: 'adventure', label: 'Adventure', icon: '🏔️', color: 'bg-green-100 text-green-700' },
    { id: 'nightlife', label: 'Nightlife', icon: '🌙', color: 'bg-indigo-100 text-indigo-700' },
    { id: 'art', label: 'Art', icon: '🎨', color: 'bg-red-100 text-red-700' }
  ];

  const difficulties = [
    { id: 'beginner', label: 'Beginner', color: 'bg-green-100 text-green-700' },
    { id: 'intermediate', label: 'Intermediate', color: 'bg-yellow-100 text-yellow-700' },
    { id: 'advanced', label: 'Advanced', color: 'bg-red-100 text-red-700' }
  ];

  const priceRanges = [
    { id: 'free', label: 'Free', color: 'bg-emerald-100 text-emerald-700' },
    { id: 'low', label: '$1-25', color: 'bg-blue-100 text-blue-700' },
    { id: 'medium', label: '$26-75', color: 'bg-orange-100 text-orange-700' },
    { id: 'high', label: '$76+', color: 'bg-red-100 text-red-700' }
  ];

  const locations = [
    { id: 'nearby', label: 'Nearby', icon: '📍' },
    { id: 'downtown', label: 'Downtown', icon: '🏙️' },
    { id: 'beach', label: 'Beach', icon: '🏖️' },
    { id: 'park', label: 'Park', icon: '🌳' },
    { id: 'indoor', label: 'Indoor', icon: '🏢' },
    { id: 'outdoor', label: 'Outdoor', icon: '🌤️' }
  ];

  const toggleFilter = (filterType: string, value: string) => {
    setTempFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType as keyof typeof prev].includes(value)
        ? prev[filterType as keyof typeof prev].filter(item => item !== value)
        : [...prev[filterType as keyof typeof prev], value]
    }));
  };

  const applyFilters = () => {
    onFiltersChange(tempFilters);
    onClose();
  };

  const clearFilters = () => {
    const emptyFilters = {
      categories: [],
      difficulty: [],
      price: [],
      location: []
    };
    setTempFilters(emptyFilters);
    onFiltersChange(emptyFilters);
  };

  const getActiveFiltersCount = () => {
    return Object.values(tempFilters).flat().length;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Filter className="w-5 h-5 text-slate-600" />
                  <h2 className="text-lg font-semibold text-slate-900">Filters</h2>
                  {getActiveFiltersCount() > 0 && (
                    <Badge className="bg-indigo-100 text-indigo-700">
                      {getActiveFiltersCount()}
                    </Badge>
                  )}
                </div>
                <Button variant="ghost" size="sm" onClick={onClose}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-lg">🎯</span>
                  Categories
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map(category => (
                    <motion.button
                      key={category.id}
                      className={`p-3 rounded-xl border-2 transition-all text-sm flex items-center gap-2 ${
                        tempFilters.categories.includes(category.id)
                          ? `${category.color} border-current shadow-md`
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                      onClick={() => toggleFilter('categories', category.id)}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{category.icon}</span>
                      <span className="font-medium">{category.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Difficulty
                </h3>
                <div className="flex gap-3">
                  {difficulties.map(difficulty => (
                    <motion.button
                      key={difficulty.id}
                      className={`flex-1 p-3 rounded-xl border-2 transition-all text-sm font-medium ${
                        tempFilters.difficulty.includes(difficulty.id)
                          ? `${difficulty.color} border-current shadow-md`
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                      onClick={() => toggleFilter('difficulty', difficulty.id)}
                      whileTap={{ scale: 0.95 }}
                    >
                      {difficulty.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-lg">💰</span>
                  Price Range
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {priceRanges.map(price => (
                    <motion.button
                      key={price.id}
                      className={`p-3 rounded-xl border-2 transition-all text-sm font-medium ${
                        tempFilters.price.includes(price.id)
                          ? `${price.color} border-current shadow-md`
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                      onClick={() => toggleFilter('price', price.id)}
                      whileTap={{ scale: 0.95 }}
                    >
                      {price.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Location
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {locations.map(location => (
                    <motion.button
                      key={location.id}
                      className={`p-3 rounded-xl border-2 transition-all text-sm flex items-center gap-2 ${
                        tempFilters.location.includes(location.id)
                          ? 'bg-indigo-100 text-indigo-700 border-indigo-200 shadow-md'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                      onClick={() => toggleFilter('location', location.id)}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{location.icon}</span>
                      <span className="font-medium">{location.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-slate-200 p-6">
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl"
                  onClick={clearFilters}
                >
                  Clear All
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl"
                  onClick={applyFilters}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}