window.addEventListener('DOMContentLoaded', () => {
    const baseUrl = document.getElementById('baseUrl');
    const guestNameInput = document.getElementById('guestNameInput');
    const generateBtn = document.getElementById('generateBtn');
    
    const resultNarasi = document.getElementById('resultNarasi');
    const copyNarasiBtn = document.getElementById('copyNarasiBtn');
    const copyNarasiStatus = document.getElementById('copyNarasiStatus');
    
    const resultUrl = document.getElementById('resultUrl');
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    const copyLinkStatus = document.getElementById('copyLinkStatus');

    generateBtn.addEventListener('click', () => {
        const base = baseUrl.value;
        const cleanName = guestNameInput.value;

        if (!cleanName) {
            alert('Isi dulu Nama Tamu, Bos!');
            return;
        }

        const transformedName = cleanName.replace(/ /g, '_');
        const finalUrl = `${base}/index.html?to=${transformedName}`;

        const narasi = `Bismillahirrahmannirrahim.

Assalamu'alaikum Warahmatullahi Wabarakatuh.

Kepada Yth.
${cleanName}

Tanpa mengurangi rasa hormat, kami sekeluarga mengundang Anda untuk turut hadir dan mendoakan dalam acara Tahlil Haul Almarhum & Almarhumah keluarga kami.

Informasi lengkap mengenai waktu dan tempat dapat dilihat pada link undangan digital berikut:
${finalUrl}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir.
Jazakumullah Khairan Katsiran.

Wassalamu'alaikum Warahmatullahi Wabarakatuh.`;

        resultNarasi.value = narasi;
        resultUrl.value = finalUrl;
        
        copyNarasiStatus.textContent = '';
        copyLinkStatus.textContent = '';
    });

    copyNarasiBtn.addEventListener('click', () => {
        const textToCopy = resultNarasi.value;
        if (!textToCopy) return;

        navigator.clipboard.writeText(textToCopy).then(() => {
            copyNarasiStatus.textContent = 'Narasi berhasil disalin!';
            setTimeout(() => { copyNarasiStatus.textContent = ''; }, 2000);
        }).catch(err => {
            copyNarasiStatus.textContent = 'Gagal menyalin!';
        });
    });

    copyLinkBtn.addEventListener('click', () => {
        const textToCopy = resultUrl.value;
        if (!textToCopy) return;

        navigator.clipboard.writeText(textToCopy).then(() => {
            copyLinkStatus.textContent = 'Link berhasil disalin!';
            setTimeout(() => { copyLinkStatus.textContent = ''; }, 2000);
        }).catch(err => {
            copyLinkStatus.textContent = 'Gagal menyalin!';
        });
    });
});
