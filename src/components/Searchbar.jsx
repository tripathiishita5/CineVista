import {  useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
const Searchbar = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRmZWU2YzQ5YTJlZTAxNzE5ZTViOTU1OThhNzk2OCIsInN1YiI6IjY2MTY1OGEwMjQyZjk0MDE3ZGM0YTBmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNo2wYB8V_OQgd15h_kr_U0ORyJt8p9vvjpDqUeaZiM'
        }
      };
    const [query,setQuery] =useState("");
    const [data, setData] = useState(null);

    useEffect(()=>{
        getData();
    },[query])
     
    const getData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`,options);
        const data = await response.json();
        // console.log(data)
        setData(data.results);
    }

    return(
        <div>

            <div className="flex w-64 rounded px-2 bg-blue-300">
                <div className="pt-3">
                    <IoSearch className="text-black text-lg" />
                </div>
                <input  className="rounded-lg w-60 bg-blue-300 p-2 border-none focus:border-none focus:outline-none text-black" onChange={(value)=> setQuery(value.target.value) } value={query} placeholder="What you want to see today?"/>
            </div>

            {query && <div className="w-64 h-60 absolute mt-2 rounded text-black bg-gray-300 overflow-auto overflow-x-hidden">

               { data.map((val) => <div className="w-56 py-2 px-4 border-b-2 flex gap-3 hover:bg-gray-400">
                    <img className="w-10 h-12 rounded" src={`https://image.tmdb.org/t/p/w500${(val?.poster_path || val?.profile_path)}`}
                    onError={(e) => {
                        e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAja6c9Ip37JMYpOmIIe9JGv16LvccS2OoCpr2Evz5Gv2-ImNwePvBoxNWctyWlJwYmA&usqp=CAU';
                      }} />
                    
                    <p className="flex items-center">{(val?.name || val?.title || val?.original_name)?.slice(0,20)}...</p>
                </div>)}

            </div>}
        </div>
        
    )
}
export default Searchbar;