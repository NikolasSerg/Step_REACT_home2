import React from 'react';
import CreateReactClass from 'create-react-class';

const textareastyle = {
    width: '30%'
}
const style = {
    marginBottom: '15px'
}
const buttonstyle = {
    display: 'block'
}


const Textarea = CreateReactClass({
    getInitialState: function () {
        return {
            text:"",
            error:""
        };
    },
    // handlerNewNotes: function() {
    //     console.log(this.refs.note.value);

    //     const note = {
    //         text:this.state.text,
    //         color: "gray"
    //     };
    //     this.props.onClick(note);
    // },
    handlerNewNotes: function() {
        if(this.state.text){
            let newNotes = {
                text: this.state.text,
                color: "red",
                id: Date.now()
            }
            this.props.onClick(newNotes);
        };
        if(this.state.text === ""){
            this.setState({
                error:"empty value"
            })
        } else {
            this.setState({
                error: ""
            })
        }
    },
    handlerChangeTextArea: function (event) {
        this.setState({
            text: event.target.value
        });
        console.log(event.target.value)
    },
   
    render(){
        return (
            <div className="row" style={style}>
                <div className="col-12">
                    <textarea style={textareastyle} ref={'note'} onChange={this.handlerChangeTextArea}></textarea>
                    {this.state.error !== "" ? <div>{this.state.error}</div>: ""}
                    <button style={buttonstyle} onClick={this.handlerNewNotes}>Add</button>
                </div>
            </div>
        )
    }
})  

export default Textarea;