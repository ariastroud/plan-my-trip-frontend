import { useState } from "react";
import axios from "axios";

const SearchDestination = ({ handleSelectedLocation }) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    // const [selectedLocation, setSelectedLocation] = useState(null);

    const handleInputChange = async (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);

        if (inputValue.length > 2 && inputValue !== "") {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/locationiq`, {
                    params: {
                      q: inputValue,
                    },
            });
            console.log(response.data);
            setResults(response.data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    } else {
        setResults([]);
    }};

    const handleSelect = (result) => {
        handleSelectedLocation(result);
        setQuery(result.display_name);
        setResults([]);
    }
    return (
        <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="input input-bordered w-full"
        placeholder="Search for a location"
      />
      {results.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 mt-1 w-full max-h-60 overflow-auto z-10">
          {results.map((result) => (
            <li
              key={result.place_id}
              onClick={() => handleSelect(result)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {result.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
    );
};

export default SearchDestination;