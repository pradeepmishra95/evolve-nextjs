import MapSection from "@/components/mapsection/MapSection";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <section className={styles.contactSection}>
      
     {/* Top Image
      <div className={styles.imageWrapper}>
        <img
          src="/images/contactus.jpg"
          alt="Contact Evolve MMA"
        />
      </div>` */}

      <h1>Contact Us</h1>

      <div className={styles.infoBlock}>
        <h3>Get in Touch</h3>
        <p><strong>Phone:</strong> +91 8850957882</p>
        <p><strong>Email:</strong> evolvemmaandcalisthenics@gmail.com</p>
      </div>

      <div className={styles.infoBlock}>
        <h3>Working Hours</h3>
        <p>Monday – Saturday: 6:00 AM – 10:00 PM</p>
      </div>

      <MapSection />
    </section>
  );
}


