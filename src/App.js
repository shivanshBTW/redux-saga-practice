import React from 'react';
import './App.css';
import {connect} from "react-redux";

function App(props) {
    // console.log(props);
    return (
        <div className="App">
            {props.images.map((image, index) => {
                return <img src={image} alt={'gif'} key={index}/>
            })}
            <button onClick={props.fetchGIF}>Add</button>
        </div>
    );
}

let mapStateToProps = state => {
    // console.log(state);
    return {
        images: state
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        fetchGIF: () => dispatch({type: 'FETCH_IT'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
