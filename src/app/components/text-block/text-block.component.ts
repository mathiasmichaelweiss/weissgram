import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { DataFlowService } from 'src/app/views/profile-page/services/data-flow.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.css']
})
export class TextBlockComponent implements OnInit, DoCheck {
  @Input() isCanChange: boolean = false;
  @Input() changeTextValue!: (
    textContainer?: string,
    textValue?: string
  ) => void;
  @Input() infoText!: string;
  public isChanging: boolean = false;
  public textHeight!: string;

  constructor(private readonly dataFlowService: DataFlowService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    const text = document.querySelector('.txt');
    if (text) this.textHeight = `${text.scrollHeight - 1}px`;
  }

  changeInfo(value: string): void {
    if (value.length > 1) {
      this.dataFlowService.provideUserTextValue(value);
      this.isChanging = false;
    }
    this.isChanging = false;
  }
}
