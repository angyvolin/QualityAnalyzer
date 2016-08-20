import React from "react"
import { Link } from 'react-router'
import _ from "underscore"

import NavLink from "./navlink.jsx"

let NavDropDown = React.createClass({
    propTypes: {
        matched: React.PropTypes.object,
        children: React.PropTypes.array,
        active: React.PropTypes.bool,
    },

    render: function () {
        var matched = this.props.matched
        var activeClass = this.props.active ? "active" : ""

        return (<li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                {this.props.children}
            </a>
            <ul className="dropdown-menu">
                {_.map(this.props.items, function (item, i) {
                    return (<NavLink key={i} to={"/" + item.path} active={item.path === matched.path} enabled={!!item.enabled}>
                        {!item.icon ? '' :
                            <span className={item.icon}></span>
                        } {item.name}
                    </NavLink>)
                })}
            </ul>
        </li>)
    },
})

export default NavDropDown
