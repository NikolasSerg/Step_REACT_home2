import React from 'react';
import ReactDOM from 'react-dom';
import CreateReactClass from 'create-react-class';
import Textarea from './components/Textarea';
import Applist from './components/Applist';

// const notes = [
//     {
//         id: 1,
//         name: "What is Lorem Ipsum?",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         color: "rgb(70, 41, 5)"
//     },
//     {
//         id: 2,
//         name: "Why do we use it?",
//         text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//         color: "rgb(48, 100, 5)"
//     },
//     {
//         id: 3,
//         name: "Where does it come from?",
//         text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
//         color: "rgb(5, 100, 56)"
//     },
// ]



const App = CreateReactClass({
    getInitialState() {
        return {
            notes: []
            //   notes
        };
    },

    handlerNewNote: function (newNote) {
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    },
    // updateStorage: function() {
    //     let note = JSON.stringify(this.state.notes);
    //     localStorage.setItem("notes", note);
    // },
    componentDidMount() {
        let localDate = JSON.parse(localStorage.getItem('notes'));
        // console.log(localDate);
        if (localDate) {
            this.setState({ notes: localDate })
        }
    },
    componentDidUpdate() {
        // this.updateStorage()
        let note = JSON.stringify(this.state.notes);
        localStorage.setItem("notes", note);
        console.log(this.state)
    },


    buttonHandler: function (e) {
        if (e) {
            console.log('its work');
            console.log(this.state.notes);
            console.log(e);
            let oldState = this.state.notes;

            let changeSt = oldState.filter(iterator => {
                if(iterator.id !== e){
                    console.log("iterator work");
                    return (iterator);
                } else {
                    console.log("iterator doesnt work");
                    return("");
                }
            }
            );
            console.log(changeSt)
            console.log(this.state.notes)
            this.setState({notes: changeSt});
        } else {
            console.log('dont work')
        }
    },


    // stateChangeItem: function() {
    //     this.state.notes
    // },
    render() {
        // console.log(this.state.notes + " - index");
        return (
            <div className="container-fluid">
                <Textarea onClick={this.handlerNewNote} />
                <Applist notes={this.state.notes} buttonHandler={this.buttonHandler} />
            </div>
        )
    }
})



ReactDOM.render(<App />, document.getElementById('root'));