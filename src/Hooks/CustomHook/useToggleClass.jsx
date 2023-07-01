
import { useState } from 'react';
export default function useToggleClass(defaultValue) {
    const [currentValue, setCurrentValue] = useState(defaultValue);
    const toggleValue = newValue => {
        setCurrentValue(value => (typeof newValue === 'boplean' ? newValue : !value));

        return [currentValue, toggleValue];
    }
}
// import React from 'react'

// type Props = {}

// const useToggleClass = (props: Props) => {
//   return (
//     <div>useToggleClass</div>
//   )
// }

// export default useToggleClass