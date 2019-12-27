import { Component, OnInit, HostBinding } from '@angular/core';
import { ProjectService } from './../../shared/project.service';
// import { slidePrjIn } from './../../shared/animations';
import * as AOS from './../../../../node_modules/aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  // animations: [
  //   slidePrjIn
  // ]
})

export class ProjectsComponent implements OnInit {


  theProjects: any[];
  projectsToShow: any[] = [];

  constructor(private projectService: ProjectService) { }


  ngOnInit() {
    AOS.init();
    this.getTheProjects();

  }

  getTheProjects() {
    this.projectService.getProjects().snapshotChanges().subscribe(whatComes => {
      this.theProjects = whatComes;
      console.log('this.theProjects: ', this.theProjects);
      whatComes.forEach((element, index) => {
        if (index < 3) {
          this.projectsToShow.push(whatComes[index]);
        }
      });
    });
    // return this.theProjects;
    console.log(this.projectsToShow);
    return this.projectsToShow;
  }



  setPrjClass(index) {
    const classes = {
      prLeft: index === 0,
      prMid: index === 1,
      prRight: index === 2
    };
    return classes;
  }

  nextBatch(rotation: number) {
    const newarr = [];
    for (let i = 0; i < this.theProjects.length; i++) {
      const newStart = (i + rotation) % this.theProjects.length;
      newarr[i] = this.theProjects[newStart];

    }
    this.theProjects = newarr;

    for (let b = 0; b < newarr.length; b++) {
      if (b < 3) {
        this.projectsToShow[b] = newarr[b];
      }
    }
    return this.projectsToShow;
  }


}
