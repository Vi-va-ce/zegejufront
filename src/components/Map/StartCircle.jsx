import React from 'react';
import star from "./star.svg";
import { Link } from 'react-router-dom';

function StartCircle({ id }) {
  let linkTo = '';

  if (id === 'MathCalculatorDiagnosticTest') {
    linkTo = '/DMath';
  } else if (id === 'MathNoCalculatorDiagnosticTest') {
    linkTo = '/Dmathnc';
  } else if (id === 'WritingAndLanguageDiagnosticTest') {
    linkTo = '/Dwriting';
  } else if (id === 'EvidenceBasedReadingDiagnosticTest') {
    linkTo = '/Devidence';
  }

  return (
    <>
      {linkTo && (
        <Link to={linkTo}>
          <button className='w-[70px] h-[35px] bg-stone-200 hover:bg-stone-400 rounded-lg ml-[-65px] mt-[-15px] absolute border border-stone-400'>
            <p className='text-green-600 text-[13px] font-bold'>Start</p>
          </button>
        </Link>
      )}
      <div className="relative w-[60px] h-[60px] border-2 border-black border-opacity-20 rounded-full">
        <div className='ml-[3px] mt-[3px] w-[50px] h-[50px] bg-custom-circle rounded-full'>
          <div className='ml-3 pt-3'>
            <img className="w-[25px] h-[25px]" src={star} alt="Star" />
          </div>
        </div>
      </div>
    </>
  );
}

export default StartCircle;