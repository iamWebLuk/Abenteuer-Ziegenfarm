import React, { useRef } from 'react';
import { useHover } from 'usehooks-ts';


export default function Pricing() {

    const hoverRef = useRef(null);
    const isHover = useHover(hoverRef);

    return (
        <div >
            <div ref={hoverRef}>
                {`The current div is ${isHover ? 'hovered' : 'unhovered'}`}
            </div>
            <h1 style={{textAlign: 'center'}}>Pricing</h1>
        </div>
    )
}