import { useState, useLayoutEffect, useRef } from 'react';

const MakeSvg = ({ component, children }) => {
    const [svgHeight, setSvgHeight] = useState(0);
    const [svgWidth, setSvgWidth] = useState(0);

    const textRef = useRef();

    useLayoutEffect(() => {
        const { width, height } = textRef.current.getBBox();
        setSvgWidth(width);
        setSvgHeight(height);
    }, []);
    // anchor positions are start, middle, end
    return (
        <svg className={`${component}__svg container`} y="0" x="0" width={svgWidth} height={svgHeight}>
            <text className={`${component}__svg--text`} x="50%" y="0" dominantBaseline="hanging" textAnchor="middle" ref={textRef}>
                { children }
            </text>
        </svg>
    )
}

export default MakeSvg;