// validacion de Provincia mediante codigo postal

const codigopostal = document.getElementById('codigopostal');

codigopostal.addEventListener('change', darProvincia);

function darProvincia(e) {

  cpostal = e.target.value;

  var cp_provincias = {
    1: "\u00C1lava",
    2: "Albacete",
    3: "Alicante",
    4: "Almer\u00EDa",
    5: "\u00C1vila",
    6: "Badajoz",
    7: "Baleares",
    08: "Barcelona",
    09: "Burgos",
    10: "C\u00E1ceres",
    11: "C\u00E1diz",
    12: "Castell\u00F3n",
    13: "Ciudad Real",
    14: "C\u00F3rdoba",
    15: "Coruña",
    16: "Cuenca",
    17: "Gerona",
    18: "Granada",
    19: "Guadalajara",
    20: "Guip\u00FAzcoa",
    21: "Huelva",
    22: "Huesca",
    23: "Ja\u00E9n",
    24: "Le\u00F3n",
    25: "L\u00E9rida",
    26: "La Rioja",
    27: "Lugo",
    28: "Madrid",
    29: "M\u00E1laga",
    30: "Murcia",
    31: "Navarra",
    32: "Orense",
    33: "Asturias",
    34: "Palencia",
    35: "Las Palmas",
    36: "Pontevedra",
    37: "Salamanca",
    38: "Santa Cruz de Tenerife",
    39: "Cantabria",
    40: "Segovia",
    41: "Sevilla",
    42: "Soria",
    43: "Tarragona",
    44: "Teruel",
    45: "Toledo",
    46: "Valencia",
    47: "Valladolid",
    48: "Vizcaya",
    49: "Zamora",
    50: "Zaragoza",
    51: "Ceuta",
    52: "Melilla"
  };

  if (cpostal.length == 5 && (cpostal <= 52999 && cpostal >= 1000)) {
    document.getElementById('provincia').innerHTML = cp_provincias[parseInt(cpostal.substring(0, 2))];
  } else {
    codigopostal.value = "";
    document.getElementById('provincia').innerHTML = "";
    document.getElementById("enviar").disabled = true; 
    alert("¡Código postal incorrecto!");
  }
}

// Dar de alta el registro
    function obtenerDatos() {

      const archivo = 'https://ws.walmeric.com/provision/wsclient/client_addlead.html?format=json&idTag=29842f94d414949bf95fb2e6109142cfef1fb2a78114c2c536a36bf5a65b953aa1142182a16bc44833657aca9ed58a9a3d78c2defa2eb51f2d40020a47f3c4a187edb40af43754ea52fdc2c49f083f1b2f78d9af71a0345ccbe891e5f1a688f4b4d8476800e89b70376dd5ac2b705103&verifyLeadId='; 
      fetch (archivo)
        .then(resultado => resultado.json()) // el resultado va a ser un archivo .json
        .then(datos => {
          console.log(datos); // retornamos al siguiente .then y accedemos a los datos
        })

  }
  obtenerDatos();

  // No consigo resolver el error. Lo siento mucho