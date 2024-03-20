let selecetdLi;

const selected = (element) =>{
    element.classList.toggle('selected');
    if (selecetdLi !== undefined && selecetdLi !== element){
        selecetdLi.classList.remove('selected');
    }
    selecetdLi = element;
}

const add = (variant) =>{
    const newLi = document.createElement('li');
    newLi.setAttribute('onclick', 'selected(this)')
    newLi.innerText = prompt('Введите новый элемент:');
    if (newLi.innerText == ''){
        return 0;
    } else{
        newLi.innerText.trim()
    }
    console.log(variant)
    switch (variant){
        case 1:
            document.querySelector('ul').prepend(newLi);
            console.log(1)
            break;
        case 2:
            document.querySelector('ul').append(newLi);
            console.log(2)
            break;
        case 3:

            console.log(3)
            const list = document.querySelector('ul').children
            for(let i = 0; i < list.length; i++){
                if (list[i].innerText > newLi.innerText){
                    list[i].before(newLi)
                    return 0;
                } else if (list.length - i == 1){
                    list[i].after(newLi)
                }
            }
            break;
            
    }
}

const del = () =>{
    if (confirm('Вы уверены что хотите удалить?') != true){
        return 0;
    }
    if (selecetdLi == undefined){
        const lastLi = document.querySelector('ul li:last-child');
        lastLi.remove();
    } else {
        selecetdLi.remove();
        selecetdLi = undefined;
    }
}

