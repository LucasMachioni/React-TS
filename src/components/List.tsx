import Item from "./Item"

const List: React.FC = () => {
    return (
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Ferrari" />
            <Item marca="Fiat" />
        </ul>
        </>
    )
}
export default List