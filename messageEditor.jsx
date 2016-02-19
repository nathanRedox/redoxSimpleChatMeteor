MessageEditor=React.createClass({
    getInitialState(){
        return { messageText: ''};
    },

    componentWillMount(){
        EventEmitter.subscribe("editMessage",this.refillData);
    },

    refillData(message){
        this.setState({messageText: message.text})
        ReactDOM.render( <MessageEditor message={message}/>, document.getElementById("popup-target"));
        $("#primary").modal();
    },

    onUpdate(event){

        var text = this.state.messageText.trim();
        Meteor.call("updateMessageText",this.props.message._id, text);

        // Clear form
        this.state.messageText = '';
    },

    handleChange(event){
        this.setState({messageText: event.target.value})

    },

        render(){
            var m = function(){
                text=undefined
            }

            if (this.props.message==undefined){
                m.text = undefined;
            }
            else
            {
                m = this.props.message;
            }

                return (
                    <div>

                        <div className="modal fade" id="primary" role="dialog" aria-labelledby="myModalLabel"
                             aria-hidden="true">
                            <div className="modal-dialog">

                                    <div className="modal-content">

                                        <div className="modal-header modal-header-info">
                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                                ×
                                            </button>
                                            <h1><i className="fa fa-bar-chart-o"></i> Edit Message</h1>
                                        </div>
                                        <div className="modal-body">

                                                <div>
                                                    <label>Original text:</label>
                                                    <p>{m.text}</p>
                                                </div>
                                                <div>
                                                    <form className="new-message" onSubmit={this.handleSubmit}>
                                                    <div className="form-group">
                                                        <label>Update to:</label>
                                                        <div className="input-group" ref="">
                                                            <input className="form-control" type="text" value={this.state.messageText}
                                                                onChange={this.handleChange}/>
                                                            <span className="input-group-btn">
                                                                <button type="button" className="btn btn-success pull-right"
                                                                        data-dismiss="modal" onClick={this.onUpdate}>Update
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    </form>
                                                </div>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-info pull-left"
                                                    data-dismiss="modal">Close
                                            </button>

                                        </div>

                                    </div>

                            </div>
                        </div>
                    </div>
                );
            }
        }

);
