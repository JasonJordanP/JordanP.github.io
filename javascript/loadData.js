const token = localStorage.getItem('token');

const navbarSupportedContent = document.getElementById('navbarSupportedContent');
if(!token){
    //si no tiene token, borro parte de la barra superior (como para ocultar opciones a los no usuarios)
    navbarSupportedContent.classname = 'hide';
}