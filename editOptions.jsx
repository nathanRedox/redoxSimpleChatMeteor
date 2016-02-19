EditOptions=React.createClass({

        render(){
            if (this.props.userId === Meteor.userId()) {

                return (
                    <div className="dropdown">
                        <a href="#" className="dropdown-toggle " id="dropdownMenu1"
                           data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                            ...
                            <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a href="#primary" data-toggle="modal" onClick={this.props.editClickMethod}>
                                <small>Edit</small>
                            </a></li>
                            <li><a href="#delete"  onClick={this.props.deleteClickMethod}>
                                <small>Delete</small>
                            </a></li>
                        </ul>
                    </div>
                );
            }
            else {
                return (<div></div>);
            }
        }

    }
);
