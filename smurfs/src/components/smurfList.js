import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {fetchSmurfs} from '../actions/actions';

const SmurfList = (props) => {
    console.log(props.smurfs)
    useEffect(() => {
        props.fetchSmurfs()
    }, [])

    return(
        <>
        <div className='smurfs-container'>
            {props.smurfs.map(item => {
                return(
                    <div className='smurf-card' key={item.name}>
                        <h3>{item.name}</h3>
                        <p>{item.age}</p>
                        <p>{item.height}</p>
                    </div>
                )
            })}
        </div>
        </>
    )
};

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfList)