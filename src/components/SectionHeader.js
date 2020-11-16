const SectionHeader = ({children}) => {
    return (
        <div className="section__header">
            <div className="wrapper">
                <h1>{children}</h1>
            </div>
        </div>
    )
};

export default SectionHeader;