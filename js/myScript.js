function mostrarEsconder(estado){
    if(estado == 'none'){
        estado = 'block';
    } else{
        estado = 'none';
    }
    return estado;
}

function acenderlampada(estado) 
{
    if(estado=='imagens/Lampada-apagada.jfif'){
        estado='imagens/lampada-acesa.jfif';
    } else{
        estado= 'imagens/Lampada-apagada.jfif';
    }
    return estado;
}