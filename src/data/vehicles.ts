export type Vehicle = {
  id: string;
  name: string;
  image: string;
  capacity: string;
  comfort: string;
  useCases: string[];
};

export const vehicles: Vehicle[] = [
{
  id: 'car',
  name: 'Comfortable Car',
  image: "/1d8f2523-3a2b-455c-99e1-667ea7e8f3b2.jpg",

  capacity: 'Up to 3 passengers',
  comfort: 'Easy access • Air conditioned',
  useCases: ['Clinic visits', 'Short errands', 'Bank & pharmacy runs']
},
{
  id: 'suv',
  name: 'Spacious SUV',
  image: "/e197cdff-bd4e-4373-87e6-59ac7730d401.jpg",

  capacity: 'Up to 5 passengers',
  comfort: 'Higher seating • Extra legroom',
  useCases: ['Easier to step into', 'Longer hospital trips', 'Family outings']
},
{
  id: 'van',
  name: 'Van',
  image: "/68b55b18-68f5-4379-a33c-812a863a831c.jpg",

  capacity: 'Up to 8 passengers',
  comfort: 'Wide sliding door • Space for a wheelchair',
  useCases: ['Family visits', 'Airport transfers', 'Group travel']
},
{
  id: 'premium',
  name: 'Premium Vehicle',
  image: "/e6db07c5-1a05-4d25-b012-81d46788efc2.jpg",

  capacity: 'Up to 3 passengers',
  comfort: 'Executive comfort • Quiet ride',
  useCases: ['Special occasions', 'Long-distance journeys', 'Guest transport']
}];


export const assistanceOptions = [
'Wheelchair assistance',
'Help getting into / out of vehicle',
'Accompany during appointment',
'Waiting service',
'Pharmacy assistance',
'Shopping assistance',
'Bank / errand assistance',
'Extra passenger',
'Special instructions'];