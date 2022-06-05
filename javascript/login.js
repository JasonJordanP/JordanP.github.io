
const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', async () => {

    const username= document.getElementById('username').value;
    const pasword= document.getElementById('password').value;


    //validaciones
    if (!username || !password) {
        return; 
    }

    /*
    const response = await axios.post(`https://reqres.in/api/login`,{
        'username': username,
        'password': password    
    })
    */

    const response = axios.post(`https://reqres.in/api/login`,{
        'username': username,
        'password': password    
    }).then(function (response) {
        localStorage.setItem('token', response.data.token);
        window.location = 'home.html';
        //si ingresó bien los datos, se ejecuta la respuesta
      })
      .catch(function (error) {
        localStorage.removeItem('token', response.data.token);
        alert(error);
        //si no ingresó bien los datos, se rompió el código
      });

   // console.log(response);
    
    return response;
   
});