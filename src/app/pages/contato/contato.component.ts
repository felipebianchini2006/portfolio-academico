import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

interface ContactChannel {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

interface SocialLink {
  icon: string;
  label: string;
  url: string;
}

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [NgFor, NgIf, MatCardModule, MatIconModule, MatButtonModule, MatDividerModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  readonly channels: ContactChannel[] = [
    {
      icon: 'mail_outline',
      label: 'E-mail',
      value: 'felipebianchini02@gmail.com',
      link: 'mailto:felipebianchini02@gmail.com'
    },
    {
      icon: 'call',
      label: 'Telefone',
      value: '(17) 99663-8804',
      link: 'tel:+5517996638804'
    },
    {
      icon: 'location_on',
      label: 'Localiza\u00e7\u00e3o',
      value: 'Jales - SP'
    }
  ];

  readonly social: SocialLink[] = [
    {
      icon: 'language',
      label: 'LinkedIn',
      url: 'https://br.linkedin.com/in/felipe-pacheco-bianchini-699b25331'
    },
    {
      icon: 'code',
      label: 'GitHub',
      url: 'https://github.com/felipebianchini2006'
    }
  ];
}
