import React, { Component } from 'react';


class World extends Component {
    constructor(){
        super();
}
    render() {
        return (
            <div>
               world is a better 
               <a href="#" className="badge badge-primary" style={{width:'13rem',backgroundColor:'red'}}>Primary</a>
            </div>
        );
    }
}

export default World;