console.log("Script carregado!");

const botaoCor = document.getElementById("btn-cor");
const main = document.querySelector("main");

let modoClaro = false;

botaoCor.addEventListener("click", () => {
    console.log("Botão clicado!");
    modoClaro = !modoClaro;

    if (modoClaro) {
        main.style.backgroundColor = "#f2f2f2";
        main.style.color = "#1e1e1e";
        botaoCor.textContent = "☀️";
    } else {
        main.style.backgroundColor = "#081c34";
        main.style.color = "#ffffff";
        botaoCor.textContent = "🌙";
    }
});

const formulario = document.querySelector("#contato form");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const respostaRecaptcha = grecaptcha.getResponse();

    if (respostaRecaptcha.length === 0) {
        alert("Por favor, marque o reCAPTCHA antes de enviar.");
        return;
    }

    emailjs.sendForm("service_necisfv", "template_weahexe", this)
        .then(() => {
            alert("Mensagem enviada com sucesso!");
            formulario.reset();
            grecaptcha.reset();
        })
        .catch((erro) => {
            alert("Erro ao enviar a mensagem. Tente novamente.");
            console.error(erro);
        });
});