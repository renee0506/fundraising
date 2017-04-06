import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { PledgedPipe } from '../pledged.pipe';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]

})

export class ProjectListComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  filterByPledged: string = "allProjects"

  constructor(
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject){
    this.router.navigate(['project', clickedProject.$key]);
  }

  onChange(optionFromMenu) {
    this.filterByPledged = optionFromMenu;
  }

  filter(project){
    if (project.pledged >= project.target){
      return true;
    }
  }

}
