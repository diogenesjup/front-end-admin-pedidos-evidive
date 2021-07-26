let titles = document.querySelectorAll(".page__content__eventos dt");
for (let i = 0; i < titles.length; i++) {
    let titleEach = titles[i];
    let content = titleEach.nextElementSibling;

    titleEach.addEventListener("click", () => {
        titleEach.classList.toggle("active");
        content.classList.toggle("active");
    });
}

// parentElement
const novoBtn = document.querySelector("[data-btn='novo']");
if(novoBtn) {
    novoBtn.addEventListener("click", () => novoBtn.parentElement.classList.add("novo"));
}

const modais = document.querySelectorAll(".modal");
const itens = document.querySelectorAll(".page__content__itens ul li");
itens.forEach(item => {
    const campos = item.querySelector("fieldset");
    const excluir = item.querySelector("[data-btn='excluir']");
    const trocar = item.querySelector("[data-btn='trocar']");
    const editar = item.querySelector("[data-btn='editar']");
    const salvar = item.querySelector("[data-btn='salvar']");
    const trocarPopup = item.querySelector("[data-trocar]");
    const aplicarTrocar = trocarPopup.querySelector("button");
    const excluirPopup = item.querySelector("[data-excluir]");
    const aplicarExcluir = excluirPopup.querySelector("button");

    editar.addEventListener("click", () => {
        campos.disabled = false;
    });

    salvar.addEventListener("click", () => {
        campos.disabled = true;
    });

    trocar.addEventListener("click", () => {
        closeModals();
        trocarPopup.classList.add("active");
        trocar.classList.add("active");
    });
    aplicarTrocar.addEventListener("click", () => {
        trocarPopup.classList.remove("active");
        trocar.classList.remove("active");
    });

    excluir.addEventListener("click", () => {
        closeModals();
        excluirPopup.classList.add("active");
        excluir.classList.add("active");
    });
    aplicarExcluir.addEventListener("click", () => {
        excluirPopup.classList.remove("active");
        excluir.classList.remove("active");
    });
});

function closeModals() {
    modais.forEach(modal => modal.classList.remove("active"));
}

if (window.matchMedia("(max-width: 460px)").matches) {
    const btns = document.querySelectorAll(".page__content__eventos ul li");
    const item = document.querySelector(".page__content__itens");
    const voltar = document.querySelector(".header-mob button");
    const container = document.querySelector(".page__content__eventos dd");
    const headerAntigo = document.querySelector(".page__content__eventos dd > header");
    const listaAntiga = document.querySelector(".page__content__eventos dd ul");
    container.append(item);
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            item.classList.add("active");
            headerAntigo.style.display = "none";
            listaAntiga.style.display = "none";
        });
    });
    if(voltar) {
        voltar.addEventListener("click", () => {
            item.classList.remove("active");
            headerAntigo.style.display = "flex";
            listaAntiga.style.display = "block";
        });
    }
}