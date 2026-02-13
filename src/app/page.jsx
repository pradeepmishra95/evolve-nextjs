import Header from '@/app/components/header/Header';
import Hero from '@/app/components/hero/Hero';
import InstaReels from './components/insta-reels/InstaReels';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Excercises from './components/excersises/Excersises';
// import Banner from './components/banner/Banner';
import About from './components/about/About';
import MapSection from './components/mapsection/MapSection';


export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
     <InstaReels />
      {/* <Banner/> */}
      <Excercises />
      <Testimonials />
       <About/>
       <MapSection/>
    </main>
  );
}

