import { useState } from 'react';
import StudentSignupPage1 from './StudentSignup/Page1';
import StudentSignupPage2 from './StudentSignup/Page2';
import StudentSignupPage3 from './StudentSignup/Page3';

interface StudentSignupProps {
  onBack: () => void;
  onLogin: () => void;
}

export interface Page1Data {
  fullName: string;
  email: string;
  password: string;
}

export interface Page2Data {
  photoUrl: string;
  firstName: string;
  middleName: string;
  surname: string;
  phoneNumber: string;
  dateOfBirth: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

export interface Page3Data {
  educationLevel: string;
  classGrade: string;
  institutionName: string;
  streamDept: string;
  semester: string;
}

export default function StudentSignup({ onBack, onLogin }: StudentSignupProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [page1Data, setPage1Data] = useState<Page1Data | null>(null);
  const [page2Data, setPage2Data] = useState<Page2Data | null>(null);

  const handlePage1Complete = (data: Page1Data) => {
    setPage1Data(data);
    setCurrentStep(2);
  };

  const handlePage2Complete = (data: Page2Data) => {
    setPage2Data(data);
    setCurrentStep(3);
  };

  const handlePage2Back = () => {
    setCurrentStep(1);
  };

  const handlePage3Back = () => {
    setCurrentStep(2);
  };

  const handlePage3Complete = async (data: Page3Data) => {
    console.log('Complete registration:', { page1Data, page2Data, page3Data: data });
  };

  return (
    <div className="min-h-screen bg-dark-primary">
      {currentStep === 1 && (
        <StudentSignupPage1
          onBack={onBack}
          onLogin={onLogin}
          onNext={handlePage1Complete}
        />
      )}
      {currentStep === 2 && page1Data && (
        <StudentSignupPage2
          email={page1Data.email}
          onBack={handlePage2Back}
          onNext={handlePage2Complete}
        />
      )}
      {currentStep === 3 && page1Data && page2Data && (
        <StudentSignupPage3
          onBack={handlePage3Back}
          onComplete={handlePage3Complete}
        />
      )}
    </div>
  );
}
