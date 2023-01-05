import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import axios from "axios";
import "./App.css";
import CardSkeleton from "./CardSkeleton";
import CardList from "./CardList";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function App() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        setUserList(res.data);
        setIsLoading(false);
      });
    }, 2000);
  }, []);
  return (
    <div className="App">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <h1>Skeleton Display</h1>
      {isLoading ? (
        <CardSkeleton cards={9}/>
        
      ) : (
        userList.map((user) => <CardList userData={user} />)
      )}
      </SkeletonTheme>
      
    </div>
  );
}

export default App;
