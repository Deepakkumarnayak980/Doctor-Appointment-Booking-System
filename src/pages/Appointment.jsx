import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

function Appointment() {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date();
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      const timeSlots = [];
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  const handleSlotClick = (time) => {
    setSlotTime(time);
  };

  return (
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Doctor Details */}
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt="Doctor"
            />
          </div>

          <div className="flex-1 border items-center border-gray-400 rounded-lg py-7 p-8 bg-white mx-2 sm:mx-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="Verified" />
            </p>
            <div className="flex items-center gap-2 text-md mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience} yrs
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="Info" />
              </p>
              <p className="text-sm text-gray-700 max-w-lg mt-1">{docInfo.about}</p>
            </div>
            <p className="text-gray-700 font-medium mt-4">
              Appointment fee: <span className="text-gray-700">{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>
        {/* Booking Slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll cursor-pointer mt-4">
            {docSlots.map((daySlots, index) => (
              <div
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'
                }`}
              >
                <p>{daySlots[0] && dayOfWeek[daySlots[0].datetime.getDay()]}</p>
                <p>{daySlots[0] && daySlots[0].datetime.getDate()}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length > 0 &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime ? 'bg-primary text-white' : 'border border-gray-300 text-gray-400'
                  }`}
                  key={index}
                  onClick={() => handleSlotClick(item.time)}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className='bg-primary text-white text-sm font-light px-14 py-4 rounded-full my-6'>Book an appointment</button>
        </div>
        {/* Listing Realated Docters */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
}

export default Appointment;
