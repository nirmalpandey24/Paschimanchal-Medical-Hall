-- Insert sample doctors
INSERT INTO public.doctors (name, specialty, bio, image_url, phone, email, years_experience, education, certifications, available_days) VALUES
('Dr. Sarah Johnson', 'Cardiology', 'Dr. Johnson is a board-certified cardiologist with over 15 years of experience in treating heart conditions. She specializes in preventive cardiology and advanced cardiac imaging.', '/placeholder.svg?height=400&width=400', '(555) 123-4567', 'sarah.johnson@medicalcenter.com', 15, 'MD from Harvard Medical School, Residency at Johns Hopkins', ARRAY['Board Certified Cardiologist', 'Advanced Cardiac Life Support'], ARRAY['Monday', 'Tuesday', 'Wednesday', 'Friday']),

('Dr. Michael Chen', 'Orthopedics', 'Dr. Chen is an orthopedic surgeon specializing in sports medicine and joint replacement. He has helped thousands of patients return to active lifestyles.', '/placeholder.svg?height=400&width=400', '(555) 234-5678', 'michael.chen@medicalcenter.com', 12, 'MD from Stanford University, Fellowship in Sports Medicine', ARRAY['Board Certified Orthopedic Surgeon', 'Sports Medicine Specialist'], ARRAY['Tuesday', 'Wednesday', 'Thursday', 'Friday']),

('Dr. Emily Rodriguez', 'Pediatrics', 'Dr. Rodriguez is a compassionate pediatrician dedicated to providing comprehensive care for children from infancy through adolescence.', '/placeholder.svg?height=400&width=400', '(555) 345-6789', 'emily.rodriguez@medicalcenter.com', 8, 'MD from UCLA, Pediatric Residency at Children''s Hospital', ARRAY['Board Certified Pediatrician', 'Pediatric Advanced Life Support'], ARRAY['Monday', 'Tuesday', 'Thursday', 'Friday']),

('Dr. James Wilson', 'Dermatology', 'Dr. Wilson is a dermatologist with expertise in both medical and cosmetic dermatology, helping patients achieve healthy, beautiful skin.', '/placeholder.svg?height=400&width=400', '(555) 456-7890', 'james.wilson@medicalcenter.com', 10, 'MD from Yale University, Dermatology Residency at Mayo Clinic', ARRAY['Board Certified Dermatologist', 'Mohs Surgery Certified'], ARRAY['Monday', 'Wednesday', 'Thursday', 'Friday']);

-- Insert sample services
INSERT INTO public.services (name, description, price, duration_minutes, category) VALUES
('General Consultation', 'Comprehensive medical examination and consultation', 150.00, 30, 'General'),
('Cardiac Screening', 'Complete cardiovascular health assessment including EKG', 300.00, 60, 'Cardiology'),
('Orthopedic Evaluation', 'Assessment of musculoskeletal conditions and injuries', 200.00, 45, 'Orthopedics'),
('Pediatric Checkup', 'Routine health examination for children', 120.00, 30, 'Pediatrics'),
('Skin Cancer Screening', 'Comprehensive skin examination for early detection', 180.00, 30, 'Dermatology'),
('Joint Injection', 'Therapeutic injection for joint pain relief', 250.00, 20, 'Orthopedics'),
('Vaccination', 'Immunization services for children and adults', 50.00, 15, 'General'),
('Dermatology Consultation', 'Evaluation and treatment of skin conditions', 175.00, 30, 'Dermatology');
