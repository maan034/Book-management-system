import { Component, model } from '@angular/core';
import {Book} from '../models/book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

 public id:number=123;
 public title:string="";
 public author:string="";

 books:Book[]=[];

 //to add a book
 AddBook()
 {
  let tempbook={
    id:this.id,
    title:this.title,
    author:this.author
  }
  this.books.push(tempbook);
  
  this.title="";
  this.author="";
  localStorage.setItem("books",JSON.stringify(this.books));
 }

 //to fetch book from localstorage
 RetrieveBook()
 {
  
 }

 //to delete a book
 DeleteBook(index:number)
 {
 this.books.splice(index,1);
 localStorage.setItem("books",JSON.stringify(this.books));
 }
}
