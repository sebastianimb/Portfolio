const lidata = document.querySelectorAll('#aside-data li');
lidata.forEach((item, index) => {
    item.addEventListener('click', function() {
        lidata.forEach(i => {
            i.classList.remove('active');
            if (i.id === 'firts-dot' && this.id === 'resumen') {
                i.classList.add('active');
            }
            if (i.id === 'second-dot' && this.id === 'estudios') {
                i.classList.add('active');
            }
        })
        this.classList.add('active');
    });
});