import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  standalone: true,
})
export class LogoComponent implements OnInit {
  currentColor: string = '#000000';

  generateRandomHexColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  ngOnInit(): void {
    this.currentColor = this.generateRandomHexColor();
    console.log(this.currentColor);
  }
}
