function cenaF() {
    mn = document.form.kg.value;
    k = eval(document.form.krmivo.value);
    c = k * mn;
    document.form.cena.value = c;
}
function celkF() {
    krm = eval(document.form.krmivo.value);
    mno = document.form.kg.value;
    zakKrm = krm * mno;
    c1 = document.form.bio.checked;
    c2 = document.form.prem.checked;
    c3 = document.form.ch.checked;
    c4 = document.form.d.checked;
    c111 = 0; c211 = 0; c311 = 0; c411 = 0;
    if (c1) {
        c11 = eval(document.form.bio.value);
        c111 = zakKrm * c11 / 100;
    }
    if (c2) {
        c21 = eval(document.form.prem.value);
        c211 = zakKrm * c21 / 100;
    }
    if (c3) {
        c31 = eval(document.form.ch.value);
        c311 = zakKrm * c31 / 100;
    }
    if (c4) {
        c41 = eval(document.form.d.value);
        c411 = c41;
    }
    v1 = zakKrm + c111 + c211 + c311 + c411;
    d1 = document.form.dopr[0].checked;
    d2 = document.form.dopr[1].checked;
    d3 = document.form.dopr[2].checked;
    d111 = 0; d211 = 0; d311 = 0;
    if (d1) {
        d111 = 0;
    }
    if (d2) {
        d21 = eval(document.form.dopr[1].value);
        d211 = v1 * d21 / 100;
    }
    if (d3) {
        d31 = eval(document.form.dopr[2].value);
        d311 = d31;
    }
    v2 = d111 + d211 + d311;
    v = v1 + v2;
    document.form.celkem.value = v;
}
function okF() {
    ok1 = parseFloat(document.form.mamPen.value);
    if (ok1 >= v) {
        document.form.mamPen.value = "Mate dost penez";
    } else {
        document.form.mamPen.value = "Mate malo penez";
    }
}

function emailKontrolaF(stringVstup) {
    znaky = /^[0-9a-zA-Z]+$/;
    if (znaky.test(stringVstup)) {
        alert('Email v poradku');
    } else {
        alert('Spatny znak - zadej email znovu');
    }
}
