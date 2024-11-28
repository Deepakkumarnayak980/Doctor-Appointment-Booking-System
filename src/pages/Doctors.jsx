import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Doctors() {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = useCallback(() => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, speciality]);

  useEffect(() => {
    applyFilter();
  }, [applyFilter]);

  return (
    <div>
      <h1 className='text-gray-800 font-extrabold'>Browse through the doctors' specialties.</h1>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        {/* Filter Section */}
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map(spec => (
            <p
              key={spec}
              onClick={() => (speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`))}
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer 
              ${speciality === spec ? 'bg-indigo-100 text-black' : ''}`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* Doctors Section */}
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.length > 0 ? (
            filterDoc.map(item => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-2'
                key={item._id}
              >
                <img className='bg-blue-50' src={item.image} alt={`Doctor ${item.name}`} />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-green-500'>
                    <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                    <p>Available</p>
                  </div>
                  <p className='text-gray-800 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-700 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className='text-gray-500'>No doctors found for the selected specialty.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
