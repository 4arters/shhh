import { useEffect, useState } from "react";

export default function Home() {
  const [happy, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=whitep4nth3r"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div className="grid grid-cols-3 text-white">
        {happy.map((art) => (
        <ul className="m-8 border rounded-md">
          <li className="content-around flex flex-col">
            <p>title: {art.title}</p>
            <p  className="hover:overflow-auto hover:overflow-y-scroll h-20">desc : {art.description}</p>
            <h2>name : {art.user.name}</h2>
            <img src={art.social_image}></img>
          </li>
          </ul>
        ))}
        </div>
      
    </div>
  );
}