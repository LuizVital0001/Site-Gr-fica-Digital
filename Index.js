var contador = 1;
var img1="imagens/Banners-e-Faixas-77.jpg";
var img2="imagens/Impressoes.jpeg";
var img3="imagens/rotulos-adesivos-personalizados.jpg";
var tempo=3000;
var exibir=setInterval("Exibindo()",tempo);

function Exibindo()
    {
        document.images["slide"].src=eval("img"+contador);
        if(contador==1)
            document.querySelector("div").innerHTML = "Faixas e Banners";
        else if (contador==2)
            document.querySelector("div").innerHTML = "Impressões em geral";
        else
            document.querySelector("div").innerHTML = "Adesivos e Rótulos";
            
        if (contador<3)
            contador++;
        else
            contador=1; 
    }

    function Anterior()
    {
        clearInterval(exibir);

        if(contador == 2)
            contador = 3;
        else if (contador == 3)
            contador = 1;
        else
            contador = 2;
            
        document.images["slide"].src=eval("img"+contador);

        if (contador ==1)
            document.querySelector("div").innerHTML = "Faixas e Banners";
        else if (contador==2)
            document.querySelector("div").innerHTML = "Impressões em geral";
        else
            document.querySelector("div").innerHTML = "Adesivos e Rótulos";
        if (contador<3)
            contador++;
        else
            contador=1;
        
        exibir=setInterval("Exibindo()",tempo);
    }

    function Proximo()
    {
        clearInterval(exibir);
        document.images["slide"].src=eval("img"+contador);
        
        if (contador==1)
            document.querySelector("div").innerHTML = "Faixas e Banners";
        else if (contador ==2)
            document.querySelector("div").innerHTML = "Impressões em geral";
        else
            document.querySelector("div").innerHTML = "Adesivos e Rótulos";
        if (contador<3)
            contador++;
        else
            contador=1;

        exibir=setInterval("Exibindo()",tempo);
    }

    function Abre_Menu()
    {
        document.getElementById("menuzinho").style.visibility="visible";
        document.getElementById("hambu").style.visibility="hidden";
        document.getElementById("xis").style.visibility="visible";
        document.getElementById("menuzinho").style.height="auto";
    }
    function Fecha_Menu()
    {
        document.getElementById("menuzinho").style.visibility="hidden";
        document.getElementById("hambu").style.visibility="visible";
        document.getElementById("xis").style.visibility="hidden";
        document.getElementById("menuzinho").style.height="0";
    }

