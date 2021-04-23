import {Component, OnInit} from '@angular/core';
import { ReducerService } from 'src/app/services/reducer.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  reducer:ReducerService;
  
  constructor(private service:ReducerService){
    this.reducer = this.service;
  }

  ngOnInit(): void {
  }

}
