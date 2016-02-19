

ChatWindow = React.createClass({

        // This mixin makes the getMeteorData method work
        mixins: [ReactMeteorData],

        getMeteorData() {
            let query = {};

            return {
                messages: colMessages.find(query, {sort: {createdAt: 0}}).fetch()
            };
        },

    renderMessages(){
      //get the messages from this.data.messages
        return this.data.messages.map((message) =>
        {
            return <Message
                key = {message._id}
                message = {message}
            />;
        });
    },

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        Meteor.call("addMessage", text);

        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = "";
    },
    componentWillUpdate: function() {
        var node = ReactDOM.findDOMNode(this.refs.scroller);
        this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
    },

    componentDidUpdate: function() {
        if (this.shouldScrollBottom) {
            var node = ReactDOM.findDOMNode(this.refs.scroller);
            node.scrollTop = node.scrollHeight
        }
    },
    render(){
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-info">
                    <div className="panel-heading">

                        <span className="glyphicon glyphicon-comment"></span> Messages

                        <div className="btn-group pull-right">
                            <AccountsUIWrapper />
                        </div>
                    </div>
                    <div className="panel-body" ref="scroller">

                        <ul className="chat">
                             {this.renderMessages()}
                        </ul>
                    </div>
                    <div className="panel-footer">
                        <form className="new-message" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="input-group">
                                    <input className="form-control" placeholder="Add message here" ref="textInput"/>
                                    <span className="input-group-btn">
                                        <button  className="btn btn-success btn-md " type="submit">Send</button>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }

});