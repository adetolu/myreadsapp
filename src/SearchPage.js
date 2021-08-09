import React, { Component } from 'react'

class SearchPage extends Component {
    render() {
        const searchValue= 'Android'
        const { onKeyUpHandler } = this.props
        // if (this.props.onPageLoad){
            // this.props.onPageLoad(searchValue)
        // }
        const filteredbooks = this.props.books

        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Search For Books</h2>
                        <input type ='text' name='search' placeholder='search' onKeyUp={(event)=>onKeyUpHandler(event.target.value)}/>
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
                                                        <select>
                                                            <option value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{singlebook.title}</div>
                                                <div className="book-authors">{singlebook.authors?singlebook.authors[0]:''}</div>
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