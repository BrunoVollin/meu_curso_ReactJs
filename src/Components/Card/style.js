import styled from "styled-components";

export const Wrapper = styled.div`
  width: 167px;
  background-color: #f9f9f9;
  padding: 10px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    box-shadow: var(--emphasis) 0 -2px 10px, 5px 5px 15px 5px #fff;
  }
`;

export const CardImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  font-size: 16px;
  color: var(--secondary);

  ${Wrapper}:hover &{
    color: var(--emphasis);
  }
`;
