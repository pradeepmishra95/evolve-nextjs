import styles from "./MapSection.module.css";

const MapSection = () => {
  return (
    <section className={styles.mapSection}>
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4577457053815!2d72.8373853!3d19.1751993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7005e5842fd%3A0xf83ec3da041829c5!2sEVOLVE%20MMA%20%26%20CALISTHENICS!5e0!3m2!1sen!2sin!4v1770299165791!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  );
};

export default MapSection;


