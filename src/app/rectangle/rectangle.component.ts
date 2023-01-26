import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  @Input() data: string = '';
  @Input() titulo: string = '';
  @Input() describe: string = '';
}
