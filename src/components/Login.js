import SectionHeader from './SectionHeader';

const Login = ({handleClick}) => {
    return (
        <>
            <SectionHeader>
                Log In
            </SectionHeader>
            <button onClick={(e)=> handleClick(e)} >
                    Log In
            </button>
        </>
    )
};

export default Login;