function toggleAnimacion() {
    let cuerpo = document.body;
    let btn = document.getElementById('btnAnim');
    let pausado = cuerpo.classList.toggle('pausado');
    btn.textContent = pausado ? 'Reanudar animación' : 'Pausar animación';

}
