import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";

// Content Delivery API Docs
// https://www.contentful.com/developers/docs/references/content-delivery-api/

const contentful = require("contentful");
const client = contentful.createClient({
  space: "hwer1o9twl15",
  accessToken: "7gpBPhLoctZMXg7aAASybTUjH2VjUXOXJTe_P2Tsrn4",
});

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => setPosts(response.items))
      .catch(console.error);
  }, []);

  console.log(posts);

  return (
    <div className="App">
      <Posts posts={posts} />
    </div>
  );
}

export default App;
