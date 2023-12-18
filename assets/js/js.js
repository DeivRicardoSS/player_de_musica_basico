let musicas = [
    {titulo:'Ballin', artista:'Mc Aldeão', src:'assets/musicas/Ballin.mp3', img:'assets/img/ballin.jpg'},
    {titulo:'Stressed Out', artista:'Mc Aldeão', src:'assets/musicas/Stressed out.mp3', img:'assets/img/stressedout.jpg'},
    {titulo:'Billie Jean', artista:'Mc Aldeão', src:'assets/musicas/Billie Jean.mp3', img:'assets/img/mcaldeao.jpeg'},
    {titulo:'All Star', artista:'Mc Aldeão', src:'assets/musicas/All Star.mp3', img:'assets/img/allstar.jpg'},
    {titulo:'Can You Feel My Heart', artista:'Mc Aldeão', src:'assets/musicas/You Can Feel My Heart.mp3', img:'assets/img/youcanfellmyheart.jpg'},
    {titulo:'Somebody That I Used To Know', artista:'Villager', src:'assets/musicas/Somebody That I Used To Know.mp3', img:'assets/img/Somebody That I Used To Know.jpg'},
    {titulo:'Another Love', artista:'Monel Gomes', src:'assets/musicas/Another Love.mp3', img:'assets/img/canetaazul.jpg'}
    
];

let musica = document.querySelector('audio');
let imagem = document.querySelector('img');
let nomeDaMusica = document.querySelector('h2');
let nomeArtista = document.querySelector('i');
let indexMusica = 0
renderizarMusica(indexMusica);

//eventos
musica.addEventListener('timeupdate',atualizarBarra);

document.getElementById('back').addEventListener('click', () => {
    if(indexMusica > 0){
        indexMusica --;
        renderizarMusica(indexMusica);
    }
})
document.getElementById('next').addEventListener('click', () => {
    if(indexMusica < (musicas.length - 1)){
        indexMusica ++;
        renderizarMusica(indexMusica);
    }
    
    
})

let tempoDeDuracao = document.querySelector('.fim');
tempoDeDuracao.textContent = segundosParaMinutos(Math.floor(musica.duration));

//funções

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', ()=>{
        nomeDaMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        tempoDeDuracao.textContent = segundosParaMinutos(Math.floor(musica.duration));
    })
}

function tocarMusica(){
    musica.play();
    document.getElementById('pause').style.display = 'block';
    document.getElementById('play').style.display = 'none';
}

function pausarMusica(){
    musica.pause()
    document.getElementById('play').style.display = 'block';
    document.getElementById('pause').style.display = 'none';
}

function atualizarBarra(){
    let barra = document.getElementById('barra');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))

}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos/60);
    let campoSegundos = segundos%60;
    if(campoSegundos<10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos+':'+ campoSegundos;
}

