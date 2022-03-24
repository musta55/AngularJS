import { Injectable } from '@angular/core';
import {Book} from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[]=[
    {
      id:1,name:"twilight",year:2004,availability:true
    },
    {
      id:2,name:"debi",year:2005,availability:false
    },
    {
      id:3,name:"Hello",year:2010,availability:true
    }]
  

  constructor(){}
  
  getBooks():Book[]{
return this.books;
  }
 
  deleteBookService(id:number){
    this.books.splice(id-1, 1);
  }
}
