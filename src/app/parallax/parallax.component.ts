import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
  title = 'https://www.thebetterindia.com/wp-content/uploads/2019/02/Mumbai-woman-free-education-underprivileged-india.jpg';
  constructor() { }
  ngOnInit() {
  }

}
