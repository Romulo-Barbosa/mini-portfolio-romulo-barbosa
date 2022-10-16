
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }


        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");

        aba.classList.add("selecionado");



        const infoSelecionada = document.querySelector(".info.selecionado");
        infoSelecionada.classList.remove("selecionado");

        const idDoElementoDeInformacoesDaAba = `info-${aba.id}`;


        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba).classList.add("selecionado")



    });
});







