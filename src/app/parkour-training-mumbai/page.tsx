import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Parkour Removed',
  description: 'Parkour content has been removed. See current programs on /programs.',
  path: '/parkour-training-mumbai',
};

export default function ParkourTrainingMumbaiPage() {
  // Redirect visitors to the programs page where upcoming classes are listed.
  redirect('/programs');
}
