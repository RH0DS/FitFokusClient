
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import NavigateToPageButton from "../Components/NavigateToPageButton";


const ProfilePage = () => {
    
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
    return <div>Loading ...</div>;
    }

    return (
        <>
                { <NavigateToPageButton  toThisPage={"/"} buttonText={"Tillbaka"} />}
     
        {isAuthenticated && (
            <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}1</h2>
            <p>{user.given_name} Given Name</p>
            <p>{user.family_name} Family name</p>
            <p>{user.email} 2 email</p>
            <p>{user.address} 3 address</p>
            <p>{user.birthdate} 4 birthdate</p>
            <p>{user.gender} 5 gender</p>
            <p>{user.locale} 6 locale</p>
            <p>{user.nickname} 7 nickname</p>
            <p>{user.phone_number} 8 phone_number</p>
            <p>{user.preferred_username} 9 preferred_username</p>
            <p>{user.profile} 10 profile</p>
            <p>{user.sub} 11 sub</p>
            <p>{user.updated_at} 12 updated_at</p>
            <p>{user.zoneinfo} 13 zoneinfo</p>
            <p>{user.email_verified.toString()} 14 email_verified</p>
            <p>{user.website} 15 website</p>
            <p>{user.phone_number_verified} 15 phone_number_verified</p>
            
            
            
            </div>
        )}
        </>);
};
export default ProfilePage;