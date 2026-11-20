import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagListas } from './component/tag-listas/tag-listas';


@Component({
  imports: [RouterOutlet, TagListas],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('escolasonia01');
}
