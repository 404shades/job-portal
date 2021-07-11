import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryData } from 'src/app/core/data-models/JobCategories';
import { StoreService } from 'src/app/core/services/store/store.service';
import { JobServiceDataModel } from 'src/app/modules/recruiters-panel/data/job-services/job-services.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private storeService:StoreService) { }

  availableJobServices:Observable<CategoryData[]>|undefined

  ngOnInit(): void {
    this.availableJobServices =  this.storeService.getAllJobCategories$
    this.storeService.getAllCategorires()
  }

}
