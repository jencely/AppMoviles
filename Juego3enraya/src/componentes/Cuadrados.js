import React from "react";

const Cuadrados = ({value, onClick}) => {
   const style = value ? `cuadrados ${value}` : `cuadrados`;
    return(
        <button className={style} onClick= {onClick}>
            {value}
        </button>
    );

};

export default Cuadrados;