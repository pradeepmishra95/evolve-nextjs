import './globals.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <a
          href="https://wa.me/918850957882"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <span className="tooltip">Contact Us</span>
          <img src="/icons/whatsapp.png" alt="WhatsApp" />
          
        </a>
        <Footer/>
      </body>
    </html>
  );
}


