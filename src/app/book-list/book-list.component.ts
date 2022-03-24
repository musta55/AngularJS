import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {


  // book  service dependency injected
  constructor(private bookService: BookService) { }
  
  books=this.bookService.getBooks();
  ngOnInit(): void {
  }
  deleteBook(id:number){
  this.bookService.deleteBookService(id);
// console.log(id);
  }

}
