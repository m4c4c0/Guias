var prod = new Array(100);
var precio = new Array(100);

var b1 = false;
var b2 = false;
var b3 = false;
var b4 = false;

var i;
var cantP = 1;
var seguir;

for(i = 0; i <= 100; i++){
    do{
        do{
            if(!(prod[i] =  prompt("Digite el nombre del producto"))){
                alert("error");
            }else{
                if(isNaN(prod[i])){
                    b4 = true;
                    do{
                        if(!(precio[i] = prompt("Digite el precio del producto"))){
                            alert("error");
                        }else{
                            if(isNaN(precio[i])){
                                alert("error");   
                            }else{
                                b2 = true;
                            }
                        }
                    }while(b2 == false);
                }else{
                    alert("error");
                }
            }
        }while(b4 == false);

        do{
            seguir = prompt("Digite 1 para seguir ingresando productos o 2 para salir");
            switch(seguir){
                case '1':
                    b3 = true;
                    b1 = true;
                    cantP ++;
                break;
                case '2':
                    i = 100;
                    b3 = true;
                    b1 = true;
                break;
                default:
                    alert("error");
                    b3 = false;
                break;
            }
        }while(b3 == false);
    }while(b1 == false);
    }
    
    document.write("<font face='serif' size='12'> <table border = '3' align= 'center'> <tr> <th>Nombre</th> <th>Precio</th>  </tr>");
    
    for(i = 0; i < cantP; i++){
        document.write("<tr>  <td>"+ prod[i] +"</td>   <td>"+precio[i]+"</td></tr>");
    }
    
    document.write("</table>");
    