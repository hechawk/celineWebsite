function showText(id) {
    let qatext = document.getElementById(`qatext${id}`);
    let qatitle = document.getElementById(`qatitle${id}`);
    if (window.getComputedStyle(qatext, null).display == "none") {
        qatext.style.display = "initial";
        let str = qatitle.innerText.split('');
        str.splice(0, 1, '-');
        str = str.join('');
        qatitle.innerText = str;
    } else {
        qatext.style.display = "none";
        let str = qatitle.innerText.split('');
        str.splice(0, 1, '+');
        str = str.join('');
        qatitle.innerText = str;
    }
}