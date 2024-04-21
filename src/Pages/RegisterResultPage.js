import NavigateToPageButton from "../Components/NavigateToPageButton";
import ReportForm from "../Components/ReportForm";
import "../CSS/RegisterResultPage.css";
const RegisterResultPage = () => {
   
   
   
   
    return (
    
    <div className="registerResultBody">

        <div className="navButton">
            <NavigateToPageButton  toThisPage={"/"} buttonText={"Tillbaka"} />
        </div>
        <h1 className="fylli" >Rapportera ny vikt och mått </h1>

        <ReportForm/>

    </div>
    );
}
export default RegisterResultPage