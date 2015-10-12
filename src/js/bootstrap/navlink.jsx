import React from "react";

let NavLink = React.createClass({
    contextTypes: {
        router: React.PropTypes.func.isRequired
    },

    render: function () {
        var activeClass = this.context.router.isActive(this.props.to) ? "active" : "";

        return (<li className={activeClass}>
            <ReactRouter.Link {...this.props}>{this.props.children}</ReactRouter.Link>
        </li>);
    }
});

export default NavLink; 
