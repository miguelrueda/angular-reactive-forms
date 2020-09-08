import { OnInit, Component } from '@angular/core';
import { Customer } from './customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer = new Customer();

  constructor() { }

  ngOnInit() { }

  save(customerForm: NgForm) {
    console.log(customerForm.form);
    console.log(`Saved`, JSON.stringify(customerForm.value));
  }

}
