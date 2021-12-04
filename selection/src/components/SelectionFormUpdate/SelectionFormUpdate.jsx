import React, { useState } from 'react';
import styles from './SelectionFormUpdate.module.css'
import { updateSelections, deleteSelections } from '../../services/selections';
import { useHistory } from 'react-router-dom';

function SelectionFormUpdate(props){

    /* save changes made to the student */
    const [name, setEditName] = useState('')
    const [cuisines, setEditCuisines] = useState('')
    const [address, setEditAddress] = useState('')
    const [review, setEditReview] = useState('')
    const [description, setEditDescription] = useState('')
    const history = useHistory()

    const nameEditTo = (event) => {
        setEditName(event.target.value)
    };
    const addressEditTo = (event) => {
        setEditAddress(event.target.value)
    };
    const cuisinesEditTo = (event) => {
        setEditCuisines(event.target.value)
    }
    const reviewEditTo = (event) => {
        setEditReview(event.target.value)
    }
    const DescEditTo = (event) => {
        setEditDescription(event.target.value)
    }


    const handleFormSubmit = (event) => {
        event.preventDefault()
        const data = {
            name,
            cuisines,
            address,
            review,
            description
            
        }
        console.log(props.selection.id)

        
        const res = updateSelections(data, props.selection.id)
        history.push('/selections')
        
        //this.setState
        
    
    };
    
    const onDelete = ( event )=> {
        event.preventDefault()
        const result = deleteSelections( props.selection.id)
        history.push('/selections')
        console.log(history)
    };
    

    return(
        <section className={styles.container}>
        <div className={styles.title}>Edit Selection Info</div>
        <form className={styles.form}>
            <input type="text" defaultValue={props.selection.name} className={styles.input} placeholder="Name" onChange={nameEditTo}/>

            <select defaultValue={props.selection.cuisines} className={styles.input} onChange={cuisinesEditTo}>
                <option>African cuisine</option>
                <option>Americas cuisine</option>
                <option>Asian cuisine</option>
                <option>European cuisine</option>
                <option>Oceanian cuisine</option>
                <option>Others</option>
            </select>
            
            <input type="text" defaultValue={props.selection.address} placeholder="Address" className={styles.input} onChange={addressEditTo} />
            <textarea defaultValue={props.selection.review} placeholder="Review" className={styles.textarea} onChange={reviewEditTo} ></textarea>
            <textarea defaultValue={props.selection.description} placeholder="Description" className={styles.textarea} onChange={DescEditTo}></textarea>
            <button className={styles.button} onClick={handleFormSubmit} >Submit</button>
            <button className={styles.button} onClick={onDelete}>Delete</button>
        </form>
        </section> 
    )
}

export default SelectionFormUpdate;





// import React, { Component } from "react";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';

// export default class SelectionFormUpdate extends Component {

//   constructor(props) {
//     super(props)

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

//   componentDidMount() {
//     axios.get(`http://localhost:4000/selections/update/${selection._id}` + this.props.match.params.id)
//       .then(res => {
//         this.setState({
//             name: res.data.name,
//             cuisines: res.data.cuisines,
//             address: res.data.address,
//             review: res.data.review,
//             description: res.data.description
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

//   componentDidMount() {
//     // Simple PUT request with a JSON body using fetch
//     const requestOptions = {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React PUT Request Example' })
//     };
//     fetch('http://localhost:4000/api/selections', requestOptions)
//         .then(response => response.json())
//         .then(data => this.setState({ postId: data.id }));
// }

//   onChnageName(event){
//     this.setState({name:event.target.value})
// }
// onChnageCuisines(event){
//     this.setState({cuisines:event.target.value})
// }
// onChnageAddress(event){
//     this.setState({address:event.target.value})
// }
// onChnageReview(event){
//     this.setState({review:event.target.value})
// }
// onChnageDescription(event){
//     this.setState({description:event.target.value})
// }

// OnSubmit(event){
//     event.preventDefault()

//     const slelecctionObject = {
//         name: this.state.name,
//         cuisines: this.state.cuisines,
//         address: this.state.address,
//         review: this.state.review,
//         description: this.state.description
//     }


//     axios.put(`http://localhost:4000/selections/${selection._id}` + this.props.match.params.id, slelecctionObject)
//       .then((res) => {
//         console.log(res.data)
//         console.log('Student successfully updated')
//       }).catch((error) => {
//         console.log(error)
//       })

//     this.props.history.push('/selections')
//   }


//   render() {
//     return (
//     <div>
//         <form className={styles.form} onSubmit={this.onSubmit}>
//             <input type="text" name="name" placeholder="Name" className={styles.input} value={this.state.name} onChange={this.onChnageName}/>
//             <input type="text" name="cuisines" placeholder="Cuisines" className={styles.input} value={this.state.cuisines} onChange={this.onChnageCuisines}/>
//             <input type="text" name="address" placeholder="Address" className={styles.input} value={this.state.address} onChange={this.onChnageAddress}/>
//             <textarea name="review" placeholder="Review" className={styles.textarea} value={this.state.review} onChange={this.onChnageReview}></textarea>
//             <textarea name="description" placeholder="Description" className={styles.textarea} value={this.state.description} onChange={this.onChnageDescription}></textarea>
//             <button className={styles.button} name="save" onClick={onSubmit}>Add</button>
//         </form>
//     </div>);
//   }
// }