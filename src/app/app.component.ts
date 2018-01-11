import { Component, OnInit } from '@angular/core';
import { VoteService } from './vote.service';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  survey = {
    country: '',
    gender: '',
    rating: 0
  }

  chartdata: boolean = false;

  countryCount = [];
  countryData = [];

  //Chart
  view: any[] = [700, 400];
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  showLabels = true;
  explodeSlices = true;
  doughnut = false;

  constructor(private vote: VoteService) {}

  saveEntry() {
    this.vote.saveEntry(this.survey);
  }

  ngOnInit() {
    this.vote.getAllEntries().subscribe((results) => {
      this.chartdata = true;
      this.processData(results);
    })
  }

  onSelect(event) {
    console.log(event);
  }

  processData(entries) {
    this.countryCount = [];
    this.countryData = [];
    entries.forEach(element => {
      if (this.countryCount[element.country])
        this.countryCount[element.country] += 1;
      else
        this.countryCount[element.country] = 1;
    });
    for (var key in this.countryCount) {
      let singleentry = {
        name: key,
        value: this.countryCount[key]
      }
      this.countryData.push(singleentry);
    }

  }

}
