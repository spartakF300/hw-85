import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getAlbums} from "../../store/actions/actionsAlbums";
import './Albums.css'
import {NavLink} from "react-router-dom";
const Albums = (props) => {
    useEffect(()=>{
        props.getAlbums(props.match.params.id);
        console.log('use')
    },[]);
    
    return (
        <>
            <h1 style={{margin:'20px'}}>Albums</h1>
        <div className="album-container">

            {props.albums && props.albums.map(albums =>{
              
                return <NavLink className="album-container" to={`/tracks/${albums._id}?album=${albums.title}&artist=${albums.artist.name}` } key={albums._id}>
                   <h3>Альбом: {albums.title}</h3>
                   <h4>год: {albums.year}</h4>
                   <div className="album-img">
                       <img
                           style={{width:"100%", height:"100%"}}
                           src={'http://localhost:8000/uploads/' + albums.image}
                           alt="Card image cap"
                       />
                   </div>
               </NavLink>
            })}

        </div>
            </>
    );
};
const mapStateToProps = (state) => {
    return {
        albums: state.albums.albums,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAlbums: (data) => dispatch(getAlbums(data)),

    }
};
export default connect(mapStateToProps,mapDispatchToProps) (Albums);