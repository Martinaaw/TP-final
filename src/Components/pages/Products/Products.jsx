import React from "react";
import { useContext } from "react";
import { dataContext } from "../../Context/DataContext";

const Products= ()=> {
    const { data } = useContext(dataContext);

    return  data.map((product)=> {
        return(
            <div className="Products">
          <img src={product.imagen} alt=""/>
           <h3>{product.nombre}</h3>
           <h4>{product.detalles}</h4>
           <h5>{product.precio}</h5>
           <button> Buy </button>
            </div>
        );
     });

}


export default Products;

