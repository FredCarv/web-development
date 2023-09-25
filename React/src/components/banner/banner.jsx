import './banner.css'

export default function banner (){

    let cor_laranja = {
        backgroundColor: 'orange',
        border: '2px dashed #000'
    }

    return(
        <>
            <section className="temporada">
                <h1 style={{color:'red', backgroundColor: 'yellow'}}>The Walking Dead 1ª Temporada</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi vero dolore fugit laboriosam rem deleniti? Obcaecati itaque exercitationem adipisci omnis.</p>
                <a href="#" className="btn" style={cor_laranja}>Saiba mais</a>
            </section>
        </>
    )
}