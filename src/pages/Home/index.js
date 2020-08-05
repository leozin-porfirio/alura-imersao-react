import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
// import PageDefault from '../../components/PageDefault';
import Footer from '../../components/Footer';
// import dadosIniciais from '../../data/dados_iniciais.json';
import categoriasRepository from '../../repositories/categorias';

export const AppWrapper = styled.div`
  background: var(--grayDark);
  
  --bodyPaddingTop: 94px;
  padding-top: var(--bodyPaddingTop);

  @media (max-width: 800px) {
    --bodyPaddingTop: 40px;
    padding-top: var(--bodyPaddingTop);
  }
`;

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithVideos()
      .then((categoriaComVideos) => {
        // console.log(categoriaComVideos);
        setDadosIniciais(categoriaComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Menu />
      <AppWrapper>
        {dadosIniciais.length === 0 && (<div>Loading...</div>)}

        {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription={dadosIniciais[0].videos[0].description}
                />
                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            );
          }

          return (
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          );
        })}

        {/* <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription="Will Smith"
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          category={dadosIniciais.categorias[1]}
        />

        <Carousel
          category={dadosIniciais.categorias[2]}
        />

        <Carousel
          category={dadosIniciais.categorias[3]}
        />

        <Carousel
          category={dadosIniciais.categorias[4]}
        />

        <Carousel
          category={dadosIniciais.categorias[5]}
        /> */}

      </AppWrapper>
      <Footer />
    </>
  );
}

export default Home;
