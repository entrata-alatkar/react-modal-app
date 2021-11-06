import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const onAdduserHandler = (uName, uAge) => {
    setUsers((previousUsers) => {
      return [
        ...previousUsers,
        {
          name: uName,
          age: uAge,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <>
      <AddUser onAdduser={onAdduserHandler} />
      <UsersList users={users} />
    </>
  );
}

export default App;
