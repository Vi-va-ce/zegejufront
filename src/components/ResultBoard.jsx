import React, { useEffect, useState } from 'react';
import { Rectangle82 } from "../assets";
import Firstboard from './firstboard';
import Secondboard from './Secondboard';
import Secondboard2 from './Secondboard2';
import Pie from './pie';
import Pie2 from './Pie2';
import Topscore from './Topscore';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';

function ResultBoard() {
  const datag = {
    "twoSections": {
      "sat_math": {
        "score": 13
      },
      "sat_english": {
        "score": 50.0
      }
    },
    "subSections": {
      "math_no_calculator": {
        "score": 3
      },
      "math_calculator": {
        "score": 0
      },
      "evidence_based_reading": {
        "score": 0
      },
      "writting_language": {
        "score": 0
      }
    },
    "mainSections": {
      "total_wrong_answer": {
        "score": 96
      },
      "total_right_answer": {
        "score": 4
      }
    },
    "userid": null,
    "scoreInTheCircle": {
      "totalScore": 800
    }
  };

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://turtle-summary-intensely.ngrok-free.app/api/v2/student/userResponse');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const containerStyle = {
    position: 'relative',
    overflow: 'visible',
  };

  const imageStyle = {
    position: 'absolute',
    top: '18px',
    left: -350,
    width: '1000px',
    height: '800px',
  };

  const customBorderStyle = {
    position: 'absolute',
    background: 'rgba(0, 0, 0, 0.01)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  };

  const secondBoardData = {
    satEnglishScore: datag.twoSections.sat_english.score,
  };

  const secondBoardTwoData = {
    satMathScore: datag.twoSections.sat_math.score,
  };

  const firstBoardData = {
    subSections: datag.subSections,
  };
  
  const mainSectionsData = {
    mainSections:datag.mainSections,
  };


  return (
    <div className="" style={containerStyle}>
      <img src={Rectangle82} alt="Rectangle82" style={imageStyle} />
      <div className='custom-container md:w-[905px] md:h-[730px] w-[360px] h-[1200px]  md:rounded-3xl rounded-tl-[31px] rounded-tr-[31px] shadow'>
        <p className='md:p-5 p-2 ml-4 mt-8 text-white md:text-4xl text-[25.51px] font-inter'>Result</p>
        <div className=" md:ml-5 md:w-[870px] md:h-[4px] w-[320px] h-[2px] ml-4 " style={customBorderStyle}></div>
        <div className='md:ml-0.5 ml-4'>
          <Firstboard data={firstBoardData} />
        </div>
        <div className='flex'>
          <div className='md:ml-96 md:pl-12 md-mt  absolute ml-2'>
            <Secondboard data={secondBoardData} />
          </div>
          <div className='md:ml-8 ml-2 absolute'>
            <Secondboard2 data={secondBoardTwoData} />
          </div>
        </div>
        <div className='md:ml-96 md:mt-80 ml-5 mt-[865px] absolute'>
          <Topscore />
        </div>
        <div className='md:mt-80 md:ml-2 ml-7 mt-[570px] shadow'>
          {isMobile ? <Pie2 data={mainSectionsData} /> : <Pie data={mainSectionsData} />}
        </div>
        <button className='flexs md:ml-[390px] ml-[270px]'>
          <div class="w-[75px] h-7 bg-zinc-300 rounded-[40px] md:mt-4 mt-[270px] md:ml-96" >
          <div class="text-indigo-950 text-xl font-semibold font-['Inter']">More</div>
          </div>
          </button>
      </div>
    </div>
  );
}

  export default ResultBoard;