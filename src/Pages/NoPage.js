import NavigateToPageButton from "../Components/NavigateToPageButton";

const NoPage = () => 
{
    return (
    <> 
     <h1>Ingen sida att visa </h1>    
       <NavigateToPageButton toThisPage={"/"} buttonText={"Tillbaka till hemsidan"} />
    </>
   
    );
};
export default NoPage;