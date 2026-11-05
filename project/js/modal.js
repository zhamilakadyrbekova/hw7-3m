const modal = document.querySelector('.modal');
const modalOpenBtn = document.querySelector('#btn-get');
const modalCloseBtn = document.querySelector('.modal_close');

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflowY = 'hidden';
}

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflowY = '';
}

modalOpenBtn.onclick = () => openModal();
modalCloseBtn.onclick = () => closeModal();
modal.onclick = (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal()
    }
}




const checkScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;


    if (scrollTop + windowHeight >= documentHeight - 5) {
        openModal();

        window.removeEventListener('scroll', checkScroll);
    }
}

window.addEventListener('scroll', checkScroll);


setTimeout(() => {
    openModal();
}, 10000);