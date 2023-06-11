import React from 'react';

const PhotoCard = ({photocard}) =>
{
    return (
        <div class=" h-44 w-80 bg-white">
            <figure><img className='mx-28 my-11' src={photocard.img} alt="Shoes" /></figure>
            
        </div>
    );
};

export default PhotoCard;