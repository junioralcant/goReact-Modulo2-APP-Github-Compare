import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row; /* Deixa um do lado do outro*/
  justify-content: center; /* Para ficar sempre alinhado ao meio  */

  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;

  display: flex;
  flex-direction: column; /* deixa um abaixo do outro8*/

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #665;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal; /* Tira o bold*/
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        /* muda a cor do background um linha sim e uma não. 2n - 1 significa que a cor sera aplicada nos números impares, se fosse ao contrário tiraria apenas o "- 1" e a cor seria aplicada nos números pares   */
        background: #f5f5f5;
      }
    }
  }
`;
