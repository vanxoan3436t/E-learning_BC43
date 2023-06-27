import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


export const CounterUpPage = (number) => {
    const [counterOn, setCounterOn] = useState(false)

    return <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <span>{counterOn && <CountUp start={0} end={number} duration={5} delay={0} />} +</span>
    </ScrollTrigger>
}


