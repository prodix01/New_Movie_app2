import React, {Component} from 'react';

class App extends Component {

    //상태값
    state = {
        isLoding : true,
        movie : []
    };

    //라이프사이클 함수
    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoding : false})
        }, 2000);
    }

    render() {

        const {isLoding} = this.state;
        return (
            <div>
                {isLoding ? "Loding..." : "We are Ready!"}
            </div>
        );
    }
}

export default App;