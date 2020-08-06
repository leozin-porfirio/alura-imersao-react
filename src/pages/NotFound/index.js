import React from 'react';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';

const NotFoundWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
`;

const NotFound = styled.div`
  font-size: 200px;
  color: #DB202C;
`;

function Pagina404() {
  return (
    <>
      <PageDefault>
        <NotFoundWrapper>
          <NotFound>
            404
          </NotFound>
          <h1>
            Página Não Encontrada!
          </h1>
        </NotFoundWrapper>
      </PageDefault>
    </>
  );
}

export default Pagina404;
