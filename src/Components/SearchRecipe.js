import React, { Component } from 'react';
import {Form,FormGroup,FormControl,FormLabel,Button} from 'react-bootstrap';

class SearchRecipe extends Component {
    constructor(){
        super();
        this.state ={
            ingredients:'',
            dishName:''

        }
    }
    search(){
        let {ingredients,dishName} = this.state;
        const url=`http://www.recipepuppy.com/api/?i=${ingredients}&q=${dishName}`;

        fetch(url,{
            method:'GET'
        })
        .then(response=> response.json())
        .then(json=>console.log('recipes',json))
    }
    render() {
        return (
            <Form inline>
                <FormGroup>
                    <FormLabel>Ingredients</FormLabel>
                    {' '}
                    <FormControl type="text" placeholder="List your ingredients" onChange={e=>this.setState({ingredients: e.target.value })} / >
                </FormGroup>
                {' '}
                <FormGroup>
                    <FormLabel>Dish Name</FormLabel>
                    {' '}
                    <FormControl type="text" placeholder="Enter the name of the dish" onChange={e=>this.setState({dishName: e.target.value })} />
                </FormGroup>
                {' '}
                <Button onClick={()=> this.search()}>Submit</Button>
                
            </Form>
        )
    }
}

export default SearchRecipe;
