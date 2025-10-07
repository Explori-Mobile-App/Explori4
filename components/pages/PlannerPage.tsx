import { Plus, Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { BottomNavigation } from '../BottomNavigation';
import { Page } from '../Router';

interface PlannerPageProps {
  onNavigate: (page: Page, data?: any) => void;
}

export default function PlannerPage({ onNavigate }: PlannerPageProps) {
  const plans = [
    {
      title: "Weekend Adventure",
      date: "March 15-16",
      activities: 4,
      people: 3,
      status: "Planning"
    },
    {
      title: "Food Tour Downtown",
      date: "March 22",
      activities: 6,
      people: 2,
      status: "Ready"
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#fdfcfb]" data-bravo="[container]">
      {/* Header */}
      <div className="bg-white border-b border-[#e5e7eb] p-4 pt-12">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-medium text-[#1f2937]" data-bravo="[text]">My Plans</h1>
          <Button size="sm" className="bg-[#ff6b35] hover:bg-[#e55a2b]" data-bravo="[button]">
            <Plus className="w-4 h-4 mr-2" />
            New Plan
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        {plans.length > 0 ? (
          <div className="space-y-4">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-[#e5e7eb]" data-bravo="[container]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-medium text-[#1f2937] mb-1" data-bravo="[text]">{plan.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-[#64748b]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span data-bravo="[text]">{plan.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span data-bravo="[text]">{plan.activities} activities</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span data-bravo="[text]">{plan.people} people</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    plan.status === 'Ready' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`} data-bravo="[text]">
                    {plan.status}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" data-bravo="[button]">
                    Edit Plan
                  </Button>
                  <Button size="sm" className="flex-1 bg-[#ff6b35] hover:bg-[#e55a2b]" data-bravo="[button]">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="font-medium text-[#1f2937] mb-2" data-bravo="[text]">No plans yet</h3>
            <p className="text-[#64748b] mb-6" data-bravo="[text]">Start planning your next adventure!</p>
            <Button className="bg-[#ff6b35] hover:bg-[#e55a2b]" data-bravo="[button]">
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Plan
            </Button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation currentPage="Planner" onNavigate={onNavigate} />
    </div>
  );
}