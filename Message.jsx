
Message=React.createClass(
    {


        editClick()
        {
            EventEmitter.dispatch("editMessage",this.props.message)
        },

        deleteClick()
        {
            Meteor.call("deleteMessage", this.props.message._id);
        },

        render(){
            //if the screen name of the message is the screen name used by this user
            //then make it green else use another colour
            const listItemClassName = this.props.message.userId === Meteor.userId() ?
                "chatItem right clearfix" : "chatItem left clearfix";

            const spanChatIconClassName = this.props.message.userId === Meteor.userId() ?
                "chat-img pull-right" : "chat-img pull-left";

            const spanTimeClassName = this.props.message.userId === Meteor.userId() ?
                "" : "pull-right" + " text-muted";

            const screenNameFontClass = this.props.message.userId === Meteor.userId() ?
                "pull-right" : "" + " primary-font";


            const imageText = this.props.message.userId === Meteor.userId() ?
                "http://placehold.it/50/FA6F57/fff&text=Me" : "" + "http://placehold.it/50/55C1E7/fff&text=O";

            var lastPost = calculateLastPosted(this.props.message.createdAt);

            return (
                <li className={listItemClassName}>
                    <span className={spanChatIconClassName}>
                        <img src={imageText} alt="User Avatar" className="img-circle" />
                    </span>
                    <div className="chat-body clearfix">
                        <div className="header">
                            <strong className={screenNameFontClass}>{this.props.message.screenName}</strong>
                            <small className={spanTimeClassName}>
                                <span className="glyphicon glyphicon-time"></span> {lastPost}
                            </small>
                        </div>
                        <p>
                            {this.props.message.text}
                        </p>
                        <EditOptions userId = {this.props.message.userId}
                                     itemId = {this.props.message._id}
                                     editClickMethod = {this.editClick}
                                     deleteClickMethod = {this.deleteClick}
                        />
                    </div>
                </li>
            );
        }

    }

);