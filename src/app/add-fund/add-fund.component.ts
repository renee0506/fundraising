import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';


@Component({
  selector: 'add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.css'],
  providers: [ProjectService]
})
export class AddFundComponent implements OnInit {
  @Input() projectToFund;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(projectToFund, amount) {
    console.log(projectToFund);
    this.projectService.addFund(projectToFund, amount);
  }

}
