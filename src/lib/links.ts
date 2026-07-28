export const BOOK_TRIAL_WHATSAPP_NUMBER = '9552596315';
export const BOOK_TRIAL_PATH = `https://wa.me/91${BOOK_TRIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hi! I want to book a trial at Evolve Sports And Fitness Club.'
)}`;

export const CONTACT_PHONE_NUMBER = '9552596315';
export const CONTACT_PHONE_DISPLAY = '+91 9552596315';
export const CONTACT_PHONE_LINK = `tel:+91${CONTACT_PHONE_NUMBER}`;
export const CONTACT_EMAIL = 'esfclub.in';
export const CONTACT_EMAIL_IS_ADDRESS = CONTACT_EMAIL.includes('@');
export const CONTACT_EMAIL_LINK = CONTACT_EMAIL_IS_ADDRESS
  ? `mailto:${CONTACT_EMAIL}`
  : `https://${CONTACT_EMAIL}`;

export const ADDRESS_LINE_1 =
  'Beside Mahanagar Gas Station, diagonally opposite Inorbit Mall';
export const ADDRESS_LINE_2 =
  'Near Lower Malad Metro Station, New Link Road, Malad West, Mumbai - 400064';
export const STREET_ADDRESS =
  'Beside Mahanagar Gas Station, diagonally opposite Inorbit Mall, Near Lower Malad Metro Station, New Link Road, Malad West';
export const FULL_ADDRESS = `${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`;

export const GOOGLE_MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(
  FULL_ADDRESS
)}`;
export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4577457053815!2d72.8373853!3d19.1751993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7005e5842fd%3A0xf83ec3da041829c5!2sEVOLVE%20MMA%20%26%20CALISTHENICS!5e0!3m2!1sen!2sin!4v1770299165791!5m2!1sen!2sin';
export const INSTAGRAM_PROFILE_URL =
  'https://www.instagram.com/evolve_mmacalisthenics';

export const WHATSAPP_TRIAL_URL = `https://wa.me/91${CONTACT_PHONE_NUMBER}?text=${encodeURIComponent(
  'Hi! I want to book a trial at Evolve Sports And Fitness Club.'
)}`;
export const WHATSAPP_PROGRAM_HELP_URL = `https://wa.me/91${CONTACT_PHONE_NUMBER}?text=${encodeURIComponent(
  'Hi! I want help choosing the right program and batch.'
)}`;
export const WHATSAPP_PROGRAM_FIT_URL = `https://wa.me/91${CONTACT_PHONE_NUMBER}?text=${encodeURIComponent(
  'Hi! I want to understand which program fits me best.'
)}`;

export const OPENING_HOURS_LABEL = 'Monday - Saturday, 6:00 AM - 10:00 PM';
