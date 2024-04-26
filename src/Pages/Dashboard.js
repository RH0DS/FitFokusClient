import { useState, useEffect } from "react";
import UserCard from "../Components/UserCard";
import NavigateToPageButton from "../Components/NavigateToPageButton";
import "../CSS/Dashboard.css"
import TailButton from "../Components/TailButton";


const Dashboard = () => {
  const calculateWeightChangeAndSort = (inputList) => {
    // Calculate weightChange for each user
    const dataWithWeightChange = inputList.map(user => ({
      ...user,
      weightChange: ((user.currentWeight - user.startWeight) / user.startWeight) * 100
    }));

    // Sort the list by greatest weightChange
    const sortedList = dataWithWeightChange.sort((a, b) => a.weightChange - b.weightChange);

    setList(sortedList);
  };

  const mockData = [
    { name: "Jacobi Douche", startWeight: 80, currentWeight: 75, waistWidth: 90 },
    { name: "Adamski Poopischow", startWeight: 70, currentWeight: 65, waistWidth: 85 },
    { name: "Robin the Great", startWeight: 75, currentWeight: 62, waistWidth: 88 },
    { name: "Kristofferoo the poo ", startWeight: 85, currentWeight: 82, waistWidth: 92 }
  ];
    //Default Mocklist until we hook up the real fetch
  const [list, setList] = useState(mockData);
 
  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch("your_backend_api_url_here");
        if (response.ok) {
          const data = await response.json();
          // Set the fetched data to state after calculating weight change and sorting
          calculateWeightChangeAndSort(data);
          
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
    calculateWeightChangeAndSort(mockData)
    // eslint-disable-next-line
  }, []); // Empty dependency array to run only once on component mount



  // const dev = false;

  return (
    <div className="bg-Twitter-Blue">

          
            <div className="container mx-auto mt-4">
              <h1 className="text-xl font-bold mb-4">Welcome to My App</h1>
              <TailButton />
            </div>
      <div className="user-cards-container">
        <NavigateToPageButton toThisPage={"RegisterResult"} buttonText={"Registrera ny vikt / mått"} />
        <UserCard
          name={list[0].name}
          startWeight={list[0].startWeight}
          currentWeight={list[0].currentWeight}
          waistWidth={list[0].waistWidth}
        />
        <h1>Ställning</h1>
        <div className="user-cards">
          {list.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              startWeight={user.startWeight}
              currentWeight={user.currentWeight}
              waistWidth={user.waistWidth}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;