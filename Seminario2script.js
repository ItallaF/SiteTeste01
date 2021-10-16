# SiteTeste01
function resposta1(){

        var resp = document.createElement("r")
        resp.innerHTML="Para responder ao exercício, vamos fazer uso da fórmula da energia cinética e substituir as informações<br>"
        + "fornecidas no enunciado; em seguida, para determinarmos a velocidade, vamos fatorar o número 40.<br><br>";

       var pai=document.getElementById("questãoInicio");  
        pai.appendChild(resp);

        var img = document.createElement("IMG");
        img.src = "img/calculo.jpg";
        document.getElementById('questãoInicio').appendChild(img);

        var elementos=document.getElementById("questãoInicio").childNodes;
        document.getElementById("questãoInicio").removeChild(elementos[1]);
        document.getElementById("questãoInicio").removeChild(elementos[2]);
        document.getElementById("questãoInicio").removeChild(elementos[3]);
        document.getElementById("questãoInicio").removeChild(elementos[4]);

        var filho=document.getElementById("d");
        pai.removeChild(filho);
        
        var bot1=document.getElementById("botao1");
        bot1.remove();
}
function resposta2(){

        var resp = document.createElement("r")
        resp.innerHTML="Velocidade inicial: 72 km/h ÷ 3,6 = 20 m/s<br><br>Velocidade final: 108 km/h ÷ 3,6 = 30 m/s<br><br>"        
        +"Variação da energia cinética = energia cinética final – energia cinética inicial.<br><br>"        
        +"ΔEC = EC.FINAL – EC.INICIAL<br><br>Energia cinética final:<br><br>EC = (M.v2) ÷ 2<br><br>"        
        +"EC = (350 . 302) ÷ 2<br><br>EC = (350 . 900) ÷ 2<br><br>EC = 157.500 J<br><br>"
        +"Energia cinética inicial:<br><br>EC = (M.v2) ÷ 2<br><br>EC = (350 . 202) ÷ 2<br><br>"        
        +"EC = ( 350 . 400) ÷ 2<br><br>EC = 70.000<br><br>Variação:<br><br>ΔEC = 157.500 – 70.000<br><br>"
        +"ΔEC = 87.500 J = 87,5 kJ<br><br>";

       var pai=document.getElementById("questão2");  
        pai.appendChild(resp);

        var elementos=document.getElementById("questão2").childNodes;
        document.getElementById("questão2").removeChild(elementos[1]);
        document.getElementById("questão2").removeChild(elementos[2]);
        document.getElementById("questão2").removeChild(elementos[3]);

        var filho=document.getElementById("2c");
        pai.removeChild(filho);
        var filho=document.getElementById("2d");
        pai.removeChild(filho);
        
        var bot2=document.getElementById("botao2");
        bot2.remove();
        //var lista = document.getElementsByTagName('ul')[0];
        //var itens = lista.getElementsByTagName('li');
        //lista.removeChild(itens[0,3]);
        
}
