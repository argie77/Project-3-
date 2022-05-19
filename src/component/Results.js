function Results  (props) {

    //console.log(props)

    const productData = props.results.map((product) => {
    //const productData = props.results.map((product, idx) => {
            return(
                <div>
                <h3>{product.category}</h3>
                < img src={product.image.url} alt={product.title}  />
                </div>
            )
        }
    )

    return(
        <>
            {productData}
        </>
    )
}

export default Results