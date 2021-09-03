import React from 'react';
import Lottie from 'react-lottie';
import loadReserva from '../../AnimationJson/loadReserva.json'

export default function LoadingReserva(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadReserva,
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