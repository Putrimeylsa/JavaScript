function tambah(){
    var frm = document.getElementById('formKalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 + a2;
    if(a1 && a2){
        frm.hasil.value = total;
    }
    else{
        alert("Maaf angka belum terisi");
        return false;
    }
    
}

function kurang(){
    var frm = document.getElementById('formKalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 - a2;
    if(a1 && a2){
        frm.hasil.value = total;
    }
    else{
        alert("Maaf angka belum terisi");
        return false;
    }
}

function kali(){
    var frm = document.getElementById('formKalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 * a2;
    if(a1 && a2){
        frm.hasil.value = total;
    }
    else{
        alert("Maaf angka belum terisi");
        return false;
    }
}

function bagi(){
    var frm = document.getElementById('formKalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 / a2;
    if(a1 && a2){
        frm.hasil.value = total;
    }
    else{
        alert("Maaf angka belum terisi");
        return false;
    }
}

function pangkat(){
    var frm = document.getElementById('formKalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 ** a2;
    if(a1 && a2){
        frm.hasil.value = total;
    }
    else{
        alert("Maaf angka belum terisi");
        return false;
    }
}