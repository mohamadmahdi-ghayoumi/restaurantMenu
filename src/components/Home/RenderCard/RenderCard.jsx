import React from 'react'
import { foodData } from '../../../constants/mock-data'
import Card from '../Card/Card'
import burger from "../../../assets/image/burger.png";

function RenderCard() {
  return (
    <div className='grid grid-cols-2 gap-5 ml-5 mt-4 overflow-auto grid-flow-row mb-7 pl-2 pr-7'>{foodData.map((item)=> Card(item))}</div>
        //   {/* <div>{ROUTE.home}</div> */}

  )
}

export default RenderCard