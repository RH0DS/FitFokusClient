import { useNavigate } from "react-router-dom";
import "../CSS/NavigateToPageButton.css"; // Import CSS file for styling

const NavigateToPageButton = ({ toThisPage, buttonText }) => {
  const navigate = useNavigate(); // Hook to perform navigation

  const handleNavigate = () => {
    navigate(toThisPage);
  };

  return (
    <button className="navigate-button" onClick={handleNavigate}>{buttonText}</button>
  );
};

export default NavigateToPageButton;