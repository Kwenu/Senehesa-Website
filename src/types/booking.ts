export type Stop = {
  id: string;
  location: string;
  duration: string;
  purpose: string;
  notes: string;
};

export type BookingState = {
  bookingFor: string;
  customerName: string;
  contactNumber: string;
  email: string;
  relationship: string;
  passengerName: string;
  service: string;
  pickupLocation: string;
  date: string;
  time: string;
  stops: Stop[];
  recurring: string;
  vehicle: string;
  assistance: string[];
  specialInstructions: string;
};

export const emptyStop = (): Stop => ({
  id: Math.random().toString(36).slice(2, 9),
  location: '',
  duration: '30 minutes',
  purpose: '',
  notes: ''
});

export const initialBooking: BookingState = {
  bookingFor: '',
  customerName: '',
  contactNumber: '',
  email: '',
  relationship: '',
  passengerName: '',
  service: '',
  pickupLocation: '',
  date: '',
  time: '',
  stops: [emptyStop()],
  recurring: 'One-time journey',
  vehicle: '',
  assistance: [],
  specialInstructions: ''
};

export const bookingForOptions = [
{ value: 'Myself', description: 'I will be travelling.' },
{ value: 'Parent', description: 'For my mother or father in Sri Lanka.' },
{ value: 'Elderly family member', description: 'A grandparent, aunt, uncle or relative.' },
{ value: 'Other person', description: 'A friend, neighbour or someone in my care.' }];


export const serviceOptions = [
'Hospital / Clinic Visit',
'Daily Assistance',
'Assisted Transportation',
'Multi-Stop Journey',
'Airport Transfer',
'Tourism / Travel',
'Other'];


export const recurringChoices = [
'One-time journey',
'Weekly hospital visits',
'Monthly clinic visits',
'Regular shopping',
'Recurring errands',
'Regular transportation'];


export const stopDurations = [
'15 minutes',
'30 minutes',
'1 hour',
'2 hours',
'3 hours or more'];


export const bookingSteps = [
'Who It’s For',
'Service',
'Journey',
'Vehicle',
'Assistance',
'Review'];