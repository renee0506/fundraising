import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Pipe({
  name: 'pledged',
  pure: false
})

export class PledgedPipe implements PipeTransform {

  transform(input:FirebaseListObservable<any[]>, pledgedAmount){
    var output: Project[]=[new Project("1","1","1","1","1","1")];
    if(pledgedAmount === "incompleteProjects") {
      // for (var i = 0; i < input.length; i++) {
      //   if (parseInt(input[i].pledged) < parseInt(input[i].target)) {
      //     output.push(input[i]);
      //   }
      // }
      input.subscribe(dataLastEmittedFromObserver => {
        for( let data of dataLastEmittedFromObserver){
          console.log(data);
        }
      })
      return output;
    }else if (pledgedAmount === "completedProjects") {
      // for (var i = 0; i < input.length; i++) {
      //   if (parseInt(input[i].pledged) >= parseInt(input[i].target)) {
      //     output.push(input[i]);
      //   }
      // }
      return output;
    }else{
      return output;
    }
  }
}
