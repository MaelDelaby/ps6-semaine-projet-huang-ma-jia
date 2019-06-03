import {Component, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'bottom-arrow',
  templateUrl: './bottom-arrow.component.html',
  styleUrls: ['./bottom-arrow.component.scss']
})
export class BottomArrowComponent implements OnChanges {

  public showArrow: boolean = true;

  constructor() {
    this.resize();
    let root = document.documentElement;
    root.style.setProperty('--position-x', Math.trunc(window.innerWidth/2) + 'px');
    root.style.setProperty('--position-y', window.innerHeight -60 + 'px');
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  resize() {
    let root = document.documentElement;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    root.style.setProperty('--position-x', Math.trunc(windowWidth/2) + 'px');
    root.style.setProperty('--position-y', windowHeight -80 + 'px');
  }
}
