import React, { Component } from 'react';
import SelectionDetail from '../SelectionDetail/SelectionDetail';
import SelectionMapView from '../SelectionMapView/SelectionMapView';
import styles from './SelecAndMapView.module.css'

class SelecAndMapView extends Component {
    render() {
        return (
            <div className={styles.bothview}>
            <div className={styles.container}>
                <SelectionDetail/>
                <SelectionMapView/>
            </div>
            </div>
        );
    }
}

export default SelecAndMapView;