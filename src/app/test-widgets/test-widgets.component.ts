import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3'

@Component({
  selector: 'app-test-widgets',
  templateUrl: './test-widgets.component.html',
  styleUrls: ['./test-widgets.component.scss']
})
export class TestWidgetsComponent implements OnInit {

  constructor() { }

  gaugeData = {data: 75};	
  ngOnInit() {
    // let chart = c3.generate({
    // bindto: '#chart',
    //     data: {
    //         columns: [
    //             ['data1', 30, 200, 100, 400, 150, 250],
    //             ['data2', 50, 20, 10, 40, 15, 25]
    //         ]
    //     }
    // });
    this.generate_basic();
    this.function();
  }
  chart1;
  generate_basic() {
    this.chart1 = c3.generate({
      bindto: '#chart',
      data: {
                   columns: [
                       ['data1', 37],
                       
                   ],
                   types: {
                    data1: 'gauge',
                   
                }
               },
      
      gauge: {
        min: 0,
        max: 100
      },
    });
  }

  function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      document.getElementById('train').style.left = timePassed / 5 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, 20);
  }

}
