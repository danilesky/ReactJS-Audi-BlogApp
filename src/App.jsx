import { useEffect, useState } from "react";
import "./App.css";
import { fetchPosts } from "./services/posts.service";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const asyncFn = async () => {
      const data = await fetchPosts("someUrl.com");
      if (data) {
        setPosts(data.list);
      }
    };
    asyncFn();
  }, []);
  return <div className="App">Hello App</div>;
}

export default App;
