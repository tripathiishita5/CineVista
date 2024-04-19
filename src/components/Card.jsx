
const Card = ({image,title})=>{
    return (
      <div className=" w-36 ">
        <img
          className="w-full h-full hover:shadow-2xl hover:shadow-zinc-600"
          src={`https://image.tmdb.org/t/p/w500${image}`}
        />
        <p className="text-zinc-400 text-center">{title.split(0,20)}</p>
      </div>
    );
    
}

export default Card;