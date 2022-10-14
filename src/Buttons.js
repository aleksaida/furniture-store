function Buttons ({filteredFurnitures}) {
    return (<div className="cont">
        <button className="change butt" onClick={() => filteredFurnitures("sofa")}>Диваны</button>
        <button className="change butt" onClick={() => filteredFurnitures("bed")}>Кровати</button>
        <button className="change butt" onClick={() => filteredFurnitures("chair")}>Стулья</button>
        <button className="change butt" onClick={() => filteredFurnitures("table")}>Столы</button>
        <button className="change butt" onClick={() => filteredFurnitures("ward")}>Шкафы</button>
    </div>

    )
}

export default Buttons;