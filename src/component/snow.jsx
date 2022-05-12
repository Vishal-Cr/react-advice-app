import React from 'react';
import Particles from 'react-tsparticles';
import snowConfig from '../assets/snow.json';
const snow = () => {
  return (
    <Particles id="tsparticles" options={snowConfig} />
  )
}

export default snow