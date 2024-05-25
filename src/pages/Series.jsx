import AiringToday from "../components/AiringToday";
import PopularSeries from "../components/PopularSeries";
import TopRatedSeries from "../components/TopRatedSeries";

const Series = () => {
    return (
      <div className=" h-auto overflow-hidden bg-slate-800 px-5 py-3">
        <h2 className="text-white text-xl">Airing Today</h2>
        <AiringToday />
        <h2 className="text-white text-xl mt-5">Popular Series</h2>
        <PopularSeries />
        <h2 className="text-white text-xl mt-5">Top Rated Series</h2>
        <TopRatedSeries />
      </div>
    );
}
export default Series;