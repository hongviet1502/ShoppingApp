import { Component,OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();

  sort = 'sort'
  itemsShowcount = 12

  constructor() { }
  ngOnInit(): void {
      
  }

  onSortUpdate(newSort:string): void{
    this.sort= newSort
  }

  onItemsUpdate(newCount:number): void{
    this.itemsShowcount = newCount
  }

  onColumnsUpdate(colsNum:number) :void {
    this.columnsCountChange.emit(colsNum)
  }
}
