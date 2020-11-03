import { Product } from './../product.model';
import { ProductService } from './../../../components/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.sass']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null,
    stock: 1,
    description: '',
    manufacturer: ''
  }
  constructor(private ProductService: ProductService,
    private router:Router) { }

  ngOnInit(): void {
    
  }
  createProduct(): void{
    this.ProductService.create(this.product).subscribe(()=> {
      this.ProductService.showMessage('Cadastro concluído com sucesso')
      this.router.navigate(['/products'])
    })
    
  }
  cancel():void{
    this.router.navigate(['/products'])
  }
}
