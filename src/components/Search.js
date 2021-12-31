import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import "./style.css"

const Search1 = () => {

    const [state, setState] = useState([]);
    const [movie, setMoive] = useState("avenger")


    const imgUrl = "https://image.tmdb.org/t/p/w500";
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const fetchData = async () => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${movie}`
        // console.log(url);
        let data = await fetch(url);

        let parseData = await data.json();
        setState(parseData.results);
    };
    return (
        <>
            <div id="form1">
                <form action=""></form>
                <input type="text" placeholder='Enter movie name' onChange={(e) => { setMoive(e.target.value) }} />
                <button className='button1' onClick={fetchData}><strong>submit</strong></button>

            </div>

            <div id="container4">

                {state.map((data) => {

                    return (

                        <div className="card" id='card3' key={data.id} >
                            <img
                                id='img3'
                                src={imgUrl + data.poster_path}
                                className="card-img-top"
                                alt="..."
                                onClick={() => Swal.fire(
                                    {
                                        title: data.original_title,
                                        text: data.overview,
                                        imageUrl: imgUrl + data.poster_path,
                                        imageWidth: 350,
                                        imageHeight: 450,
                                        imageAlt: 'Custom image',
                                    }
                                )}
                            />
                        </div>
                    );
                })}
            </div>
        </>

    );
}

export default Search1
