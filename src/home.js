//Expreções em inglês
var expression = [ 
    "All day long", "Cross my heart" , "For God 's/goodness' sake!", "Hand in Hand", "Keep your eyes peeled", "Like hell!", "Never mind",
    "One never knows", "Quite a bit/Quite a few", "See you there", "Talk is cheap", "It is up to you", "Take your time",
    "It is not your business/It is none of your business", "It is raining cats and dogs", "On the crest of a wave",
    "To put the cat out of the bag", "Make yourself at home / easy / comfortable", "Let’s keep in touch", "Look here! ", "I will always be there for you",
    "To be in a bad/good mood ", "I think so", "I don’t think so ", "No pain, no gain ", "As far as I know…", "As if!",
    "At rock bottom", "Fair play", "All in good time","Anything goes!", "Bite your tongue!","Cheer down!", "Credit where credit is due",
    "Don’t put the car before the horse!", "To be out of line ","Guess what! ", "Fairweather friend", "Earn it ", "Fine thing!",
    "Food for thought","Full of airs and graces","Have a heart!","Here we go!", "He said she said", "I told you so!", "In Queer Street", 
    "It never hurts to ask", "It is a small world!","It is the thought that counts", "It is you!", "Magic bullet", "Meddler/Meddlesome",
    "Money talks!", "Mr. Nice Guy", "Mr. Smarty Pants","My lips are sealed","Word on the street","Word of mouth"
];
var resposta = [
    "O dia todo/inteiro","Juro por Deus","Pelo amor de Deus!","De mãos dadas","Fique atento/de olhos bem abertos",
    "Uma ova!","Deixa prá lá / Não tem importância","Nunca se sabe","Muito, um montão, bastante, um bocado","Até lá/mais","Falar é fácil",
    "Você que sabe/Você decide","Não se apresse/Vá no seu ritmo", "Não é da sua conta", "Está chovendo muito/Está chovendo canivetes",
    "Na crista da onda/Estar por cima", "Contar um segredo / abrir o jogo","Sinta-se em casa / Fique à vontade","Vamos manter contato",
    "Escuta aqui!","Sempre estarei ao seu lado/Conte comigo","Estar de mau/bom humor","Acho que sim", "Acho/Creio que não",
    "Não há recompensa sem esforço/Sem dor, sem ganho","Que eu saiba…","Até parece!", "No fundo do poço","Jogo limpo/justo",
    "Tudo a seu tempo/sua hora","Vale tudo!","Vira essa boca pra lá!","Menos, menos!/Não exagere","Verdade seja dita",
    "Uma coisa de cada vez/Não coloque a carroça na frente dos bois!","Passar da conta/Abusar","Adivinha só",
    "Amigo só nas horas boas","Faça por merecer/Conquiste","Bonito, hein?","Para pensar (em casa)","Cheio de si/Prepotente",
    "Tenha dó!","Lá/Aqui vamos nós!","Disse-me-disse/Assunto mal esclarecido","Eu avisei!","Na Rua da Amargura/Pindaíba",
    "Perguntar não ofende","Que mundo pequeno!","O que vale/conta/importa é a intenção","É a sua cara! ","Solução mágica/milagrosa",
    "Folgado/Abusado","O dinheiro fala (mais) alto!","Bonzinho","Espertinho/Enganador","Minha boca é um túmulo","Na boca do povo","Boca a boca"
]
        var numero = 0;
function iniciar(){
    numero = parseInt(Math.random() *59); 
    console.log(expression[numero]);
    document.getElementById('exprecion').innerHTML = expression[numero];
}
function respostas(){
    console.log(resposta[numero]);
    document.getElementById('resp').innerHTML = resposta[numero];
}