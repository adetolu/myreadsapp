import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchPage extends Component {
    state = {
        query: ''
      }
      updateQuery = (query) => {
        this.setState(() => ({
          query: query
        }))
      }
      clearQuery = () => {
        this.updateQuery('')
      }
        
    render() {
        const { query } = this.state
        const { mainBooks, onKeyUpHandler, onChangeHandler } = this.props
        
        console.log(this.props.books)
        const filteredbooks = query===''?[] :this.props.books
console.log('filteredbooks', filteredbooks)
        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                    <Link to="/">Return to Main Page</Link>
                        <h2 className="bookshelf-title">Search For Books</h2>
                        <input type ='text' name='search' placeholder='search' value= {query} 
                        onChange={(event) => this.updateQuery(event.target.value)}
                        onKeyUp={(event)=>onKeyUpHandler(event.target.value)}/>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {filteredbooks.length > 0 ?
                                    filteredbooks.map((singlebook) => (

                                        <li key={singlebook.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover"
                                                        style={{ width: 128, height: 193, backgroundImage: `url(${singlebook.imageLinks?singlebook.imageLinks.smallThumbnail:''})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={mainBooks.find(o => {return o.title === singlebook.title})
                                                        ?mainBooks.find(o => {return o.title === singlebook.title}).shelf:'none' } onChange={(event) => onChangeHandler(singlebook, event.target.value)}>
                                                            <option value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{singlebook.title}</div>
                                                <div className="book-authors">{singlebook.authors?singlebook.authors.join(' , '):''}</div>
                                            </div>
                                        </li>
                                    )) : <li>No books found</li>
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage