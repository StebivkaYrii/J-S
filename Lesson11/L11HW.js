//1-створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
let { name, age } = document.forms.user_form;
let btn = document.getElementById('btn');
let key = 'key';

let save = (user_name, user_age) => {
    let user = {
        name: user_name,
        age: user_age
    };
    localStorage.setItem(key, JSON.stringify(user));
};
btn.onclick = () => {
    save(name.value, age.value);
}



//-створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let {model,type,volume} = document.forms.cars;
let btn_cars = document.getElementById('btn_cars')
let aaa = 'key_car';
let savee = (models,types,volumes) => {
    let nev_arr = JSON.parse(localStorage.getItem(aaa)) || [];

    nev_arr.push({models,types,volumes})
    localStorage.setItem(aaa, JSON.stringify(nev_arr));
};
btn_cars.onclick = () => {
    savee(model.value, type.value, volume.value);
}