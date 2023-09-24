import './ListaSuspensa.css'


const ListaSuspensa = (props) => {

    return (
        <div className="lista-suspensa">
            <label htmlFor="">{props.label}</label>
            <select required={props.required} name="" id="" value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
                {props.itens.map(item => <option key={item}>{item}</option>
                )}
            </select>
        </div>
    )
}

export default ListaSuspensa