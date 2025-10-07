import { Settings, Edit, Share, MapPin, Calendar, Users, Trophy } from 'lucide-react';
import { Button } from '../ui/button';
import { BottomNavigation } from '../BottomNavigation';
import { Page } from '../Router';

interface ProfilePageProps {
  onNavigate: (page: Page, data?: any) => void;
}

export default function ProfilePage({ onNavigate }: ProfilePageProps) {
  const stats = [
    { label: "Places Visited", value: 42, icon: MapPin },
    { label: "Events Joined", value: 15, icon: Calendar },
    { label: "Connections", value: 128, icon: Users },
    { label: "Reviews", value: 23, icon: Trophy }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#fdfcfb]" data-bravo="[container]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] p-6 pt-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-2xl font-medium text-white mb-1" data-bravo="[text]">Alex Thompson</h1>
            <p className="text-white/90 text-sm" data-bravo="[text]">Adventure Enthusiast • San Francisco</p>
          </div>
          <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30" data-bravo="[button]">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl">
            👤
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 bg-white/20 border-white/30 text-white hover:bg-white/30" data-bravo="[button]">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
          <Button variant="outline" className="flex-1 bg-white/20 border-white/30 text-white hover:bg-white/30" data-bravo="[button]">
            <Share className="w-4 h-4 mr-2" />
            Share Profile
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="p-6">
        <h3 className="font-medium text-[#1f2937] mb-4" data-bravo="[text]">My Activity</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-4 border border-[#e5e7eb] text-center" data-bravo="[container]">
                <IconComponent className="w-6 h-6 text-[#ff6b35] mx-auto mb-2" />
                <p className="text-2xl font-medium text-[#1f2937] mb-1" data-bravo="[text]">{stat.value}</p>
                <p className="text-xs text-[#64748b]" data-bravo="[text]">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Bio */}
        <div className="bg-white rounded-xl p-4 border border-[#e5e7eb] mb-6">
          <h4 className="font-medium text-[#1f2937] mb-2" data-bravo="[text]">About Me</h4>
          <p className="text-sm text-[#64748b] leading-relaxed" data-bravo="[text]">
            Travel enthusiast and foodie exploring the world one adventure at a time. 
            Love discovering hidden gems and connecting with fellow travelers. Always up for trying new cuisines and outdoor activities!
          </p>
        </div>

        {/* Interests */}
        <div className="bg-white rounded-xl p-4 border border-[#e5e7eb] mb-6">
          <h4 className="font-medium text-[#1f2937] mb-3" data-bravo="[text]">Interests</h4>
          <div className="flex flex-wrap gap-2">
            {['🍽️ Fine Dining', '🏃 Fitness', '🎨 Art & Culture', '🌊 Beach', '🏔️ Hiking', '📸 Photography'].map((interest, index) => (
              <span key={index} className="px-3 py-1 bg-[#f8f9fa] rounded-full text-sm text-[#64748b]" data-bravo="[text]">
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-4 border border-[#e5e7eb]">
          <h4 className="font-medium text-[#1f2937] mb-3" data-bravo="[text]">Recent Activity</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-lg">🍽️</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1f2937]" data-bravo="[text]">Visited Coastal Café</p>
                <p className="text-xs text-[#64748b]" data-bravo="[text]">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-lg">🏃</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1f2937]" data-bravo="[text]">Joined City Marathon 2025</p>
                <p className="text-xs text-[#64748b]" data-bravo="[text]">1 week ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-lg">⭐</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1f2937]" data-bravo="[text]">Reviewed Mountain View Hotel</p>
                <p className="text-xs text-[#64748b]" data-bravo="[text]">2 weeks ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation currentPage="Profile" onNavigate={onNavigate} />
    </div>
  );
}