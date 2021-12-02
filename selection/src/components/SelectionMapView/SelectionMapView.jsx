import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './SelectionMapView.module.css';
import Selection from '../Selection/Selection';

const SelectionMapView = ({selections}) => (
    <Container className={styles.mapcontainer}>
    <section className={styles.selectionmapview}>
        <h2 className={styles.title}>Map View</h2>
       
    </section>
    </Container>
        
    );

export default SelectionMapView;