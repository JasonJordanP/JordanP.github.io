<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Document</title>
    <style>
      /*css*/      
    </style>
    
    <script>
      //la funcion mostrarValores no recibe parametros
      //porque los va a tomar desde el DOM 
      function mostarValores() {//debe tener una llave al final
        let usuario = document.getElementById('username').value;
        let password = document.getElementById('password').value ;

        //quiero juntar dos valores en una misma variable
        //el signo +: si es texto > concatena 
        let userAndPass = usuario + '-'+ password;

        //mostrar en un alert 
        alert(userAndPass);//esto es una funcion del navegador, no importa cual sea(brave,chrome,etc)
      }//termina en una llave

    </script>
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                  </li>
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>        
    </header>    

    <main>
      <!--alt + arriba y abajo-->
      <section class="container-fluid">
      <!--ctrl+d- elimino una linea -->

            <h1>Login</h1>
            <div class="row">
                <div class="col-6">
                    <img src="img/undraw_secure_login_pdn4.png" class="img-fluid">
                </div>
                <div class="col-6">
                    <form class="g-3 needs-validation" novalidate action="home.html">
                        <div class="col-md-6">
                          <label for="username" class="form-label">Username</label>
                          <div class="input-group has-validation">
                            <input type="text" class="form-control" id="username" aria-describedby="inputGroupPrepend" required>
                            <div class="invalid-feedback">
                              Please choose a username.
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <label for="password" class="form-label">Password</label>
                          <input type="password" class="form-control" id="password" required>
                          <div class="invalid-feedback">
                            Please provide a valid city.
                          </div>
                        </div>
                        <div class="col-12 mt-2">
                          <button class="btn btn-primary" type="submit">
                            Login
                          </button>
                        </div>
                      </form>
                </div>
            </div>

        </section>
      </main>
</body>
<!--<script src="./javascript/variables.js" type="text/javascript"></script>-->
<!--<script src="./javascript/operadores.js" type="text/javascript"></script>-->
<!--<script src="./javascript/condicionales.js" type="text/javascript"></script>-->
<!--<script src="./javascript/repaso.js" type="text/javascript"></script>-->
</html>