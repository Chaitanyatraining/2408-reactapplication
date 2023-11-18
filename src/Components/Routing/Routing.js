import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListAndKeys from '../ListAndKeys'
import ContactUs from '../ContactUs'
import StylingComp from '../stylings/StylingComp'
import FormValidation from '../FormValidation'
import LifeCycleMethods from '../LifeCycleMethods'
import Pagination from '../Pagination'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<ListAndKeys />} />
            <Route path="contactus" element={<FormValidation />} />
            <Route path="styling" element={<StylingComp />} />
            <Route path="lifecyclemethod" element={<LifeCycleMethods />} />
            <Route path="pagination" element={<Pagination />} />
        </Routes>
    </div>
  )
}

export default Routing