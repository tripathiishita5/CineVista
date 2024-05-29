
const Card = ({image,title})=>{
    return (
      <div className="w-40">
        <img
          className="w-full h-full hover:shadow-2xl hover:shadow-zinc-600"
          src={`https://image.tmdb.org/t/p/w500${image}`}
          onError={(e) =>
            (e.target.src =
              "https://4.bp.blogspot.com/-TpcA_rn2daE/V2LUiuyAyOI/AAAAAAAALhA/189W1xoBhC0UapHkK99iNB2UYrDg5LkqgCLcB/s1600/No-Poster.png")
          }
        />
        <p className="text-zinc-400 text-center">{title?.split(0, 20)}</p>
      </div>
    );
    
}

export default Card;