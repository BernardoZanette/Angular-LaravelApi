import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  title: string = 'Loading'
}
