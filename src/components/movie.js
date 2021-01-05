import React, { Component } from 'react';

class Movie extends Component {
    state = {  }
    render() { 
        const styles = {
            display:'flex',
            alighItems:'space-between'
        }
        return ( 
            <div style={styles}>
                <div style={styles}>title</div>
                <div style={styles}>genre</div>
                <div style={styles}>numberInStock</div>
                <div style={styles}>dailyRentalRate</div>
            </div>

         );
    }
}
 
export default Movie;