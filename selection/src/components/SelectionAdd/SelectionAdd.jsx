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
        <section> 
        <h4>Selection Form</h4>
        <form className={styles.form}>
            <input type="text" name="name" placeholder="Name" className={styles.input} onChange={handleNameChange}/>
            <input type="text" name="cuisines" placeholder="Cuisines" className={styles.input} onChange={handleCuisinesChange}/>
            <input type="text" name="address" placeholder="Address" className={styles.input} onChange={handleAddressChange}/>
            <textarea name="review" placeholder="Review" className={styles.textarea} onChange={handleReviewChange}></textarea>
            <textarea name="description" placeholder="Description" className={styles.textarea} onChange={handleDescriptionChange}></textarea>
            <button className={styles.button} name="save" onClick={onSubmit}>Add</button>
        </form>
        </section> 
        
       
    )
}

export default SelectionAdd;









// import React, { Component } from 'react';

// class SelectionAdd extends Component {
//     constructor(props){
//         super(props)

//         this.onChnageName = this.onChnageName.bind(this);
//         this.onChnageCuisines = this.onChnageCuisines.bind(this);
//         this.onChnageAddress = this.onChnageAddress.bind(this);
//         this.onChnageReview = this.onChnageReview.bind(this);
//         this.onChnageDescription = this.onChnageDescription.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             name:'',
//             cuisines:'',
//             address:'',
//             review:'',
//             description:'',
//         }
//     }

//     onChnageName(event){
//         this.setState({name:event.target.value})
//     }
//     onChnageCuisines(event){
//         this.setState({cuisines:event.target.value})
//     }
//     onChnageAddress(event){
//         this.setState({address:event.target.value})
//     }
//     onChnageReview(event){
//         this.setState({review:event.target.value})
//     }
//     onChnageDescription(event){
//         this.setState({description:event.target.value})
//     }

//     OnSubmit(event){
//         event.preventDefault()

//         const slelecctionObject = {
//             name: this.state.name,
//             cuisines: this.state.cuisines,
//             address: this.state.address,
//             review: this.state.review,
//             description: this.state.description
//         }

//         this.setState({ name: '', cuisines: '', address: '', review: '', description: ''})
//     }

//     render() {
//         return (
//             <section> 
//             <h4>Selection Form</h4>
//             <form className={styles.form} onSubmit={this.onSubmit}>
//             <input type="text" name="name" placeholder="Name" className={styles.input} onChange={this.onChnageName}/>
//             <input type="text" name="cuisines" placeholder="Cuisines" className={styles.input} onChange={this.onChnageCuisines}/>
//             <input type="text" name="address" placeholder="Address" className={styles.input} onChange={this.onChnageAddress}/>
//             <textarea name="review" placeholder="Review" className={styles.textarea} onChange={this.onChnageReview}></textarea>
//             <textarea name="description" placeholder="Description" className={styles.textarea} onChange={this.onChnageDescription}></textarea>
//             <button className={styles.button} name="save" onClick={onSubmit}>Add</button>
//         </form>
//         </section> 
//         );
//     }
// }

// export default SelectionAdd;