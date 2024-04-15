import LoginButton from "../Components/LoginButton";

const LoginPage = () => {
    return (
    <>
        <h1>
            Välkommen till login sidan! 
         
        </h1>
        <button onClick={() => console.log(process.env.REACT_APP_AUTH_CLIENTID)}>heje</button>
        <button onClick={() => console.log(process.env.REACT_APP_AUTH_DOMAIN)}>heje</button>
        <LoginButton/>
    </>
    );
}

export default LoginPage