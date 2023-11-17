import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-prueba-component',
  templateUrl: './prueba-component.component.html',
  standalone: true,
  imports: [MatCardModule],
})
export class PruebaComponentComponent {
  constructor() {}

  ngOnInit(): void {}
}
