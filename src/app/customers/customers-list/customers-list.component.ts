import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})

export class CustomersListComponent implements OnInit {
		private _customers: ICustomer[] = []; //store original value of customers

		@Input() get customers(): ICustomer[] {
			return this._customers;
		}

		set customers(value:ICustomer[]){
			if(value) {
				this.filteredCustomers = this._customers = value;
				this.calculateOrders();
			}
		}

		filteredCustomers: ICustomer[] = []; //store filtered value of customers
		customersOrderTotal: number;
		currencyCode: string = "EUR";

		constructor() {}

		ngOnInit() {
	
	}

	calculateOrders() {
		this.customersOrderTotal = 0;
			this.filteredCustomers.forEach((cust: ICustomer) => {
			this.customersOrderTotal += cust.orderTotal;
		});
	}

	sort(prop: string) {
		// A sorter service which handle the sorting
		console.log(prop);
	}
}