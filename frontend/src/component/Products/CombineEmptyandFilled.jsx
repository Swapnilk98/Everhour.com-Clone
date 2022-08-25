import React from 'react'
import { useState } from 'react'
import Product from './Product'
import ProjectCreation from './ProjectCreation'

const CombineEmptyandFilled = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
         {!show ? <Product/> : <ProjectCreation/>}
    </div>
  )
}

export default CombineEmptyandFilled