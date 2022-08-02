let pass1 = document.getElementById('pass1');
let pass2 = document.getElementById('pass2');

let passOneValid = false;
let passTwoValid = false;
let passwordsValid = false;

function updateUI() {

};

function checkBoth() {
    let obaOK = passOneValid && passTwoValid;
    let obaIsta = pass1.value == pass2.value;
    if (obaOK && obaIsta) {
        passwordsValid = true;
    };
};

function checkPass(event) {
    var input = event.target.value;
    var dovoljnoDug = input.length >= 8;
    var sadrziBroj = /[\d]/.test(input);
    if (dovoljnoDug && sadrziBroj) {
        switch (event.target.id) {
            case 'pass1':
                passOneValid = true;
                break;
            case 'pass2':
                passTwoValid = true;
                break;
        };
    };
    checkBoth();
};

pass1.addEventListener('input', checkPass);
pass2.addEventListener('input', checkPass);