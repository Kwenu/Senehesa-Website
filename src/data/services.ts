export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  icon:
  'hospital' |
  'hand' |
  'car' |
  'route' |
  'heart' |
  'compass';
};

export const services: ServiceCard[] = [
{
  id: 'hospital',
  title: 'Hospital & Clinic Visits',
  description:
  'Safe transportation and assistance for hospital appointments, clinic sessions, medical consultations and follow-up visits.',
  icon: 'hospital'
},
{
  id: 'daily',
  title: 'Daily Assistance',
  description:
  'Support with essential day-to-day activities such as shopping, banking, errands and appointments.',
  icon: 'hand'
},
{
  id: 'transport',
  title: 'Assisted Transportation',
  description:
  'Comfortable and reliable transportation with trained drivers and assistance when required.',
  icon: 'car'
},
{
  id: 'multistop',
  title: 'Multi-Stop Journeys',
  description:
  'Plan multiple destinations in one booking, from home to hospital, pharmacy, bank, supermarket and back home.',
  icon: 'route'
},
{
  id: 'elder',
  title: 'Elder Support',
  description:
  'Friendly support for elderly customers who may need additional assistance throughout their journey.',
  icon: 'heart'
},
{
  id: 'tourism',
  title: 'Travel & Tourism',
  description:
  'Private transportation and customized travel experiences for local and international travelers.',
  icon: 'compass'
}];


export const everydayServices = [
{ label: 'Hospital Visits', icon: 'stethoscope' },
{ label: 'Clinic Appointments', icon: 'clipboard' },
{ label: 'Pharmacy Visits', icon: 'pill' },
{ label: 'Bank Visits', icon: 'landmark' },
{ label: 'Shopping Trips', icon: 'shopping' },
{ label: 'Government Office Visits', icon: 'building' },
{ label: 'Airport Transfers', icon: 'plane' },
{ label: 'Family Visits', icon: 'users' },
{ label: 'Religious Visits', icon: 'flower' },
{ label: 'Local Travel', icon: 'map' },
{ label: 'Tourism', icon: 'palm' },
{ label: 'Customized Trips', icon: 'sparkles' }] as
const;

export const howItWorksSteps = [
{
  number: '01',
  title: 'Tell Us What They Need',
  description: 'Choose a service or start planning a journey.'
},
{
  number: '02',
  title: 'Build the Journey',
  description:
  'Add pickup locations, destinations, dates, times, vehicle type and additional requirements.'
},
{
  number: '03',
  title: 'We Arrange Everything',
  description:
  'Senehasa assigns a suitable vehicle and driver based on your request.'
},
{
  number: '04',
  title: 'Peace of Mind',
  description:
  'Your loved one receives reliable transportation and assistance throughout the journey.'
}];


export const sampleDay = [
{ time: '08:00 AM', title: 'Pickup', place: 'Home' },
{ time: '09:00 AM', title: 'Hospital', place: 'Clinic Appointment' },
{ time: '11:00 AM', title: 'Pharmacy', place: 'Collect Medication' },
{ time: '12:00 PM', title: 'Supermarket', place: 'Daily Essentials' },
{ time: '01:00 PM', title: 'Return', place: 'Home' }];


export const trustPillars = [
{
  title: 'Reliable',
  description: 'Dependable transportation and support when your family needs it.',
  icon: 'shield'
},
{
  title: 'Caring',
  description: 'We treat every customer with patience, respect and kindness.',
  icon: 'heart'
},
{
  title: 'Safe',
  description: 'Comfortable journeys with responsible drivers and support.',
  icon: 'lock'
},
{
  title: 'Flexible',
  description: "Customize your journey based on your family's needs.",
  icon: 'sliders'
},
{
  title: 'Connected',
  description: "Keep track of arrangements even when you're overseas.",
  icon: 'globe'
},
{
  title: 'Local',
  description: 'Support available across Sri Lanka.',
  icon: 'pin'
}] as
const;

export const tourismServices = [
'Airport Transfers',
'Private Day Tours',
'Multi-Day Trips',
'Customized Tours',
'Family Travel',
'Group Transportation',
'Tourist Transportation',
'Driver-Assisted Travel'];


export const recurringOptions = [
'Weekly hospital visits',
'Monthly clinic visits',
'Regular shopping',
'Recurring errands',
'Regular transportation'];