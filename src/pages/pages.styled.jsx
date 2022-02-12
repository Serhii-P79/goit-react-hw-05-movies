import styled from 'styled-components';

export const Movies = styled.ul`
  padding-left: 25px;
  > :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const GoToBack = styled.button`
  padding: 5px 15px;
  margin-bottom: 5px;
`;

export const DetailsPage = styled.div`
  display: flex;
  margin-bottom: 15px;
  > img {
    height: 400px;
    width: 266px;
  }
  p {
    width: 95%;
  }
`;

export const Description = styled.div`
  padding-left: 20px;
  h4 {
    margin-top: 10px;
  }
`;

export const AdditionalInformation = styled.div`
  margin-bottom: 10px;
  ul {
    padding-left: 25px;
  }
`;

export const SearchBTN = styled.button`
  padding: 2px 10px;
`;

export const SearchForm = styled.form`
  margin-bottom: 10px;
`;
