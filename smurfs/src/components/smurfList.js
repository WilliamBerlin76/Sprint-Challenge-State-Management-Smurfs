import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {fetchSmurfs} from '../actions/actions';
import {postSmurfs} from '../actions/actions';
const SmurfList = (props) => {
    const [newSmurf, setNewSmurf] = useState({
                                        name: '',
                                        age: null,
                                        height: ''
                                    })
                                    
    useEffect(() => {
        props.fetchSmurfs()
    }, [])

    const handleChangesName = e => {
        setNewSmurf({name: e.target.value,
                    age: newSmurf.age,
                    height: newSmurf.height})
    };
    const handleChangesAge = e => {
        setNewSmurf({name: newSmurf.name,
                    age: e.target.value,
                    height: newSmurf.height})
    };
    const handleChangesHeight = e => {
        setNewSmurf({name: newSmurf.name,
                    age: newSmurf.age,
                    height: e.target.value})
    }
    console.log(newSmurf)

    const submitSmurf = e => {
        props.postSmurfs(newSmurf)
    }
    return(
        <>
        <form>
            <input
                placeholder='Name'
                type='text'
                name="smurfName"
                value={newSmurf.name}
                onChange={handleChangesName}
            />
            <input
                placeholder='Age'
                type='text'
                name="smurfAge"
                value={newSmurf.age}
                onChange={handleChangesAge}
            />
            <input
                placeholder='Height'
                type='text'
                name="smurfHeight"
                value={newSmurf.height}   
                onChange={handleChangesHeight}         
            />
        </form>
        <button type='submit' onClick={submitSmurf} >Add Smurf!</button>
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
    { fetchSmurfs, postSmurfs }
)(SmurfList)