const MovieCard = ({posterUrl, title, rating, description}) => {
    return (
        <div className="drop-shadow-[0_2px_2px_rgba(155,155,155,0.25)] box-border border-2 border-solid border-[#d8d8d8] rounded-lg">
            <div>
                <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/original${posterUrl}`} />
            </div>
            <div className="p-1 font-roboto text-xs">
                <div className="flex justify-between mb-2">
                    <div className="font-medium text-[#4a4a4a]">
                        {title}
                    </div>
                    <div className="text-[#9b9b9b]">
                        ({rating})
                    </div>
                </div>
                <div className="text-[#4a4a4a] line-clamp-2">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;