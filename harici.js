function kare(x) {
    return x * x;
}
function kup(x) {
    return x * x * x;
}
function faktoriyel(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let sonuc = 1;
    for (let i = 2; i <= n; i++) {
        sonuc *= i;
    }
    return sonuc;
}

function toplam(a, b) {
    return Number(a) + Number(b);
}

function cikarma(a, b) {
    return Number(a) - Number(b);
}

function carpma(a, b) {
    return Number(a) * Number(b);
}

function bolme(a, b) {
    if (b === 0) {
        throw new Error("Sıfıra bölme hatası!");
    }
    return Number(a) / Number(b);
}
function mod(a, b) {
    if (b === 0) {
        throw new Error("Sıfıra bölme hatası!");
    }
    return Number(a) % Number(b);
}

function kalan(a, b) {
    if (b === 0) {
        throw new Error("Sıfıra bölme hatası!");
    }
    return Number(a) % Number(b);
}

function karekok(a) {
    if (a < 0) {
        throw new Error("Negatif bir sayının karekökü alınamaz!");
    }
    return Math.sqrt(Number(a));
}

function usAlma(a, b) {
    return Math.pow(Number(a), Number(b));
}

function ortalama(a, b) {
    return (Number(a) + Number(b)) / 2;
}
function degerTuruYazdir(a) {
    if (a === null) {
        return "null";
    }

    if (Array.isArray(a)) {
        return "array";
    }

    if (a instanceof Date) {
        return "date";
    }

    if (typeof a === "string") {
        const metin = a.trim();

        if (metin === "") {
            return "boş string";
        }

        if (metin === "true" || metin === "false") {
            return "boolean gibi görünen string";
        }

        if (!Number.isNaN(Number(metin))) {
            return "number gibi görünen string";
        }

        return "string";
    }

    if (Number.isNaN(a)) {
        return "NaN";
    }

    return typeof a;
}



function nKadarYazdir(n, metin = "Varsayılan Metin") {
    if (typeof n !== "number" || n < 1) {
        throw new Error("Geçersiz bir sayı girdiniz!");
    }
    for (let i = 1; i <= n; i++) {
        console.log(i + ": " + metin);
    }
}