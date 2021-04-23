import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ReducerService } from 'src/app/services/reducer.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  p2:number = 1;
  reducer:ReducerService;
  
  constructor(private service:ReducerService){
    this.reducer = this.service;
  }

  ngOnInit(): void {
  }

}
