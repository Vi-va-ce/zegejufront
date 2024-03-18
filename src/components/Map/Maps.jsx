import React, { useEffect } from 'react';
import axios from 'axios';
import ProfileMap from './profileMap';
import FirstMapDiagno from './FirstMapDiagno';
import DiagnosticTestMap from './DiagnosticTestMap';
import SecondMapPractice from './SecondMapPractice';
import PracticeTestMap from './PracticeTestMap';
import ThirdMapDiagno from './ThirdMapDiagno';
import FinalTestMap from './FinalTestMap';

function Maps() {
  const data = {
    diagnosticTest: 'MathCalculator',
    practiceTest: 'NotActivated',
    finalTest: 'NotActivated',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('v5/student/getMapData');
        console.log(response.data); // Display the fetched data in the console
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ProfileMap />
      <FirstMapDiagno data={data} />
                                       <DiagnosticTestMap data={data.diagnosticTest} />
      <SecondMapPractice data={data} />
                                       <PracticeTestMap data={data.practiceTest} />
      <ThirdMapDiagno data={data} />
                                       <FinalTestMap data={data.finalTest} />
    </div>
  );
}

export default Maps;