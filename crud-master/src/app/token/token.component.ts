import { Component } from '@angular/core';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css'],
})
export class TokenComponent {
  token!: string;
  constructor(private tokenService: TokenService) {}
  onSubmit() {
    this.tokenService.sendTokenRequest().subscribe((data) => {
      console.log(data);
      // this.token = data["jwt"];
    });
  }
}
