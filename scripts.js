const form = document.getElementById('form')
const nome = document.getElementById('nome')
const endereco = document.getElementById('endereco')
const CPF= document.getElementById('CPF')
const estado = document.getElementById('estado')
const cidade = document.getElementById('cidade')
const cargo = document.getElementById('cargo')

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    checkInputs()
});

function checkInputs(){
const nomeValue = nome.value;
const enderecoVaue = endereco.vale;
const CPFValue = CPF.value;
const estadoValue = estado.value;
const cidadeValue = cidade.value;
const cargoValeu = cargo.value;

if (nomeValue === "") {
    setErrorFor(nome, "Nome completo obrigatório.");
  } else {
    setSuccessFor(nome);
  }


  if(CPFValue === ""){
  setErrorFor(CPF, "CPF obrigatório.");
} else {
    setSuccessFor(CPF);
} if(CPFValue.length < 14){
    setErrorFor(CPF,"CPF inválido.");
}



}

function setErrorFor(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small');

    //mensagem de erro
    small.innerText = message; 

    //adiciona classe de erro
    formControl.className = "form-control error";
}


function setSuccessFor(input){
    const formControl= input.parentElement;

    formControl.className = "form-control success";
}
    
function mask(CPF)
{ 
  let $ = document.getElementById.bind(document);
  $('CPF').value = setMask($('CPF').value);
}

function setMask(cpf){   
  
  cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  return cpf;
}


