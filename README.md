Olá !

Este site é experimental. O fiz para solidificar meus conhecimentos de CSS/HTML.
Há um pouco de JS, mas não é o foco deste projeto.

===========================================================

O ESLint foi configurado seguindo o 'tutorial' do wesbos : "https://github.com/wesbos/eslint-config-wesbos". Para maiores informações, verifique o link. Todo o setup está bem explicado.
Para rodar o eslint no terminal , npm run lint -- npm run lint:fix. Entretanto, foi configurado para rodar a cada save, no VSCode.

Dentre as dependências, também usei a lib AOS ( Animate on Scroll ) : "https://michalsnik.github.io/aos/". Está bem explicado como usa-la, e é bastante configurável. Vale a pena usar.

Configurei um "watch sass" nas dependências. Entretanto não é necessário. No VSCode existe uma extensão que faz isso automaticamente.

Também configurei um prefix , para adicionar os webkits automaticamente, olhando as últimas 10 versões dos browsers. E o compress, para comprimir o css e deixa-lo mais leve pro browser. Estou upando o prefixado, o comprimido e o compilado pro github.

Vale a pena ressaltar também que usei quase que inteiramente CSS Grid na construção do layout. Além de preferir Grid a Flex, usei Grid pois estava treinando a syntax.

=============================================================

Check a live version of this website on: https://tilucast.github.io/
