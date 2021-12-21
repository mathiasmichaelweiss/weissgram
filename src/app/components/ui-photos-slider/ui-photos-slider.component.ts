import { Component, OnInit, OnDestroy, DoCheck, Input } from '@angular/core';
import { DataFlowService } from './services/data-flow.service';

@Component({
  selector: 'app-ui-photos-slider',
  templateUrl: './ui-photos-slider.component.html',
  styleUrls: ['./ui-photos-slider.component.css']
})
export class UiPhotosSliderComponent implements OnInit, OnDestroy, DoCheck {
  @Input() photos!: string[];
  public sliderLength!: number;
  public sliderPosition: number = 0;
  public isSliderClosed: boolean = false;

  constructor(private readonly dataFlowService: DataFlowService) {}

  ngOnInit(): void {
    this.sliderLength = this.photos.length;
  }

  ngOnDestroy(): void {}

  ngDoCheck(): void {}

  public slider(idx: number): void {
    this.sliderPosition = idx;
  }

  public closeSlider(): void {
    this.dataFlowService.provideIsSliderClosed(this.isSliderClosed);
    this.isSliderClosed = false;
  }
}
