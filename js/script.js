const buttonsCollection = document.querySelectorAll('.tab__button')
const contentBlocksCollection = document.querySelectorAll('.tab__block')
const img = document.querySelector('img')






function buttonAction() {
    for (let item of buttonsCollection){
        item.addEventListener('click',(event)=>{
            const currentButton = event.target
            const data = currentButton.getAttribute('data-block')
            const currentBlock = document.getElementById(data)

            if (!currentButton.classList.contains('tab__button--active')){
                for (let item of contentBlocksCollection){
                    item.classList.remove('tab__block--active')
                }

                for (let item of buttonsCollection){
                    item.classList.remove('tab__button--active')
                }
                img.src = `img/img${data}.jpg`
                currentBlock.classList.add('tab__block--active')
                currentButton.classList.add('tab__button--active')
            }

        })
    }
}

buttonAction()

document.querySelector('.tab__button').click()