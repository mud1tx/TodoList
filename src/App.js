import react, { useState } from "react";
import AddUsers from "./Components/Users/AddUsers";
import AddList from "./Components/Users/AddList";

function App() {
  const [initialContent, setContent] = useState([]);
  const [removal, setRemoval] = useState();

  const contentHandler = (content) => {
    setRemoval("a");
    setContent((previous) => {
      return [...previous, { list: content, id: Math.random().toString() }];
    });
  };

  const deleteHandler = (text) => {
    setContent((previous) => {
      return previous.filter((li) => li.list !== text);
    });
    if (initialContent.length === 1) {
      setRemoval();
    }
    console.log(initialContent.length);
  };

  return (
    <div>
      <AddUsers onListSubmit={contentHandler} />
      {removal && (
        <AddList contentList={initialContent} onDeleteItem={deleteHandler} />
      )}
    </div>
  );
}

export default App;
