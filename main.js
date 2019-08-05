const cities = ['Kiev', 'Lviv', 'Odessa', 'Dnepr', 'Kharkiv', 'Poltava'];

function renderList() {

    const firstBlock = document.querySelector('#firstBlock');
    const secondBlock = document.querySelector('#secondBlock');

    for (let city of cities) {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const btn = document.createElement('button');

        btn.textContent = 'x';
        li.innerHTML = city;

        ul.append(li);
        ul.append(btn);
        firstBlock.append(ul);

        btn.onclick = () => {
            const move = event.target.parentElement;

            if (move.parentElement === secondBlock) {
                firstBlock.append(move);
            } else if (move.parentElement === firstBlock) {
                secondBlock.append(move);
            }
        }
    }
} renderList();