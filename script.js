const container = document.getElementById('data-list')

const URL = 'https://6729bdac6d5fa4901b6e27f4.mockapi.io/attractions';




window.addEventListener('load', async ( ) => {
    const data = await fetch(URL);
    const persone = await data.json();

    console.log(persone)

    if (persone?.length){
        persone.map((p, index) => {
            const node = document.createElement('div');
            node.insertAdjacentHTML('afterbegin', `
            <img src="${p.photo}" alt="PressF картинки ${index + 1}">
            <h3> Gender: <i>${p.gender}</i></h3>
            <h3>${p.firstName} ${p.lastName}</h3>
            <span> Country: <i>${p.county}</i></span>
            <hr/>
            `)
            container.append(node)
        })
    }
})