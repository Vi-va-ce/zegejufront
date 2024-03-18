import React, { useState } from 'react';
import time from './time.svg';

function Account() {
  const username = 'Esrom sharew';
  const firstLetter = username.charAt(0);
  const joinedMonth = 'February 2024';
  const email = 'Eesromsharew1';

  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div>
      <div className="ml-[60px] mt-[45px]  hidden md:block">
        <p className="w-[48px] h-[18px] text-[18px] font-bold font-inter">Account</p>
      </div>
      <div className="flex mt-[] md:mt-[10px]">
        <div className='hidden md:block'>
          <div className="ml-[26px] mt-[36px]">
            <p className="text-[18px] font-bold font-inter">{username}</p>
          </div>
          <div className="ml-[26px] mt-[2px]">
            <p className="text-[14px] font-inter">{email}</p>
          </div>
          <div className="ml-[26px] mt-[2px] flex">
            <img className="w-[17px] h-[17px]" src={time} alt="time" />
            <p className="text-[12px] font-inter ml-0.5">time joined {joinedMonth}</p>
          </div>
        </div>

        <div className="md:ml-[525px] ml-[220px] mt-[60px] md:mt-[-24px]">
          <button className="flex md:w-[170px] w-[130px]  h-[30px] bg-gray-200 hover:bg-gray-300 rounded-lg">
            <p className="md:text-[18px] text-[13px] font-bold md:ml-8 ml-6 md:mt-0.5 mt-1.5">Save Changes</p>
          </button>
        </div>
      </div>
      
      <div className="box-border w-[327px] h-[350px] border-2 ml-[120px] md:ml-[550px] mt-[28px] md:mt-[-98px] border-[0px] md:border-[2px]">
        <div className="flex md:mt-[40px] mt-[-60px] md:ml-[20px] ml-[-115px]  ">
          <div className="md:w-14 w-[50px] md:h-14 h-[50px] rounded-full bg-blue-500 relative"></div>
          <div className="absolute md:mt-[-4px] mt-[2px] md:ml-[18px] ml-[16px]">
            <p className="md:text-[39px] text-[29px] text-white ">{firstLetter}</p>
          </div>
          <div className="ml-[20px] ">
            <p className="md:text-[18px] text-[15px]  font-bold font-inter">{email}</p>
            <p className="text-blue-500 font-semibold md:text-[15px] text-[12px]">View Your Profile</p>
          </div>
        </div>
        <div className="mt-[40px] hidden md:block">
          <button className="w-[260px] h-[36px] bg-gray-200 hover:bg-gray-300 rounded-lg ml-6 mt-4">
            <p className="font-bold text-[16px] ">Account</p>
          </button>
        </div>
      </div>

      <div className="max-w-sm mx-auto md:ml-[-60px] ml-[0px] md:mt-[-200px] mt-[-190px]">
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex">
            <label className="text-gray-700 text-sm font-bold text-[18px] mr-2 mt-2">Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex mt-4">
            <label className="block text-gray-700 text-sm font-bold text-[18px] mr-2 mt-2" htmlFor="username">
              New Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="password"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="flex mt-4">
            <label className="block text-gray-700 text-sm font-bold text-[18px] mr-2 mt-3" htmlFor="email">
              Confirm
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="password"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className="md:mt-[130px] mt-[50px] md:pb-[120px] pb-[120px] md:ml-[210px] ml-[160px] md:ml-[100px]">
        <p className="text-red-500 font-bold">Delete Account</p>
      </div>
    </div>
  );
}

export default Account;