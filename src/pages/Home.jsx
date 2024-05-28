import Trending from '../components/Trending.jsx'
import NowPlaying from '../components/NowPlaying.jsx';

const Home = () =>{
    return (
      <div className=" h-auto overflow-hidden bg-slate-800 px-5 py-3">
       
        <h2 className="text-white text-xl">In Theatres</h2>
        <NowPlaying />
        <h2 className="text-white text-xl mt-7">Trending Movies</h2>
        <Trending />
      </div>
    );
}
export default Home;