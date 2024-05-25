import AiringToday from "../components/AiringToday";
import PopularSeries from "../components/PopularSeries";

const Series = () => {
    return (
      <div>
        <h2 className="text-white text-xl">Airing Today</h2>
        <AiringToday />
        <h2>Popular Series</h2>
        <PopularSeries />
      </div>
    );
}
export default Series;