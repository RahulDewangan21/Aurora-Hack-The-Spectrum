import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors speciality.</p>
      <div className='flex flex-col sm:flex-row items-center gap-6 mt-3 '>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-orange-500 text-white' : ''} `}>Filters</button>
        <div className={`flex-row gap-4 text-sm space-x-6 text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-14 py-1 pr-14 border border-gray-300 rounded transition-all cursor-pointer hover:bg-orange-500 hover:text-white hover:scale-105 ease-in-out hover:delay-150 duration-500 hover:shadow-lg ${speciality === 'General physician' ? 'bg-orange-200 text-black' : ''}`}>General physician</p>

          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-10 py-4 pr-10 border border-gray-300 rounded transition-all cursor-pointer hover:bg-orange-500 hover:text-white hover:scale-105 ease-in-out  delay-200 duration-500 hover:shadow-lg ${speciality === 'Gynecologist' ? 'bg-orange-200 text-black' : ''}`}>Gynecologist</p>

          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-10 py-4 pr-10 hover:bg-orange-500 border border-gray-300 rounded transition-all cursor-pointer hover:text-white hover:scale-105 ease-in-out delay-150 duration-500 hover:shadow-lg ${speciality === 'Dermatologist' ? 'bg-orange-200 text-black ' : ''}`}>Dermatologist</p>

          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-10 py-4 pr-10 border border-gray-300 rounded transition-all cursor-pointer hover:bg-orange-500 hover:text-white hover:scale-105 ease-in-out delay-150 duration-500 hover:shadow-lg ${speciality === 'Pediatricians' ? 'bg-orange-200 text-black' : ''}`}>Pediatricians</p>

          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-10 py-4 pr-10 border border-gray-300 rounded transition-all cursor-pointer hover:bg-orange-500 hover:text-white hover:scale-105 ease-in-out delay-150 duration-500 hover:shadow-lg ${speciality === 'Neurologist' ? 'bg-orange-200 text-black' : ''}`}>Neurologist</p>

          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-10 py-4 pr-10 border border-gray-300 rounded transition-all cursor-pointer hover:bg-orange-500  hover:text-white hover:scale-105 ease-in-out delay-150 duration-500 hover:shadow-lg ${speciality === 'Gastroenterologist' ? 'bg-orange-200 text-black' : ''}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-[#EAEFFF]' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors
