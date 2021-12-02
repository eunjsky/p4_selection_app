import React, { Component } from 'react';
import styles from './SelectionView.module.css';
import { Link } from "react-router-dom";
import { getSelections } from '../../services/selections';
import SelectionAdd from '../SelectionAdd/SelectionAdd';
import Selection from '../Selection/Selection';

class SelectionView extends Component {
    constructor(props){
        super(props)

        this.state = {
            selections: []
        }
    }


    async componentDidMount(){

        const selections = await getSelections() || []
        this.setState({selections})
        console.log({selections})
    }

    render() {
        return(
            <div className={styles.viewcontainer}>
            <section className={styles.selectionview}>
            <h2 className={styles.title}>Selection View</h2>
           
            {
            this.state.selections.length > 0 &&
            <div>
                { this.state.selections.map((selection, idx) => <div key ={idx}> 
                <Link to ={`/selections/${selection._id}`}>
                <div><Selection key={selection.id} selection={selection} /></div>
                </Link>
                </div>)}
            </div>
            }
            {
                !this.state.selections.length === 0 && <div>Dont have data</div>
            }
    
    </section>
    </div>)
    }
}
export default SelectionView;