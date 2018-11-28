import React from 'react';
import CreateReactClass from 'create-react-class';
// import Appitem from './Appitem';
import Appitem from './Appitem1';

const Applist = CreateReactClass({
    getInitialState () {
        return {
        };
      },
   
    render(){
        console.log(this.props.id);
        return (
            <div className="row">
                {this.props.notes.map((iterator) => {
                    return <Appitem key={iterator.id} id={iterator.id} text={iterator.text} color={iterator.color} buttonHandler = {this.props.buttonHandler} />
                })}
            </div>
        )
        
    },
   
})

export default Applist;