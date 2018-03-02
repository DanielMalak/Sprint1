import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { MyItemsService } from './my-items.service';
@Component({
  selector: 'app-my-items',
   templateUrl: './my-items.component.html'
   ,
  styleUrls: ['./my-items.component.scss']
})
export class MyItemsComponent implements OnInit {
  MyItemsService: any;
  source: LocalDataSource;
  data = [
    {
      id: 1,
      name: "Alienware",
      price: 500,
      createdAt: "15/2/2018",
      updatedAt: "16/2/2018",
      sellerName: "Daniel"
    },
    // ... other rows here
    {
      id: 2,
      name: "Omen",
      price: 550,
      createdAt: "15/2/2018",
      updatedAt: "16/2/2018",
      sellerName: "Daniel"
    }
  ];
  settings = {
   add:{
     confirmCreate:true
    },
    
edit:{
  confirmSave:true
 },
    columns: {
      name: {
        title: 'Name',
      },
      price: {
        title: 'Price',
      },
      createdAt: {
        title: 'Created At',
      },
      updatedAt: {
        title: 'Updated At',
      },
      sellerName: {
        title: 'Seller Name',
      },
      componentNo: {
        title: 'Component No',
      },
    }
  };
  constructor() { this.source = new LocalDataSource(this.data);}

  ngOnInit() {
  }
  addRecord(event) {
    //console.log(event.newData);
    var data = {
                name : event.newData.name,
                price : event.newData.price,
                sellerName : event.newData.sellerName,
                componenetNo : event.newData.componenetNo,
                };
 this.MyItemsService.createProduct(data).subscribe(function(res){
  console.log(data);        
  
  event.confirm.resolve(event.newData);



      })
    
  }
  updateRecord(event) {
    alert('ddddd');
    var data = {"id" : event.newData.id,
                "name" : event.newData.name,
                "price" : event.newData.price,
                "createdAt" : event.newData.createdAt,
                "updatedAt" : event.newData.updatedAt,
                "sellerName" : event.newData.sellerName,
                "componenetNo" : event.newData.componenetNo,
                };
                this.MyItemsService.updateProduct(data).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.newData);
      });
  }
}
