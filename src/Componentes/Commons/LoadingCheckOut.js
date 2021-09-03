import React from 'react';
import Lottie from 'react-lottie';
import checkOut from '../../AnimationJson/checkOut.json'

export default function LoadingCheckOut(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: checkOut,
        rendererSettings: {
           preserveAspectRatio: 'xMidYMid slice'
        },
     }

    return (
       
            <Lottie
                options={defaultOptions}
                height={300}
                width={300}
            />
    
    )
}