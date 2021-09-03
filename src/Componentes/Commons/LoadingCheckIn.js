import React from 'react';
import Lottie from 'react-lottie';
import checkIn from '../../AnimationJson/checkIn.json'

export default function LoadingCheckIn(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: checkIn,
        rendererSettings: {
           preserveAspectRatio: 'xMidYMid slice'
        },
     }

    return (
       
            <Lottie
                options={defaultOptions}
                height={200}
                width={200}
            />
    
    )
}