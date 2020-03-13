import React, {Component} from 'react';
import {connect} from "react-redux";
import {getTracks} from "../../store/actions/actionsTracks";

class Tracks extends Component {
    componentDidMount() {
        this.props.getTracks(this.props.match.params.id);


    }
query = (param)=>{
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const item = params.get(param);
    return item
};
    render() {
        return (
            <div>
                <div style={{margin:'5px auto 5px 10px',textAlign: 'initial'}}>
                    <h1>Имя артиста: {this.query('artist')}</h1>
                    <h2>Название альбома: {this.query('album')}</h2>
                </div>

                {this.props.tracks && this.props.tracks.map(item =>{

                    return <div className="track"  key={item._id}>
                        <h3>№{item.number}</h3>
                        <h4>Название трэка: {item.title}</h4>
                        <p> Продолжительность: {item.duration}</p>
                    </div>
                })}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        tracks: state.tracks.tracks,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTracks: (data) => dispatch(getTracks(data)),

    }
};
export default connect(mapStateToProps,mapDispatchToProps) (Tracks);

