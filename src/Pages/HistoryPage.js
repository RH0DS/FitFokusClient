import NavigateToPageButton from "../Components/NavigateToPageButton";
import HistoryListComponent from "../Components/HistoryListComponent";
import "../CSS/HistoryPage.css"

const HistoryPage = () => {
    return ( 
        <>
        <div className="historyPageBody">
  
            <div className="navigateTohomeButton">
                <NavigateToPageButton toThisPage={"/"} buttonText={"Hem"} />
            </div>
        
            <h1>  Här visas din historia upp</h1>
            <HistoryListComponent/>


            <div className="reportResultButton">
                <NavigateToPageButton  toThisPage={"/RegisterResult"} buttonText={"Rapportera nya resultat"} />
            </div>
        </div>
        </>
    );

}
    export default HistoryPage

