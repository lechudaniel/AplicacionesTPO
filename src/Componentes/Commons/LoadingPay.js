import React from 'react';
import Lottie from 'react-lottie';
import paySucces from '../../AnimationJson/paySucces.json'

export default function LoadingPay(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: paySucces,
        rendererSettings: {
           preserveAspectRatio: 'xMidYMid slice'
        },
     }

    return (
       
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
    
    )
}