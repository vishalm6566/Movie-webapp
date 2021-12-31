import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';

const Upcoming = () => {

    const [state, setState] = useState([]);
    const imgUrl = "https://image.tmdb.org/t/p/w500";
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
        let data = await fetch(url);
        let parseData = await data.json();
        setState(parseData.results);

    };
    return (
        <>
            {state.map((data) => {
                return (
                    <div className="col-m" id="card1" key={data.id}>
                        <div className="card my-3 border-0">
                            <img
                                src={imgUrl + data.poster_path}
                                className="card-img-top"
                                alt="..."
                                onClick={()=>Swal.fire(
                                    {
                                        title: data.title,
                                        text: data.overview,
                                        imageUrl: imgUrl + data.poster_path,
                                        imageWidth: 350,
                                        imageHeight: 450,
                                        imageAlt: 'Custom image',
                                    }
                                  )}
                            />
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Upcoming
