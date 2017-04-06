import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { Project } from '../project.model'

@Component({
  selector: 'new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  createNewProject(title:string, fundraiser:string, target:string, description:string, reward:string){
    var newProject: Project = new Project(title, fundraiser, parseInt(target), description, reward);
    this.projectService.addProject(newProject)
  }
}
