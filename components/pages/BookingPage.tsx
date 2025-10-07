import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Users, CreditCard } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Page } from '../Router';
import { toast } from 'sonner@2.0.3';

interface BookingPageProps {
  onNavigate: (page: Page, data?: any) => void;
  bookingData: any;
}

export default function BookingPage({ onNavigate, bookingData }: BookingPageProps) {
  const isPlace = bookingData?.type === 'place';
  const item = bookingData?.item || {};
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    attendees: '',
    experience: '',
    notes: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    
    if (isPlace) {
      if (!formData.date) newErrors.date = 'Date is required';
      if (!formData.time) newErrors.time = 'Time is required';
      if (!formData.guests) newErrors.guests = 'Number of guests is required';
    } else {
      if (!formData.attendees) newErrors.attendees = 'Number of attendees is required';
      if (!formData.experience) newErrors.experience = 'Experience level is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmBooking = async () => {
    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Booking confirmed! You will receive a confirmation email shortly.');
      onNavigate('Home');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-full bg-[#fdfcfb]" data-bravo="[container]">
      {/* Header */}
      <div className="bg-white border-b border-[#e5e7eb] p-4 pt-12">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate('Home')}
            data-bravo="[button]"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-xl font-medium text-[#1f2937]" data-bravo="[text]">
            {isPlace ? 'Book Table' : 'Join Event'}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Item Summary */}
        <div className="bg-white rounded-xl p-4 border border-[#e5e7eb]">
          <h3 className="font-medium text-[#1f2937] mb-2" data-bravo="[text]">{item.title}</h3>
          <p className="text-sm text-[#64748b] mb-2" data-bravo="[text]">
            {isPlace ? item.subtitle : item.date}
          </p>
          <p className="font-medium text-[#ff6b35]" data-bravo="[text]">{item.price}</p>
        </div>

        {/* Booking Form */}
        <div className="space-y-4">
          <h3 className="font-medium text-[#1f2937]" data-bravo="[text]">Booking Details</h3>
          
          {isPlace ? (
            /* Restaurant Booking Form */
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date" data-bravo="[text]">Date *</Label>
                  <Input 
                    id="date" 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className={`mt-1 ${errors.date ? 'border-red-500' : ''}`}
                    data-bravo="[input]"
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>
                <div>
                  <Label htmlFor="time" data-bravo="[text]">Time</Label>
                  <Select>
                    <SelectTrigger className="mt-1" data-bravo="[input]">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6:00">6:00 PM</SelectItem>
                      <SelectItem value="6:30">6:30 PM</SelectItem>
                      <SelectItem value="7:00">7:00 PM</SelectItem>
                      <SelectItem value="7:30">7:30 PM</SelectItem>
                      <SelectItem value="8:00">8:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="guests" data-bravo="[text]">Number of Guests</Label>
                <Select>
                  <SelectTrigger className="mt-1" data-bravo="[input]">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          ) : (
            /* Event Registration Form */
            <>
              <div>
                <Label htmlFor="attendees" data-bravo="[text]">Number of Attendees</Label>
                <Select>
                  <SelectTrigger className="mt-1" data-bravo="[input]">
                    <SelectValue placeholder="Select attendees" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Just me</SelectItem>
                    <SelectItem value="2">2 People</SelectItem>
                    <SelectItem value="3">3 People</SelectItem>
                    <SelectItem value="4">4 People</SelectItem>
                    <SelectItem value="5">5+ People</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="experience" data-bravo="[text]">Experience Level</Label>
                <Select>
                  <SelectTrigger className="mt-1" data-bravo="[input]">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          <div>
            <Label htmlFor="notes" data-bravo="[text]">Special Requests</Label>
            <Textarea 
              id="notes" 
              placeholder={isPlace ? "Dietary restrictions, special occasions, etc." : "Any questions or special requirements..."}
              className="mt-1"
              data-bravo="[input]"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="font-medium text-[#1f2937]" data-bravo="[text]">Contact Information</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" data-bravo="[text]">First Name *</Label>
              <Input 
                id="firstName" 
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className={`mt-1 ${errors.firstName ? 'border-red-500' : ''}`}
                data-bravo="[input]"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <Label htmlFor="lastName" data-bravo="[text]">Last Name *</Label>
              <Input 
                id="lastName" 
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className={`mt-1 ${errors.lastName ? 'border-red-500' : ''}`}
                data-bravo="[input]"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>
          
          <div>
            <Label htmlFor="email" data-bravo="[text]">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="john@example.com"
              className="mt-1"
              data-bravo="[input]"
            />
          </div>
          
          <div>
            <Label htmlFor="phone" data-bravo="[text]">Phone Number</Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="+1 (555) 123-4567"
              className="mt-1"
              data-bravo="[input]"
            />
          </div>
        </div>

        {/* Payment Summary */}
        {item.price !== 'Free' && (
          <div className="bg-white rounded-xl p-4 border border-[#e5e7eb]">
            <h3 className="font-medium text-[#1f2937] mb-3" data-bravo="[text]">Payment Summary</h3>
            <div className="flex justify-between items-center">
              <span className="text-[#64748b]" data-bravo="[text]">Total Amount</span>
              <span className="text-xl font-medium text-[#1f2937]" data-bravo="[text]">{item.price}</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="p-6 bg-white border-t border-[#e5e7eb]">
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => onNavigate('Home')}
            data-bravo="[button]"
          >
            Cancel
          </Button>
          <Button 
            className="flex-1 bg-[#ff6b35] hover:bg-[#e55a2b]"
            onClick={handleConfirmBooking}
            data-bravo="[button]"
          >
            {item.price === 'Free' ? 'Confirm Registration' : 'Proceed to Payment'}
          </Button>
        </div>
      </div>
    </div>
  );
}