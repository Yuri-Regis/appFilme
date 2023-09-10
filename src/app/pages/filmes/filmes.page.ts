import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FilmeService, TiposDeBusca } from 'src/app/services/filme.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {
  termosBusca: string = '';
  tipo: TiposDeBusca = TiposDeBusca.movie; // Define o tipo como 'movie'

  filmes: any[] = [];

  constructor(private filmeService: FilmeService, private navCtrl: NavController) {}

  ngOnInit() {}

  buscar() {
    this.filmeService.buscarFilmes(this.termosBusca, this.tipo).subscribe((result) => {
      this.filmes = result.Search;
    });
  }
}
