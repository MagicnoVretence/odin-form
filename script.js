let pass1 = document.getElementById('pass1');
let pass2 = document.getElementById('pass2');
let passInfo = document.getElementById('passInfo');

let passOneValid = false;
let passTwoValid = false;
let passwordsValid = false;

function updateUI() {
    if (passwordsValid) {
        pass1.classList.remove('error');
        pass1.classList.add('passOK');
        pass2.classList.remove('error');
        pass2.classList.add('passOK');
        passInfo.innerText = '';
    } else if (passOneValid) {
        pass1.classList.remove('error');
        pass1.classList.add('passOK');
        pass2.classList.remove('passOK');
        pass2.classList.add('error');
        passInfo.innerText = '* Passwords do not match';
    } else if (passTwoValid) {
        pass1.classList.remove('passOK');
        pass1.classList.add('error');
        pass2.classList.remove('passOK');
        pass2.classList.add('error');
        passInfo.innerText = '* Passwords do not match';
    } else {
        pass1.classList.remove('passOK');
        pass1.classList.add('error');
        pass2.classList.remove('passOK');
        pass2.classList.add('error');
        passInfo.innerText = '* Password must contain 8 characters including at least one number';
    };
};

function checkBoth() {
    let obaOK = passOneValid && passTwoValid;
    let obaIsta = pass1.value == pass2.value;
    if (obaOK && obaIsta) {
        passwordsValid = true;
    } else {
        passwordsValid = false;
    };
    updateUI();
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
    } else {
        switch (event.target.id) {
            case 'pass1':
                passOneValid = false;
                break;
            case 'pass2':
                passTwoValid = false;
                break;
        };
    };
    checkBoth();
};

pass1.addEventListener('input', checkPass);
pass2.addEventListener('input', checkPass);