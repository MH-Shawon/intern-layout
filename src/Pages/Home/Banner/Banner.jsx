// import React from 'react';
import doctors from '../../../assets/images/doctor.png'
const Banner = () => {
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={doctors} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      
      
    </div>
  </div>
</div>
    );
};

export default Banner;