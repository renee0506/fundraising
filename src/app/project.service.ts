import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()

export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire){
    this.projects = angularFire.database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string) {
    return this.angularFire.database.object('projects/'+ projectId);
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  addFund(localFundedProject, amount){
    var projectEntryInFirebase = this.getProjectById(localFundedProject.$key);
    projectEntryInFirebase.update({
      pledged: localFundedProject.pledged + parseInt(amount)
    });
  }
}
