-- Replace sample doctors with real Nepali doctors
DELETE FROM doctors;

INSERT INTO doctors (name, specialty, experience, education, phone, email, image_url, bio, certifications, availability) VALUES
(
  'Dr. Rajib Rajbhandari',
  'Cardiology',
  '15+ years',
  'MBBS, MD Cardiology, Fellowship in Interventional Cardiology',
  '+977-1-5970032',
  'rajib.rajbhandari@bbhospital.org.np',
  '/placeholder.svg?height=300&width=300',
  'Dr. Rajib Rajbhandari is a renowned consultant cardiologist at B&B Hospital with extensive experience in interventional cardiology and cardiac care.',
  'Board Certified Cardiologist, Fellow of American College of Cardiology',
  'Monday-Friday: 9:00 AM - 5:00 PM, Saturday: 9:00 AM - 1:00 PM'
),
(
  'Prof. Dr. Ashok Kumar Banskota',
  'Orthopedic Surgery',
  '25+ years',
  'MBBS, MS Orthopedics, Fellowship in Spine Surgery',
  '+977-1-5970033',
  'ashok.banskota@bbhospital.org.np',
  '/placeholder.svg?height=300&width=300',
  'Prof. Dr. Ashok Kumar Banskota is the Chief of Orthopaedic Surgery at B&B Hospital, specializing in spine surgery and complex orthopedic procedures.',
  'Chief of Orthopaedic Surgery, International Spine Surgery Fellowship',
  'Monday-Friday: 8:00 AM - 4:00 PM, Emergency on-call'
),
(
  'Dr. Shobha Sapkota',
  'Pediatrics',
  '12+ years',
  'MBBS, MD Pediatrics, Pediatric Nutrition Specialist',
  '+977-1-5555444',
  'shobha.sapkota@medharma.com.np',
  '/placeholder.svg?height=300&width=300',
  'Dr. Shobha Sapkota specializes in Pediatrics & Pediatric Nutrition at Medharma CliniX, providing comprehensive care for children.',
  'Board Certified Pediatrician, Pediatric Nutrition Specialist',
  'Monday-Saturday: 10:00 AM - 6:00 PM'
),
(
  'Dr. Ishan Adhikari',
  'Neurology',
  '10+ years',
  'MBBS, DM Neurology, Clinical Neurophysiology',
  '+977-1-5555445',
  'ishan.adhikari@medharma.com.np',
  '/placeholder.svg?height=300&width=300',
  'Dr. Ishan Adhikari is a Clinical Neurologist & Neurophysiologist at Medharma CliniX, specializing in neurological disorders and brain health.',
  'Clinical Neurologist, Neurophysiologist, EEG Specialist',
  'Monday-Friday: 9:00 AM - 5:00 PM, Thursday: 2:00 PM - 8:00 PM'
),
(
  'Dr. Asim Shrestha',
  'Pediatric Neurology',
  '8+ years',
  'MBBS, MD Pediatrics, DM Pediatric Neurology',
  '+977-1-4782052',
  'asim.shrestha@bansbari.org.np',
  '/placeholder.svg?height=300&width=300',
  'Dr. Asim Shrestha is a Pediatric Neurologist working at Bansbari Neuro Hospital and International Friendship Children Hospital, specializing in childhood neurological conditions.',
  'Pediatric Neurologist, Child Development Specialist',
  'Monday-Friday: 10:00 AM - 4:00 PM, Saturday: 10:00 AM - 2:00 PM'
),
(
  'Dr. Krishna Raj Khanal',
  'Orthopedics',
  '18+ years',
  'MBBS, MS Orthopedics, Joint Replacement Specialist',
  '+977-1-5970034',
  'krishna.khanal@clinicone.com.np',
  '/placeholder.svg?height=300&width=300',
  'Dr. Krishna Raj Khanal is a recognized orthopedic surgeon at Clinic One, specializing in joint replacement and sports medicine.',
  'Orthopedic Surgeon, Joint Replacement Specialist',
  'Monday-Friday: 9:00 AM - 5:00 PM, Saturday: 9:00 AM - 1:00 PM'
);
