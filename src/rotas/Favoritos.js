import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';

const Favorito = styled.div`
  padding: 20px;
`

const FavoritoImagem = styled.img`
  height: 200px;
`

const FavoritoTitulo = styled.p`
  color: #fff;
  text-align: center;
  font-weight: bold;
`


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
    display: flex;
    justify-content: center;
    padding: 30px;
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI)
  }

  async function deletarFavorito(id) {
    await deleteFavorito(id)
    alert(`Livro deletado: ${id}`)
  }
 
  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <AppContainer>
      {favoritos.map( favorito => (
        <Favorito onClick={() => deletarFavorito(favorito.id)}>
          <FavoritoImagem src={favorito.src}/>
          <FavoritoTitulo>{favorito.nome}</FavoritoTitulo>
        </Favorito>
      ))}
    </AppContainer>
  );
}

export default Favoritos
