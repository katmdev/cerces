import MakeSvg from './MakeSvg';
const SectionHeader = ({children}) => {
    return (
        <div className="section__header">
            <div className="wrapper">
                <MakeSvg component="section__header" xPosition="100%" anchorPosition="end">
                    { children }
                </MakeSvg>
                {/* <svg className="svg__heading">
                    <text className="svg__heading--text" dominantBaseline="middle" textAnchor="end">
                        {children}
                    </text>
                </svg> */}
            </div>
        </div>
    )
};

export default SectionHeader;