function Furnitures ({itemsForSale}) {
    return ( <div className="products">
        {itemsForSale.map((element => {
            const {id, name, searchTeam, price, image} = element;
            return (
                <div className="product-card" key={id}>
                    <img src={ image } width="280px" height="250px"/>
                    <div className="product-info">
                        <h2>{ name }</h2>
                        <h4>{ searchTeam }</h4>
                        <h4>{price} р.</h4>
                </div>
                </div>
            )
        }))}
    </div>

    )
}

export default Furnitures;