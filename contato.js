function tel_masc ()
{
    var tel = document.getElementById("telefone").value
    tel=tel.slice(0,14)
    console.log(tel)
    document.getElementById("telefone").value=tel
     
    var formatartel = document.getElementById("telefone").value

    if(formatartel[0]!="(" && formatartel[0]!=undefined)
    {
        document.getElementById("telefone").value="("+formatartel[0];
    }

    if(formatartel[3]!=")" && formatartel[3]!=undefined)
    {
        document.getElementById("telefone").value=formatartel.slice(0,3)+")"+formatartel[3]
    }

    if(formatartel[9]!="-" && formatartel[9]!=undefined)
    {
        document.getElementById("telefone").value=formatartel.slice(0,9)+"-"+formatartel[9]
    }
    
}

function cep_masc()
{
   var formatarcep = document.getElementById("cep").value
   if(formatarcep[5]!="-" && formatarcep[5]!=undefined)
    {
        document.getElementById("cep").value=formatarcep.slice(0,5)+"-"+formatarcep[5]
    }
}
