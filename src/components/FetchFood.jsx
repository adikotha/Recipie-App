import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function FetchFood({ foodArray, setFoodArray }) {
  const [query, setQuery] = useState("pasta");
  const Api_Key1=import.meta.env.VITE_API_KEY1;

  useEffect(() => {
    async function fetchFood() {
const res= await fetch(`${URL}?query=${query}&apiKey=${Api_Key1}`)

        const data = await res.json();
        setFoodArray(data.results);
      }

    fetchFood();
  }, [query]);

  return (
    
    <div>
      <center>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="input"
        />
      </center>
    </div>
  );
}
