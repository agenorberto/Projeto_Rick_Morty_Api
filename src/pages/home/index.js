import { Image } from 'primereact/image';

const Home = () => {
    return (
        <>
            <div className="card flex justify-content-center">
                    <Image src="/image/rick_morty.jpg" 
                        alt="rick and morty" width="400" />
                </div>
                <div className="card flex justify-content-center">
                    <p>
                        <b>Trabalho realizado com react e consumo de API Rick and Morty.</b>
                    </p>
                </div>
                  <div className="card flex justify-content-center">
                    <p>
                        <b>Projeto Rick and Morty - Projeto Disciplina Arquitetura Front End.</b>
                    </p>
                </div>
        </>
    )
}

export default Home