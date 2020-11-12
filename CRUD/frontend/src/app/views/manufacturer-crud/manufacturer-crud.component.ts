import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufacturer-crud',
  templateUrl: './manufacturer-crud.component.html',
  styleUrls: ['./manufacturer-crud.component.sass']
})
export class ManufacturerCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToManufacturerCreate(): void{
    this.router.navigate(['/manufacturers/create'])
  }
}
