import React, { Component } from 'react'

class SearchPage extends Component {
    render() {
        // const status= this.props.status
        const { status, onChangeHandler } = this.props
        const filteredbooks = this.props.books.length > 0 ? this.props.books.filter((bookitem) => {
            return bookitem.shelf === status
        }) : this.props.books

        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{status}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {filteredbooks.length > 0 ?
                                    filteredbooks.map((singlebook) => (
                                        <li key={singlebook.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover"
                                                        style={{ width: 128, height: 193, backgroundImage: `url(${singlebook.imageLinks.smallThumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={status} onChange={(event) => onChangeHandler(singlebook, event.target.value)}>
                                                            <option value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{singlebook.title}</div>
                                                <div className="book-authors">{singlebook.authors[0]}</div>
                                            </div>
                                        </li>
                                    )) : <li>No books found</li>
                                }


                                {/* <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
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
                          <div className="book-title">Ender's Game</div>
                          <div className="book-authors">Orson Scott Card</div>
                        </div>
                      </li> */}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage