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
        //  console.log(this.props.color);
        //  console.log(this.props.text);
        //  console.log(this.props.id);

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
                                <i className="fas fa-times-circle" onClick={this.buttonHandler}></i>        
                            </div>
                        </div>
                        <div className="row">
                            <p style={textStyle}>{this.props.text}</p>
                            {/* <p>{this.props.key}</p> */}
                            <p>{this.props.id}</p>
                        </div>
                        
                        
                    </div> : ""
                }
            </div>    
        )
    },
    // buttonHandler: function() {
    //     if(this.state.delItems === false){
    //         this.setState({delItems: true})
    //     } else {
    //         this.setState({delItems: false})
    //     }
    // }
    buttonHandler: function(){
        let proba = this.props.id;
        this.props.buttonHandler(proba);
        // console.log(this.props.onClick);
    }
    
});

export default Appitem;