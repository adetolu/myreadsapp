import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
    render() {
        return(        
            <div className="list-books">
            <div className="list-books-title">
            <Link to="/search">Search For Books</Link>
              <h1>MyReads</h1>
            </div>
            </div>
        )
        }
}
export default ListBooks