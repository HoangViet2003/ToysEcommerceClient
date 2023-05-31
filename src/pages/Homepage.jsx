import React from 'react'
import {Banner} from "../components/Banner";
import  Shop  from '../components/Shop';
import Loading from '../components/Loading';

function Homepage() {
  return (
    <div>
        <Banner />
        <Shop />
        {/* <Loading /> */}
    </div>
  )
}

export default Homepage