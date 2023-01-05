import React from 'react'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
const CardSkeleton = ({cards}) => {
  return Array(cards).fill(0).map((item,i)=>(
    <div className='card'>
          <Skeleton circle={true} height={100} width={100}/>
          <h1><Skeleton/></h1>
          <h3><Skeleton/></h3>
          <p><Skeleton/></p>
        </div>
  ));
}

export default CardSkeleton