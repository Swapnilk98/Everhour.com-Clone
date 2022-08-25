import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CombineEmptyandFilled from './Products/CombineEmptyandFilled'
  
const Routing = () => {
  return (
    <Routes>
      <Route path='/project' element={<CombineEmptyandFilled/>}/>
    </Routes>
  )
}

export default Routing