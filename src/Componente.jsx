const persona = {
  nombre: 'Pedro',
  apellido: 'Meseguer'
}
const estilo = {
  color: 'red'
}

function Componente({texto,texto2,textoDefaul="Soy default"}) {
  return (
    <>
    <h1 style={estilo}
    >Me llamo {`${persona.nombre} ${persona.apellido}`} {persona.nombre} </h1>
    <h3>Prubas parametros: {texto} y default es {textoDefaul}</h3>
    <h3>Pruebas varios parametros: {texto2}</h3>
    </>
    )
}


function PongoAdios() {
  return (
    <h2>Pongo a Dios como testigo</h2>
    )
}


export { Componente, PongoAdios}