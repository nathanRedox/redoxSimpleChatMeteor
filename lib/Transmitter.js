/**
 * Created by NathanG on 19/02/2016.
 */
// just extend this object to have access to this.subscribe and this.dispatch
if (Meteor.isClient) {
    EventEmitter = {
        _events: {},
        dispatch: function (event, data) {
            if (!this._events[event]) return; // no one is listening to this event
            for (var i = 0; i < this._events[event].length; i++)
                this._events[event][i](data);
        },
        subscribe: function (event, callback) {
            if (!this._events[event]) this._events[event] = []; // new event
            this._events[event].push(callback);
        }
    }
}
