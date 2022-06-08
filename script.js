function confirmar() {
    var cheque = document.getElementById("cheque")
    if (confirmado == 0){
      if (confirm ("Quer mesmo encaminhar seu pedido de abrigo?")){
        document.getElementById("confirmação").innerHTML = "Pedido encaminhado à Stephanie"
        cheque.setAttribute("src", "imagens/cross-icon.png")
        confirmado = 1
      }
    }
    else if (confirmado == 1){
     if (confirm ("Quer mesmo retirar seu pedido de abrigo")){
        document.getElementById("confirmação").innerHTML = "Pedido retirado"
        cheque.setAttribute("src", "imagens/check-icon.png")
        confirmado = 0
     }
    }
  }
  
  var preenchido = 0
  function favoritar() { 
    var estrela = document.getElementById("estrela")
    
   
    if (preenchido == 0){
      estrela.setAttribute("src", "imagens/full-star-icon.png")
      preenchido = 1 
      
    }
    else if(preenchido == 1){
      estrela.setAttribute("src", "imagens/star-icon.png")
      preenchido = 0
    }
  }
  
  var confirmado = 0
  function confirmar2() {
    var cheque = document.getElementById("cheque2")
    if (confirmado == 0){
      if (confirm ("Quer mesmo encaminhar seu pedido de abrigo?")){
        document.getElementById("confirmação2").innerHTML = "Pedido encaminhado à Carmen"
        cheque.setAttribute("src", "imagens/cross-icon.png")
        confirmado = 1
      }
    }
    else if (confirmado == 1){
     if (confirm ("Quer mesmo retirar seu pedido de abrigo")){
        document.getElementById("confirmação2").innerHTML = "Pedido retirado"
        cheque.setAttribute("src", "imagens/check-icon.png")
        confirmado = 0
     }
    }
  }
  
  var preenchido2 = 0
  function favoritar2() { 
    var estrela = document.getElementById("estrela2")
   
   
    if (preenchido2 == 0){
      estrela2.setAttribute("src", "imagens/full-star-icon.png")
      preenchido2 = 1 
      
    }
    else if(preenchido2 == 1){
      estrela2.setAttribute("src", "imagens/star-icon.png")
      preenchido2 = 0
    }
  }
  