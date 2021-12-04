import React, { Component } from 'react';
import SelectionDetail from '../SelectionDetail/SelectionDetail';
import MapView from '../MapView/MapView';
import styles from './DetailAndMapView.module.css'

class DetailAndMapView extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className={styles.container}>
                {console.log('this is props')}
                {console.log(this.props.match.path)}
                <div className={styles.incontainer}>
                <SelectionDetail />
                <MapView />
            </div></div>
        );
    }
}

export default DetailAndMapView;