import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CategoryData } from 'src/app/core/data-models/JobCategories';
import { StoreService } from 'src/app/core/services/store/store.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss'],
})
export class PostJobComponent implements OnInit {
  allCategories: Observable<CategoryData[]> | undefined;

  constructor(private storeService: StoreService) {}

  jobFormGroup!: FormGroup;

  ngOnInit(): void {
    this.allCategories = this.storeService.getAllJobCategories$;
    this.storeService.getAllCategorires();
    this.jobFormGroup = new FormGroup({
      job_description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      job_title: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      JobCategoryId: new FormControl(null, [Validators.required]),
    });
  }

  publishJob() {
    if (this.jobFormGroup.valid) {
      this.storeService.createNewJobByRecruiter(this.jobFormGroup.value);
      this.jobFormGroup.reset()
    }
  }
}
