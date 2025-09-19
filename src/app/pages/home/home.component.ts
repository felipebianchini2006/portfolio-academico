import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

interface Highlight {
  icon: string;
  title: string;
  description: string;
}

interface JourneyItem {
  title: string;
  context: string;
  description: string;
  link?: string;
  stack?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly highlights: Highlight[] = [
    {
      icon: 'insights',
      title: 'Aprendizado cont\u00ednuo',
      description: 'Registros detalhados das disciplinas, projetos e habilidades desenvolvidas ao longo do curso de ADS.'
    },
    {
      icon: 'groups_2',
      title: 'Projetos colaborativos',
      description: 'Integra\u00e7\u00e3o com reposit\u00f3rios do GitHub e resumo das entregas que conectam teoria e pr\u00e1tica em equipe.'
    },
    {
      icon: 'accessibility_new',
      title: 'Experi\u00eancias centradas no usu\u00e1rio',
      description: 'Estudos e prot\u00f3tipos focados em acessibilidade, usabilidade e boas pr\u00e1ticas de design digital.'
    }
  ];

  readonly journey: JourneyItem[] = [
    {
      title: 'WebAPI + React em equipe',
      context: 'Projeto Integrador',
      description: 'Constru\u00e7\u00e3o de uma API .NET integrada a um front-end React, com documenta\u00e7\u00e3o completa e m\u00e9tricas \u00e1geis acompanhando cada sprint.',
      link: 'https://github.com/felipebianchini2006/Projeto-Curso-WebAPI',
      stack: '.NET \u00b7 React \u00b7 SQL Server'
    },
    {
      title: 'GranjaTech',
      context: 'Projeto Integrador',
      description: 'Sistema web para gest\u00e3o de granjas de corte com monitoramento operacional, integra\u00e7\u00e3o entre camadas e foco em escalabilidade.',
      link: 'https://github.com/felipebianchini2006/GranjaTech',
      stack: 'C# \u00b7 ASP.NET \u00b7 React'
    },
    {
      title: 'CRUD Supabase com Angular',
      context: 'Programa\u00e7\u00e3o Web e Mobile',
      description: 'Aplica\u00e7\u00e3o moderna consumindo Supabase para persist\u00eancia de dados, com componentes reutiliz\u00e1veis e foco em UX responsiva.',
      link: 'https://github.com/felipebianchini2006/boer',
      stack: 'Angular \u00b7 Supabase \u00b7 TypeScript'
    },
    {
      title: 'Triggers e modelagem avan\u00e7ada',
      context: 'Banco de Dados',
      description: 'Estudos sobre curr\u00edculos, gatilhos e automa\u00e7\u00f5es que conectam experi\u00eancias reais ao dom\u00ednio de SQL e modelagem relacional.',
      stack: 'SQL Server \u00b7 T-SQL'
    },
    {
      title: 'Sistema de Delivery Online',
      context: 'TCC',
      description: 'Plataforma de pedidos e gerenciamento de entregas com integra\u00e7\u00e3o entre clientes, estabelecimentos e equipe de rota.',
      link: 'https://github.com/felipebianchini2006/tcc',
      stack: 'PHP \u00b7 JavaScript \u00b7 MySQL'
    },
    {
      title: 'Personas e acessibilidade',
      context: 'Intera\u00e7\u00e3o Humano Computador',
      description: 'An\u00e1lises de personas, jornadas e crit\u00e9rios de inclus\u00e3o em prot\u00f3tipos no Figma com foco em acessibilidade digital.',
      stack: 'UX Research \u00b7 Figma'
    }
  ];
}


