function Principal (props) {
    if(props.contenido==="Index"){
        return(
            <main>
                <h3>Bruh...</h3>
                {Index}
            </main>
        );
    }else{
        return(
            <main>
                <h3>Bruh...</h3>
                {Catalogo}
            </main>
        );
    }
}

function Index () {
    return(
        <p>Este es el contenido de la página principal</p>
    );
}

function Catalogo () {
    return(
        <p>Este es el catalogo</p>
    );
}

export default Principal;