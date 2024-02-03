import { Image } from 'primereact/image';

const Home = () => {
    return (
        <>
            <div className="card flex justify-content-center">
                    <Image src="/image/rick_morty.jpg" 
                        alt="rick and morty" width="250" />
                </div>
                <div className="card flex justify-content-center">
                    <p>
                        Trabalho realizado com react e consumo de API Rick and Morty.
                    </p>
                </div>
                  <div className="card flex justify-content-center">
                    <p>
                        Projeto Rick and Morty - Projeto Disciplina Arquitetura Front End.
                    </p>
                </div>
        </>
    )
}

export default Home