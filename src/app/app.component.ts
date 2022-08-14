import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Invoice } from './_models/Invoice';
import { Page } from './_models/page';
import { InvoiceService } from './_services/invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public forecasts?: WeatherForecast[];

  constructor(private invoiceService: InvoiceService) {
   // http.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
   //   this.forecasts = result;
    // }, error => console.error(error));
    let page = new Page(1, 3);
    //console.dir(page)
    //this.invoiceService.GetIvoicesPage({ pageIndex: 1, pageSize: 3 });
  }
  
  title = 'InvoicesManagerFront';
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}


