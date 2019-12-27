import React, {Component} from 'react';
import axios from "axios";

import "./App.css";
import Movie from "./Movie";

class App extends Component {

    //상태값
    state = {
        isLoading : true,
        movie : []
    };

    getMovies = async() => {
        const {
            data : {
                data: {movies}
            }
        } =  await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies, isLoading : false})
    };

    //라이프사이클 함수
    componentDidMount() {
        this.getMovies();
    }

    render() {

        const {isLoading, movies} = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {
                            movies.map(movie => (
                                <Movie
                                    key={movie.id}
                                    year={movie.year}
                                    summary={movie.summary}
                                    id={movie.id}
                                    title={movie.title}
                                    rating={movie.rating}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                />
                            ))
                        }
                    </div>
                )}
            </section>
        );
    }
}

export default App;