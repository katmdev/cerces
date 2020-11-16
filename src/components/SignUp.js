import SectionHeader from './SectionHeader';

const SignUp = ({handleClick}) => {
    return (
        <>
            <SectionHeader>
                Sign Up
            </SectionHeader>
            <button onClick={(e)=> handleClick(e)} >
                Sign Up
            </button>
        </>
    )
};

export default SignUp;