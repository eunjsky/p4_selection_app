import React from 'react'
import styles from './Home.module.css'
import img from './question.png'; 


function Home(props) {

    return (
        <div className={styles.mainbox}>
          
            <p className={styles.title}>Are you ready to select one? 😎</p>
            <br/>
            <div><img className={styles.img} src={img}/></div>
            <p className={styles.para}>It will help you make decisions.<br/>
            </p>



        </div>
    )
}


export default Home

