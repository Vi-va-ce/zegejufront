import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { search, research, trigonometry } from "../../assets";
import Ebrw from './Ebrw';
import Questionoboard from './Questionoboard';
import FirstGraph from './FirstGraph';
import UpperGraphPart from './UpperGraphPart';
import Mathimaticsboard from './Mathimaticsboard';
import Mboard from './Mboard';
import UpperGraphPart2 from './UpperGraphPart2';
import SecondGraph from './SecondGraph';
import CrossTestBoard from './CrossTestBoard';
import Dashboardbar from './Dashboardbar';
import Dashboardbar2 from './Dashboardbar2';
import PieDash from './PieDash';

function DashboardHero() {
const [dashboardData, setDashboardData] = useState(null);
const datag = {
"Math_subscores": {
"second_section": {
"passport_advanced_math": {
"right_answer": 0,
"out_of": 100,
"wrong_answer": 100
},
"average": {
"right_answer": 6,
"out_of": 100,
"wrong_answer": 93
},
"heart_of_algebra": {
"right_answer": 20,
"out_of": 100,
"wrong_answer": 80
},
"problem_solving_analysis": {
"right_answer": 0,
"out_of": 100,
"wrong_answer": 100
}
},
"first_section": {
"passport_advanced_math": {
"right_answer": 0,
"out_of": 10,
"wrong_answer": 10
},
"average": {
"right_answer": 2,
"out_of": 30,
"wrong_answer": 28
},
"heart_of_algebra": {
"right_answer": 2,
"out_of": 10,
"wrong_answer": 8
},
"problem_solving_analysis": {
"right_answer": 0,
"out_of": 10,
"wrong_answer": 10
}
}
},
"use_id": "welde.gesesse@gmail.com",
"cross_test": {
"science_score": {
"score": 0,
"right_answer": 0,
"wrong_answer": 100
},
"history_score": {
"score": 0,
"right_answer": 0,
"wrong_answer": 100
}
},
"Reading_and_Writing_subscores": {
"second_section": {
"average": {
"right_answer": 2,
"out_of": 30,
"wrong_answer": 28
},
"words_in_context": {
"right_answer": 10,
"out_of": 100,
"wrong_answer": 90
},
"expression_of_Ideas": {
"right_answer": 0,
"out_of": 100,
"wrong_answer": 100
},
"command_of_evidence": {
"right_answer": 10,
"out_of": 100,
"wrong_answer": 90
}
},
"first_section": {
"average": {
"right_answer": 2,
"out_of": 30,
"wrong_answer": 28
},
"words_in_context": {
"right_answer": 1,
"out_of": 10,
"wrong_answer": 9
},
"expression_of_Ideas": {
"right_answer": 0,
"out_of": 10,
"wrong_answer": 10
},
"command_of_evidence": {
"right_answer": 1,
"out_of": 10,
"wrong_answer": 9
}
}
}
};

useEffect(() => {
setDashboardData(datag);
}, []);

  return (
    <>
      <div className=' ml-4 mt-3 md:pt-16 md:pl-[210px]'>
        <Ebrw />
      </div>
      <div className="hidden lg:block">
        <img src={search} alt="search" className="absolute w-[110px] h-[110px] ml-28 pb-6" />
      </div>
      <div className='md:mr-32 '>
        <Questionoboard questionData={dashboardData?.Reading_and_Writing_subscores} />
      </div>
      <div className='pl-4 pt-4 md:pl-56 '>
        <UpperGraphPart />
        <div className='hidden lg:block'>
          <div className='md:ml-28'>
            <div className='md:ml-96'>
              <img src={research} alt="research" className="absolute w-[110px] h-[110px]  ml-96" />
            </div>
          </div>
        </div>
      </div>
      <div className='md:ml-52 md:p-4 ml-4 p-2'>
        <FirstGraph questionData={dashboardData?.Reading_and_Writing_subscores} />
      </div>
      <div className='ml-4 mt-3 md:pt-16 md:pl-[210px]'>
        <Mathimaticsboard />
      </div>
      <div className='md:mr-32'>
        <Mboard questionData={dashboardData?.Math_subscores} />
      </div>
      <div className='pl-4 pt-4 md:pl-56 '>
        <UpperGraphPart2 />
      </div>
      <div className='md:ml-52 md:p-4 ml-4 p-2'>
        <div className='hidden lg:block'>
          <div className='ml-96' style={{ marginRight: "390px" }}>
            <img src={trigonometry} alt="trigonometry" className="absolute mt-56 ml-96" />
          </div>
        </div>
        <SecondGraph questionData={dashboardData?.Math_subscores} />
      </div>
      <div className=' pl-12 pt-4 md:pl-56'>
        <CrossTestBoard />
      </div>
      <div className='md:flex'>
        <div className='flex '>
        <div className=' flex md:block p-2 md:pl-[200px]'>
          <div className='p-6'>
          <Dashboardbar questionData={dashboardData?.cross_test?.science_score} />
          </div>
          <div className='mt-6 md:ml-6 '>
            <Dashboardbar2 questionData={dashboardData?.cross_test?.history_score} />
        </div>
          </div>
        </div>
        <div className='md:ml-32 '>
          <PieDash questionData={dashboardData?.cross_test} />
        </div>
      </div>
    </>
  );
}

export default DashboardHero;