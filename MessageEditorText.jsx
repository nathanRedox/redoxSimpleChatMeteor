MessageEditorText=React.createClass({
    getInitialState: function() {
        return {value: this.props.value};
    },
    componentWillMount()
    {
        //this.setState({value: this.props.defaultValue});
    },

    handleChange(event){
        //this.setState({value: event.target.value})
        this.props.value = event.target.value;
    },

   /* getTextValue: function(){
        return this.props.defaultValue;
    },
    clearTextValue: function(){
        return this.props.defaultValue = "";
    },*/


    render(){
            return(
                    <TextBox value={this.props.value}/>
                );
            }
        }
);