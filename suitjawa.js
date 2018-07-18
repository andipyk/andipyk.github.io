var tanya = true;

while (tanya) {
    // 1. menangkap pilihan player
    var Org = prompt('masukan pilihan tuan');

    // 2. menangkap pilihan computer
    // 3. membangkitkan bilangan Random

    var Random = Math.random();
    var Komp = '';
    var Tampil = '';
    if (Random <= 0.33) {
        Komp = 'gajah';
    } else if (Random > 0.33 && Random <= 0.66) {
        Komp = 'semut';
    } else {
        Komp = 'orang';
    }

    // 4. menentukan rules
    var hasil = '';
    if (Org == Komp) {
        hasil = 'SERI';
    } else if (Org == 'gajah') {
        hasil = (Komp == 'semut') ? 'K' : 'M';
    } else if (Org == 'semut') {
        hasil = (Komp == 'gajah') ? 'M' : 'K';
    } else if (Org 
        == 'orang') {
        hasil = (Komp == 'gajah') ? 'K' : 'M';
    } else {
        
        hasil = 'nehi';
        // tampil = 'Maaf anda memasukan pilihan yang berbeda !!';
    }

    // if (tampil == '') {
        if (hasil == 'nehi') {
            tampil = 'Maaf anda memasukan pilihan yang berbeda !';
        } else if(hasil == 'M'){
            tampil = 'Selamat Anda Menang !';
        } else if (hasil == 'K') {
            tampil = 'Maaf Anda Kalah :( ';
        } else if (hasil == 'SERI') {
            tampil = 'Haha aduh seri :D ';
        } else {
            tampil = 'Sepertinya ada yang salah \n kode error #303';
        }
    // }

    // 5. menampilkan hasilnya

    alert('Kamu memilih : ' + Org + ' dan Komputer memilih : ' + Komp +
        '\n Maka hasilnya :' + tampil);


    tanya  = confirm( 'Apakah mau mengulang game lagi??' );
}
    alert('yahh \n terimakasih broo');