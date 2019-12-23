import React, {Component} from 'react';
import axios from "axios";

import Movie from "./Movie";

class App extends Component {

    //상태값
    state = {
        isLoding : true,
        movie : []
    };

    getMovies = async() => {
        const {
            data : {
                data: {movies}
            }
        } =  await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies, isLoding : false})
    };

    //라이프사이클 함수
    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoding : false})
        }, 2000);
        this.getMovies();
    }

    render() {

        const {isLoding, movies} = this.state;
        return (
            <div>
                {isLoding
                    ? "Loding..."
                    : movies.map(movie => (
                        <Movie
                            key={movie.id}
                            year={movie.year}
                            summary={movie.summary}
                            id={movie.id}
                            title={movie.title}
                            rating={movie.rating}
                            poster={movie.medium_cover_image}
                        />
                    ))}
            </div>
        );
    }
}

export default App;