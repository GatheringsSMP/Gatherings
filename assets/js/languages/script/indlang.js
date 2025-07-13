const select = document.querySelector('select');
const allLang = ['en', 'ru', 'fr'];
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage () {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;

    for (let key in langArr){
        document.querySelector('.lng-' + key).innerHTML = langArr[key][hash];
    }

    for (let key in langInd){
        document.querySelector('.lng-' + key).innerHTML = langInd[key][hash];
    }
}

changeLanguage();