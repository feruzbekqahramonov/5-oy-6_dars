const name = document.getElementById('name');
const img = document.getElementById('img');
const desc = document.getElementById('description');
const btn = document.getElementById('btn');

function validate() {
    if(!name.value) {
        name.focus();
        alert('Ismingizni kiritishingi shart!!!');
        name.style.outlineColor = 'red';
        return false;
    } else {
        name.style.outlineColor = 'lightgray';
    }

    if (!name.value.trim()) {
        name.focus();
        name.style.outlineColor = 'red';
        alert('Ism probellardan iborat bo`lmaydi!!!');
        return false;
    } else {
        name.style.outlineColor = 'lightgray'
    } 

    if(name.value.length <= 5) {
        name.focus();
        name.style.outlineColor = 'red';
        alert('Ismda kamida 5 tadan ko`p harf boladi!!!');
        return false;
    } else {
        name.style.outlineColor = 'lightgray'
    }

    if(img.value.length <= 5) {
        img.focus();
        img.style.outlineColor = 'red';
        alert('Rasmning URL manzili kiritilmadi!!!');
        return false;
    } else {
        img.style.outlineColor = 'lightgray'
    } 
    if (!img.value.trim()) {
        img.focus();
        img.style.outlineColor = 'red';
        alert('Rasm probellardan iborat bo`lmaydi!!!');
        return false;
    } else {
        img.style.outlineColor = 'lightgray'
    }

    if(!desc.value) {
        desc.focus();
        desc.style.outlineColor = 'red';
        alert('Izoh kiritishni unittingiz!');
        return false;
    } else {
        desc.style.outlineColor = 'lightgray';
    } 

    if (!desc.value.trim()) {
        desc.focus();
        desc.style.outlineColor = 'red';
        alert('Izoh probellardan iborat bo`lmaydi!!!');
        return false;
    } else {
        desc.style.outlineColor = 'lightgray'
    } 

    if(desc.value.length <= 5) {
        desc.focus();
        desc.style.outlineColor = 'red';
        alert('Izoh kamida 5 tadan ko`p ishora bolishi lozim boladi!!!');
        return false;
    } else {
        desc.style.outlineColor = 'lightgray'
    }
    return true;

}
function clear() {
    name.value = '';
    img.value = '';
    desc.value = '';
}

btn && btn.addEventListener('click', function() {
    if (validate()) {
        const user = {
            name: name.value,
            img: img.value,
            desc: desc.value,
        };
        let dataLocalStorage = [];
        if (localStorage.getItem('users')) {
            dataLocalStorage = JSON.parse(localStorage.getItem('users'));
        }
        
       dataLocalStorage.push(user);
       localStorage.setItem('users', JSON.stringify(dataLocalStorage));
        clear();

        console.log(user);
    }

});

function getDataFromStorage() {
    let data = [];
    if(localStorage.getItem('user')) {
        data = JSON.parse(localStorage.getItem('user'))
    }

    return data;
}

function createUser() {
    return `
    <div class="users">
    <h3>${name.value}</h3>
    <img src="${img.value}" alt="Qandaydir rasm" width="200" height="200">
    <p>${daec.value}</p>
    `
}

document.addEventListener('DOMContentLoaded', function() {
    let data = getDataFromStorage();
    if(data.length) {
        data.forEach(users => {
            let user = createUser(name, desc, img);
            name.innerHTMl += user;
            img.innerHTML += user;
            desc.innerHTML += user;
        })
    }

});
// function createUser(userr) {
//     return `
//     <div class="users">
//     <h3>${name.value}</h3>
//     <img src="${img.value}" alt="Qandaydir rasm" width="200" height="200">
//     <p>${daec.value}</p>
//     `
    
// }
