import { useState, useEffect } from "react";
import UserCard from "../Components/UserCard";

const Dashboard = () => {
  const [list, setList] = useState([]);

  //Default Mocklist until we hook up the real fetch
  const mockData = [
    { name: "Jacobi Douche", startWeight: 80, currentWeight: 75, waistWidth: 90 },
    { name: "Adamski Poopischow", startWeight: 70, currentWeight: 65, waistWidth: 85 },
    { name: "Robin the Great", startWeight: 75, currentWeight: 72, waistWidth: 88 },
    { name: "Kristofferoo the poo ", startWeight: 85, currentWeight: 82, waistWidth: 92 }
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Fetch data from the backend API

    const fetchData = async () => {
      try {
        const response = await fetch("your_backend_api_url_here");
        if (response.ok) {
          const data = await response.json();
          setList(data); // Set the fetched list to state
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    setList(mockData);
  }, []);



  //////////////// put this in the fetch list 
  // Calculate weightChange for each user
  const dataWithWeightChange = mockData.map(user => ({
    ...user,
    weightChange: ((user.currentWeight - user.startWeight) / user.startWeight) * 100
  }));

  // Sort the list by greatest weightChange
  const sortedList = dataWithWeightChange.sort((a, b) => b.weightChange - a.weightChange);
//////////////////



  return (
    <>
      <h1>List of Users</h1>
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
    </>
  );
};

export default Dashboard;
