import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ReducerService } from 'src/app/services/reducer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  reactive:FormGroup;
  description:FormGroup;
  products: Array<{id:string, name:string}>;
  reducer:ReducerService;

  constructor(private service:ReducerService,private builder:FormBuilder) { 
    this.reducer = this.service;

    this.reactive = this.builder.group({
      id: [this.reducer.state.id]
    });
    this.description = this.builder.group({
      id: [this.reducer.state.id],
      name: [this.reducer.state.versions[0].name]
    });
    
    this.products = this.reducer.loadProducts();
  }

  ngOnInit(): void {
    this.reactive.valueChanges.subscribe(
      change => {
        this.reducer.selector(change.id);
      }
    );
  }

}
