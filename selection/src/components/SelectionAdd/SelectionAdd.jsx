import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SelectionAdd.module.css';
import { createSelections } from '../../services/selections';
//import { useNavigate } from 'react-router-dom';



function SelectionAdd(){
    // const {[name, setName],[cuisines, setCuisines],[address, setAddress],[review, setReview],[description, setDescription]} = useState('')
    const [name, setName] = useState('')
    const [cuisines, setCuisines] = useState('')
    const [address, setAddress] = useState('')
    const [review, setReview] = useState('')
    const [description, setDescription] = useState('')
    const history = useHistory()
    //const navigate = useNavigate();
    
    
    const handleNameChange = (event) => {
        setName(event.target.value)
    };
    const handleAddressChange = (event) => {
        setAddress(event.target.value)
    };
    const handleCuisinesChange = (event) => {
        setCuisines(event.target.value)
    }
    const handleReviewChange = (event) => {
        setReview(event.target.value)
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }


    const onSubmit = async (event) => {
        event.preventDefault()
        const data = {
            name,
            cuisines,
            address,
            review,
            description,
        }
        console.log(data)
        const result = await createSelections(data)
        history.push('/selections')
        //navigate.push('/')
    };

    

    return(
        <section className={styles.container}> 
        <div className={styles.title}>Add a Selection</div>
        <form className={styles.form}>
            <input type="text" name="name" placeholder="Name" className={styles.input} onChange={handleNameChange}/>
            
            <select name="cuisines" className={styles.input} onChange={handleCuisinesChange}>
                <option>African cuisine</option>
                <option>Americas cuisine</option>
                <option>Asian cuisine</option>
                <option>European cuisine</option>
                <option>Oceanian cuisine</option>
                <option>Others</option>
            </select>
            
            <input type="text" name="address" placeholder="Address" className={styles.input} onChange={handleAddressChange}/>
            <textarea name="review" placeholder="Review" className={styles.textarea} onChange={handleReviewChange}></textarea>
            <textarea name="description" placeholder="Description" className={styles.textarea} onChange={handleDescriptionChange}></textarea>
            <button className={styles.button} name="save" onClick={onSubmit}>Add</button>
        </form>
        </section> 
        
       
    )
}

export default SelectionAdd;




