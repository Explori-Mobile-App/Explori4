import { useState } from 'react';
import { ChevronRight, Target, MapPin, Trophy, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { Page } from '../Router';

interface OnboardingPageProps {
  onNavigate: (page: Page, data?: any) => void;
}

export default function OnboardingPage({ onNavigate }: OnboardingPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [preferences, setPreferences] = useState({
    fitnessLevel: '',
    interests: [] as string[],
    goals: [] as string[],
    location: ''
  });

  const steps = [
    {
      title: "Welcome to Explori Fitness",
      subtitle: "Discover local fitness experiences while you travel",
      content: (
        <div className="text-center space-y-6">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
            <Target className="w-16 h-16 text-white" />
          </div>
          <p className="text-slate-600">
            Find running routes, fitness events, and wellness activities wherever your journey takes you.
          </p>
        </div>
      )
    },
    {
      title: "What's your fitness level?",
      subtitle: "Help us personalize your experience",
      content: (
        <div className="space-y-4">
          {['Beginner', 'Intermediate', 'Advanced', 'Professional'].map((level) => (
            <button
              key={level}
              onClick={() => setPreferences({...preferences, fitnessLevel: level})}
              className={`w-full p-4 rounded-xl border-2 transition-all ${
                preferences.fitnessLevel === level
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{level}</span>
                {preferences.fitnessLevel === level && (
                  <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "What interests you?",
      subtitle: "Select all that apply",
      content: (
        <div className="grid grid-cols-2 gap-3">
          {[
            'Running', 'Cycling', 'Hiking', 'Yoga',
            'Swimming', 'Gym Workouts', 'Group Classes', 'Wellness'
          ].map((interest) => (
            <button
              key={interest}
              onClick={() => {
                const newInterests = preferences.interests.includes(interest)
                  ? preferences.interests.filter(i => i !== interest)
                  : [...preferences.interests, interest];
                setPreferences({...preferences, interests: newInterests});
              }}
              className={`p-3 rounded-xl border-2 transition-all ${
                preferences.interests.includes(interest)
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="font-medium text-sm">{interest}</span>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Your fitness goals",
      subtitle: "What do you want to achieve?",
      content: (
        <div className="space-y-3">
          {[
            'Stay active while traveling',
            'Explore new places through fitness',
            'Meet fellow fitness enthusiasts',
            'Try local fitness activities',
            'Maintain workout routine'
          ].map((goal) => (
            <button
              key={goal}
              onClick={() => {
                const newGoals = preferences.goals.includes(goal)
                  ? preferences.goals.filter(g => g !== goal)
                  : [...preferences.goals, goal];
                setPreferences({...preferences, goals: newGoals});
              }}
              className={`w-full p-3 rounded-xl border-2 transition-all text-left ${
                preferences.goals.includes(goal)
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="font-medium text-sm">{goal}</span>
            </button>
          ))}
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      localStorage.setItem('explori_fitness_onboarding', JSON.stringify(preferences));
      onNavigate('Home');
    }
  };

  const handleSkip = () => {
    onNavigate('Home');
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-md mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-slate-600 mb-2">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <button onClick={handleSkip} className="text-indigo-600 hover:text-indigo-700">
              Skip
            </button>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl mb-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              {steps[currentStep].title}
            </h1>
            <p className="text-slate-600">
              {steps[currentStep].subtitle}
            </p>
          </div>

          {steps[currentStep].content}
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          {currentStep > 0 && (
            <Button
              variant="outline"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="flex-1"
            >
              Back
            </Button>
          )}
          <Button
            onClick={handleNext}
            className="flex-1 gradient-primary text-white"
            disabled={
              (currentStep === 1 && !preferences.fitnessLevel) ||
              (currentStep === 2 && preferences.interests.length === 0) ||
              (currentStep === 3 && preferences.goals.length === 0)
            }
          >
            {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}