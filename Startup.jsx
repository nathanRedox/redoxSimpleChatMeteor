if (Meteor.isClient) {
        // This code is executed on the client only
        Accounts.ui.config({
            passwordSignupFields: "USERNAME_ONLY"
        });

    Meteor.subscribe("messages");

    Meteor.startup(function () {
        // Use Meteor.startup to render the component after the page is ready
        ReactDOM.render( <MessageEditor message={undefined} />, document.getElementById("popup-target"));
        ReactDOM.render(<ChatWindow />, document.getElementById("render-target"));

    });
}

Meteor.methods({
    addMessage: function(text) {

        colMessages.insert({
            text: text,
            createdAt: new Date(),
            screenName: Meteor.user().username,
            userId: Meteor.userId()
        });
    }
    ,
    deleteMessage(messageId) {
        const message = colMessages.findOne(messageId);
        if (message.userId !== Meteor.userId())
        {
            throw new Meteor.Error("not-authorized");
        }

        colMessages.remove(messageId);
       },
    updateMessageText(messageId, messageText){
        const foundMessage = colMessages.findOne(messageId);
        if (foundMessage.userId !== Meteor.userId())
        {
            throw new Meteor.Error("not-authorized");
        }
        colMessages.update(messageId, {
            $set:
            {
                text: messageText
            }
        });
    }

});