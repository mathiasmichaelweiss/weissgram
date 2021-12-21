import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import * as type from '../../models/types/types';
import { DataFlowService } from '../ui-photos-slider/services/data-flow.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() newPost!: any;

  public post: { likes: number } = {
    likes: 0
  };
  public liked: boolean = false;
  public photosToShow!: string[];
  public showAllPhotos: boolean = false;
  public isSliderSubscribtion?: any;

  constructor(private readonly dataFlowService: DataFlowService) {}

  ngOnInit(): void {
    this.isSliderSubscribtion = this.dataFlowService.isSliderClosed$.subscribe(
      responce => (this.showAllPhotos = responce)
    );

    const photosLength = this.newPost.postPhotos.length;
    const threePhotos = [];

    for (let i = 0; i <= photosLength - 1; i++) {
      threePhotos.push(this.newPost.postPhotos[i]);
    }

    if (photosLength > 3) {
      this.photosToShow = threePhotos.slice(0, photosLength - 1);
    }
    if (photosLength <= 3) {
      this.photosToShow = threePhotos;
    }
  }

  ngOnDestroy(): void {
    this.isSliderSubscribtion.unsubsctibe();
  }

  public like(): void {
    if (!this.liked) {
      this.post.likes = this.post.likes + 1;
      this.liked = true;
    } else if (this.liked) {
      this.post.likes = this.post.likes - 1;
      this.liked = false;
    }
  }
}
