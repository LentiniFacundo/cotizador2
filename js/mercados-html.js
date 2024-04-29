export const mercadosHTML = (mercadoDivId, articleClass, divisaId, nombredivisa, divisa, adjhtml) => {
    let $mercado = document.getElementById(mercadoDivId);
    let $fragment = document.createDocumentFragment();
    let $article = document.createElement("article");
    let $h3 = document.createElement("h3");
    let $div1 = document.createElement("div");
    let $div2 = document.createElement("div");
    let $p = document.createElement("p");
    $article.classList.add(articleClass);
    $article.id = `${divisaId}`;
    $h3.innerText = `${nombredivisa}`;
    $p.insertAdjacentHTML("afterbegin", `${adjhtml}`);
    $div2.appendChild($p);
    $article.appendChild($h3);
    $article.appendChild($div1);
    $article.appendChild($div2);
    $fragment.appendChild($article);
    $mercado.appendChild($fragment);
}