/*map*/

const personas = [
    {
        id: 1,
        edad: 15,
        nombre: 'carlos',
        apellido: 'lopez',
        direccion: {
            calle: 'av siempre viva',
            altura: 123
        },
        sueldo: 55000
    },
    {
        id: 2,
        edad: 25,
        nombre: 'juan',
        apellido: 'perez',
        direccion: {
            calle: 'av siempre viva',
            altura: 123
        },
        sueldo: 50000
    },  
];

/* quiero guardar solo los ids */

const filtrados = personas.filter(x => x.edad > 15);   //LO  QUE HACE LA FUNCION FILTER ES VER QUE OBJETOS CUMPLEN CON LA CONDICION QUE LE PEDIMOS
                                                       //Y LOS MUESTRA COMPLETOS CUANDO ESCRIBIMOS EL CONSOLE.LOG

console.log(filtrados);

const mapeados = personas.map( (x)=>{                   //EL MAP SELECCIONA UN ATRIBUTOS DE ESOS OBJECT Y LOS ESCRIBE EN LA CONSOLA. NO TODO
        const nuevo = {                                 //EL OBJETO, SOLO EL VALOR DEL TIPO DE DATO QUE LE PEDIMOS (POR EJEMPLO EDAD O NOMBRE)
            id: x.id,
            sueldo: x.sueldo
        };
        return nuevo;
    }
);


console.log(mapeados)

const apiResult = 
{
    page: 2,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg"
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg"
      },
      {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg"
      },
      {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg"
      },     
    ],
    support: {
      url: "https://reqres.in/#support-heading",
      text: "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
  }

  //quiero filtrar la lista por id
  //id debe ser > 7
  //solo necesito id e email

  const filtered = apiResult.data.filter(x => x.id > 7);

  const mapeo = filtered.map((aux) => {
    const obj = {
        id: aux.id,
        email: aux.email
    }
    return obj;
  });

  console.log('obj completo: ',apiResult);
  console.log('filtrados id > 7',filtered);
  console.log('mapeados: ',mapeo);