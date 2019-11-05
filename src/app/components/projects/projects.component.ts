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

  // showSpinner = false;

  // @HostBinding('@fadeIn')
  // routeAnimation = true;

  // @HostBinding('@comeProject')
  // getIn = true;

  theProjects: any[];
  projectsToShow: any[];

  constructor(private projectService: ProjectService) { }


  ngOnInit() {
    AOS.init();
    this.getTheProjects();

  }

  getTheProjects() {
    // this.showSpinner = true;
    this.projectService.getProjects().snapshotChanges().subscribe(whatComes => {
      this.theProjects = whatComes;
      console.log(whatComes);
      // this.hideTheSpinner();

    });
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
    console.log('nextBatching');
    const newarr = [];
    for (let i = 0; i < this.theProjects.length; i++) {
      const newStart = (i + rotation) % this.theProjects.length;
      newarr[i] = this.theProjects[newStart];

    }
    this.theProjects = newarr;
    // this.hideTheSpinner();

    return this.theProjects;
  }

  // hideTheSpinner() {
  //   if (this.theProjects.length > 3) {
  //     setTimeout(() => {
  //       this.showSpinner = false;
  //     }, 1000);
  //   }
  // }
}
