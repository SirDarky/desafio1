import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  noticias = [
    {
      titulo: 'Ninguém acerta as seis dezenas da Mega-Sena 2558 e prêmio vai a R$ 75 milhões; veja números sorteados',
      describe: 'O resultado da Mega-Sena 2558 com prêmio de R$ 61.019.360,61 milhões foi divulgado nesta quarta-feira (25), em São Paulo, e ninguém acertou as seis dezenas. Com isso, o prêmio acumulado vai a R$ 75 milhões no próximo sorteio que será realizado no sábado (28).',
      data: '25/01/2023 20h02',
    },
    {
      titulo: 'Craque da Copinha, Kevin ignora interesse de europeus: "O Palmeiras é a minha vida"',
      describe: 'Eleito o craque da Copa São Paulo pelo ge e também pela FPF, Kevin conquistou nesta quarta-feira o seu segundo título da competição pelo Palmeiras. Reserva na campanha de 2022, ele foi o grande nome alviverde em 2023 e festejou após a vitória por 2 a 1 sobre o América-MG nos acréscimos da final do Canindé.',
      data: '25/01/2023 09h19',
    },
    {
      titulo: 'The Masked Singer Brasil: público se diverte com nível de dificuldade do programa',
      describe: 'A terceira temporada do The Masked Singer Brasil chegou "chegando". Logo na estreia, o público já pôde ver que a nova edição do reality está com um nível altíssimo! 😍 E isso ficou ainda mais claro pela reação da galera nas redes sociais. E por aí, mais alguém com dificuldade de descobrir a identidade dos mascarados? 🧐 Vem ver tudo o que rolou no último episódio e conferir as reações do público 👇',
      data: '25/01/2023 22h21',
    }
  ];
}
