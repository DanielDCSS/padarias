import arrow from '../src/assets/imagens/ad.png'

function Home(){
    return(
        <>
            <div className="home">
                <div className="intro">
                    <h1 className="h_intro">Lírio de Prata<br /></h1>
                    <p className="p_intro">Excelência em panificação e confeitaria. Venha <br /> nos conhecer e aproveite uma experiência gourmet única em São Paulo.</p>
                </div>
                <button onClick={() => scrollToSection('Sobre_mim')} type="button" className="seta">
                    <img src={arrow} />
                </button>
            </div>
            
        </>
    );
}
export default Home ;