import styled from 'styled-components';

export const CssCast = {
  Ul: styled.ul`
    padding: 10px;
    > :not(:last-child) {
      margin-bottom: 20px;
    }
  `,
  Poster: styled.img`
    height: 200px;
  `,
};
