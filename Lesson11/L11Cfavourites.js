const favorites_key = 'favorites';
const container = document.getElementById('container');
const users = JSON.parse(localStorage.getItem(favorites_key));
users.forEach(user => {
    const user_div = document.createElement('div');
    user_div.className = 'user';
    const content = document.createElement('div');
    content.innerText = `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`;
    user_div.appendChild(content);
    container.appendChild(user_div);
})