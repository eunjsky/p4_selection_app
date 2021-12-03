import React from 'react';
import styles from './Selection.module.css'



const Selection = ({selection}) => {
    
    const {
        name, address, review, cuisines, description } = selection;
    
    return (
    
    <div className={styles.container}>
        <div className={styles.card}>
        <div className={styles.header}>{name}</div>
        <p className={styles.bodytext}>
        Address: {address}<br/>
        Cuisines: {cuisines}<br/>
        Review: {review}<br/>
        Description: {description}<br/> </p>
        </div>
    </div>
   
    )
}
export default Selection;