function cekZodiak() {
    const input = document.getElementById("tanggal").value;
    if (!input) {
        alert("Pilih tanggal lahir dulu ya 💖");
        return;
    }

    const date = new Date(input);
    const d = date.getDate();
    const m = date.getMonth() + 1;

    let zodiak = "";
    let sifat = "";

    if ((m==3 && d>=21) || (m==4 && d<=19)) {
        zodiak="Aries ♈"; sifat="Berani & penuh energi 🔥";
    } else if ((m==4 && d>=20) || (m==5 && d<=20)) {
        zodiak="Taurus ♉"; sifat="Sabar & setia 🌸";
    } else if ((m==5 && d>=21) || (m==6 && d<=20)) {
        zodiak="Gemini ♊"; sifat="Ceria & komunikatif 💬";
    } else if ((m==6 && d>=21) || (m==7 && d<=22)) {
        zodiak="Cancer ♋"; sifat="Penyayang & sensitif 💖";
    } else if ((m==7 && d>=23) || (m==8 && d<=22)) {
        zodiak="Leo ♌"; sifat="Percaya diri & hangat 🌟";
    } else if ((m==8 && d>=23) || (m==9 && d<=22)) {
        zodiak="Virgo ♍"; sifat="Rapi & teliti 📘";
    } else if ((m==9 && d>=23) || (m==10 && d<=22)) {
        zodiak="Libra ♎"; sifat="Ramah & adil ⚖️";
    } else if ((m==10 && d>=23) || (m==11 && d<=21)) {
        zodiak="Scorpio ♏"; sifat="Kuat & misterius 🦂";
    } else if ((m==11 && d>=22) || (m==12 && d<=21)) {
        zodiak="Sagitarius ♐"; sifat="Petualang & optimis 🏹";
    } else if ((m==12 && d>=22) || (m==1 && d<=19)) {
        zodiak="Capricorn ♑"; sifat="Disiplin & tekun 🧠";
    } else if ((m==1 && d>=20) || (m==2 && d<=18)) {
        zodiak="Aquarius ♒"; sifat="Unik & kreatif 💡";
    } else {
        zodiak="Pisces ♓"; sifat="Lembut & imajinatif 🌊";
    }

    document.getElementById("hasil").innerHTML =
        `<b>${zodiak}</b><br>${sifat}`;

    buatSparkle();
}

function buatSparkle() {
    const sparkle = document.querySelector(".sparkle");
    for (let i = 0; i < 8; i++) {
        let s = document.createElement("span");
        s.innerHTML = "✨";
        s.style.left = Math.random() * 100 + "vw";
        s.style.animationDuration = (Math.random() * 3 + 2) + "s";
        sparkle.appendChild(s);
        setTimeout(() => s.remove(), 5000);
    }
}

