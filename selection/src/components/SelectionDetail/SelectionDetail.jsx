import React,  { Component } from 'react'
import { Switch, Link, Route, BrowserRouter as Router  } from 'react-router-dom'
import { getSelections } from '../../services/selections';
import SelectionFormUpdate from '../SelectionFormUpdate/SelectionFormUpdate';
import style from './SelectionDetail.module.css'

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
        console.log(selections)
        console.log("this is the id")
        console.log(currentSelection._id)
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
            <Router>
                <Switch>
                <Route exact path={this.props.match.path}>
                <div className={style.wrapper}>
                    <div className={style.card}>
                    <div className={style.container}>
                        <div>{this.state.selection.name}</div> 
                    </div>
                     {/* <button onClick={this.toggleShowEditForm}>Edit</button> */}
                     <Link to={ `/selections/${this.props.match.params.id}/edit` }
                     >edit</Link>
                    </div>
                    
                </div>
                </Route>
                <Route path={ `${this.props.match.path}/edit` }>
                    <SelectionFormUpdate selection={this.state.selection} />
                </Route>
            </Switch>
            </Router>
        )
    }
}

export default SelectionDetail