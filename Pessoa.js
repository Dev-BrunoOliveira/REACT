function Pessoa(props) {
    return <div>
        <img src={props.foto} alt={props.nome} />
        <h2>Nome: {props.nome} </h2>
        <p>Idade: {props.nome} </p>
        <p>Profissao:{props.profissao} </p>

    </div>
    }

    export default Pessoa