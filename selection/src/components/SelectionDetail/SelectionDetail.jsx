import React,  { Component } from 'react'
import { Switch, Link, Route, BrowserRouter as Router  } from 'react-router-dom'
import { getSelections } from '../../services/selections';
import SelectionFormUpdate from '../SelectionFormUpdate/SelectionFormUpdate';
import styles from './SelectionDetail.module.css'



class SelectionDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            selection: {},
            showEditForm: false
        }
    
    }

    async componentDidMount(){
        const id = this.props.match.params.id
        const selections = await getSelections()
        const currentSelection = selections.find(selection => selection._id === id )
        // console.log(selections)
        // console.log("this is the id")
        // console.log(currentSelection.id)
        const selectionObject = {name: currentSelection.name, cuisines: currentSelection.cuisines, address: currentSelection.address, review: currentSelection.review, description: currentSelection.description, id: currentSelection._id }


        this.setState({
            selection: selectionObject
        })
        console.log(this.state.selection)
    }

    /* use arrow functions when defining event handlers */
    toggleShowEditForm = () => {
        this.setState((state) => {
            return {showEditForm: !state.showEditForm}
        })
    }

    /* write method to update state, given some data */

    /* write method to send student detail to the api */
    //to use nested routes, the parent route must have a <Router> block
    render(){
        return (
            <div className={styles.detailview}>
                <div className={styles.section}>
            <Router>
                <Switch>
                <Route exact path={this.props.match.path}>
                <div className={styles.container}>
                <div className={styles.card}>
                <div className={styles.header}>{this.state.selection.name}</div>
                <p className={styles.bodytext}>
                Address: {this.state.selection.address}<br/>
                Cuisines: {this.state.selection.cuisines}<br/>
                Review: {this.state.selection.review}<br/>
                Description: {this.state.selection.description}<br/> </p>
                </div>

                     {/* <button onClick={this.toggleShowEditForm}>Edit</button> */}
                     <div><Link className={styles.button} to={ `/selections/${this.props.match.params.id}/edit` }
                     >Edit</Link></div>
                    </div>
                    
                
                </Route>
                <Route path={ `${this.props.match.path}/edit`}>
                    <SelectionFormUpdate selection={this.state.selection} />
                </Route>
            </Switch>
            </Router>
            
            </div>
            </div>
        )
    }
}

export default SelectionDetail