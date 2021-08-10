import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import FirstBookShelf from './FirstBookShelf'
import './App.css'
import SearchPage from './SearchPage'

class App extends Component {
    state = {
        listbookstitle: 'Reads: A Bok Tracking App'
    }
    state = {
        books: [],
        rawBooks:[]
    }
    componentDidMount() {
        
        BooksAPI.getAll().then(singlebook => {
            this.setState(() => ({
                books: singlebook,
                rawBooks: []
            }))
            console.log(singlebook)
        })
    }

    updateBook = (book, selectedValue) => {
        console.log(selectedValue)
        console.log(book)
        BooksAPI.update(book, selectedValue).then(singlebook => {
            this.setState((prevState) => ({
               books: prevState.books.map(
                el => el.title === book.title? { ...el, shelf: selectedValue }: el
                  )
            }))
            console.log(singlebook)
        })
    }

    updateSearchBook = (book, selectedValue) => {
        console.log(selectedValue)
        console.log(book)
        book.shelf = selectedValue
        if (this.state.books.find(o => o.title === book.title)){
            BooksAPI.update(book, selectedValue).then(singlebook => {
                this.setState((prevState) => ({
                    books: prevState.books.map(
                        el => el.title === book.title? { ...el, shelf: selectedValue }: el
                      )
                }))
                console.log(singlebook)
            })  
        } else {
            this.setState((prevState) => ({
                books:prevState.books.concat([book])
            }))
        }
        
    }

    searchBook = (searchValue) => {
        console.log(searchValue)
      
        console.log(searchValue.trim())
        if(searchValue.trim()!==''){
            BooksAPI.search(searchValue).then(singlebook => {
                console.log(singlebook)
                this.setState((prevState) => ({
                   rawBooks:singlebook,
                   books:prevState.books
                }))           
            })
        } else{
            this.setState((prevState) => ({
                rawBooks:[],
                books:prevState.books
             }))    
        }
        console.log(this.state.books)
    }

    render() {
        return (
            <div>
                <Route exact path='/' render={() =>(
                <ListBooks listbookstitle={this.state.listbookstitle}/>
                )}/>

<Route exact path='/' render={() =>(
                <div>
                <FirstBookShelf books={this.state.books} status="currentlyReading" onChangeHandler={this.updateBook} />
                <FirstBookShelf books={this.state.books} status="wantToRead" onChangeHandler={this.updateBook} />
                <FirstBookShelf books={this.state.books} status="read" onChangeHandler={this.updateBook} />
                </div>
                )}/>
                
                <Route path='/search' render={() =>(
                // 
                <SearchPage mainBooks={this.state.books} books={this.state.rawBooks} 
                onKeyUpHandler={this.searchBook} onChangeHandler={this.updateSearchBook}/>
                 )} />
            </div>
        )
    }
}
export default App


// onChange={(event) => onChangeHandler(singlebook, event.target.value)}