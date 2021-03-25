import styled from "styled-components";

export const Wrapper = styled.div`
  height: 140px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  color: var(--secondary);
  margin-bottom: 10px;

  position: relative;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
export const H1 = styled.div`
  font-size: 30px;
  font-weight: 500;

  margin-bottom: 20px;
`;
export const H2 = styled.div`
  font-size: 25px;
`;
export const Emphasis = styled.strong`
  color: var(--emphasis);
`;

export const EmphasisName = styled.strong`
  font-weight: 500;
`;

export const ProfileImg = styled.img`
  width: 130px;
  height: 130px;
  margin-right: 40px;
`;

export const Line = styled.div`
  background-color: var(--background);
  height: 1px;
  width: 100%;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  outline:none;
`;
