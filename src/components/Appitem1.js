import React from 'react';
import CreateReactClass from 'create-react-class';
import './Appitem.css';

const Appitem = CreateReactClass({
   getInitialState(){
       return(
            {delItems: false}
       )
   },
    render(){
         console.log(this.props.color);

        const divStyle =  {backgroundColor: this.props.color};
            const textStyle = {height: "auto"};

        return(
            <div>
                {this.state.delItems !== true ?
                    <div className="col-12 col-sm-6 col-lg-3" style={divStyle}>
                    
                    {/* <button><i class="fas fa-times-circle"></i></button> */}
                        {/* <input type="button" value="close" onClick={this.buttonHandler}/> */}
                        
                        <div className="row">
                            
                            <div className="col">
                                <h3>{this.props.name}</h3>
                            </div>
                            <div className="col-1">
                                <i class="fas fa-times-circle" onClick={this.buttonHandler}></i>        
                            </div>
                        </div>
                        <div className="row">
                            <p style={textStyle}>{this.props.text}</p>
                        </div>
                        
                        
                    </div> : ""
                }
            </div>    
        )
    },
    buttonHandler: function() {
        if(this.state.delItems === false){
            this.setState({delItems: true})
        } else {
            this.setState({delItems: false})
        }
    }
});

export default Appitem;