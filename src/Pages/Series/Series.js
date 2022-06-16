import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import CustomPagination from '../../Components/Pagination/CustomPagination';
import SingleContent from '../../Components/SingleContent/SingleContent';
import Genres from '../../Components/Genres/Genres';
import useGenre from '../../hooks/useGenre';


const Series = () => {
    const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);


  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover...{process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );

    setContent(data.results);
    setNumOfPages(data.total_pages);
};

useEffect(() => {  
  window.scroll(0, 0);     
  fetchSeries();
   // eslint-disable-next-line
}, [page, genreforURL])


    return (
        <div>
           <span className="pageTitle">Discover Series</span>  

           <Genres 
           type="tv" 
          selectedGenres={selectedGenres} 
          setSelectedGenres={setSelectedGenres} 
          genres={genres} 
          setGenres={setGenres}
          setPage={setPage}
          /> 

          {/* {
            console.log('selectedGenres =', selectedGenres),
            console.log('content =', content)
          } */}

           <div className="trending">
           {
               content && content.map((c) =>(
                   <SingleContent 
                   key={c.id} 
                   id={c.id} 
                   poster={c.poster_path} 
                   title={c.title || c.name} 
                   date={c.first_air_date || c.release_date} 
                   media_type='tv'
                   vote_average={c.vote_average}
                   />
               ))
           }
        </div>
        {
          numOfPages > 1 &&(
            <CustomPagination setPage={setPage} numOfPages={numOfPages}/> 
          )}
        </div>
    )
}

export default Series
