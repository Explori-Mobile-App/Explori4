import { useState } from 'react';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import PlannerPage from './pages/PlannerPage';
import SavedPage from './pages/SavedPage';
import ProfilePage from './pages/ProfilePage';
import AddPostPage from './pages/AddPostPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import EventDetailPage from './pages/EventDetailPage';
import BookingPage from './pages/BookingPage';
import FitnessEventsPage from './pages/FitnessEventsPage';
import OnboardingPage from './pages/OnboardingPage';

export type Page = 'Home' | 'Map' | 'AddPost' | 'Planner' | 'Saved' | 'Profile' | 'PlaceDetail' | 'EventDetail' | 'Booking' | 'FitnessEvents' | 'Onboarding';

interface RouterProps {
  currentPage: Page;
  onNavigate: (page: Page, data?: any) => void;
  pageData?: any;
}

export function Router({ currentPage, onNavigate, pageData }: RouterProps) {
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage onNavigate={onNavigate} />;
      case 'Map':
        return <MapPage onNavigate={onNavigate} />;
      case 'AddPost':
        return <AddPostPage onNavigate={onNavigate} />;
      case 'Planner':
        return <PlannerPage onNavigate={onNavigate} />;
      case 'Saved':
        return <SavedPage onNavigate={onNavigate} />;
      case 'Profile':
        return <ProfilePage onNavigate={onNavigate} />;
      case 'PlaceDetail':
        return <PlaceDetailPage onNavigate={onNavigate} place={pageData} />;
      case 'EventDetail':
        return <EventDetailPage onNavigate={onNavigate} event={pageData} />;
      case 'Booking':
        return <BookingPage onNavigate={onNavigate} bookingData={pageData} />;
      case 'FitnessEvents':
        return <FitnessEventsPage onNavigate={onNavigate} />;
      case 'Onboarding':
        return <OnboardingPage onNavigate={onNavigate} />;
      default:
        return <HomePage onNavigate={onNavigate} />;
    }
  };

  return <>{renderPage()}</>;
}