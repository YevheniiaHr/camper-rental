import styled from '@emotion/styled';

export const Item = styled.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  margin: 0;
  box-sizing: border-box;
  max-width: 888px;
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
`;
export const Price = styled.p`
  font-weight: 600;
  font-size: 24px;
`;
export const Rating = styled.p`
  display: inline;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
`;
export const Location = styled.p`
  display: inline;
`;
export const Text = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const ListDetails = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
export const DetailItem = styled.li`
  background-color: #f2f4f7;
  border-radius: 100px;
  padding: 12px 18px;
  display: flex;

  text-align: center;
`;
export const Img = styled.img`
  border-radius: 10px;
  object-fit: cover;
  width: 290px;
`;
export const LocationWrap = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;
export const Container = styled.div`
  width: 526px;
  height: 310px;
  display: flex;
  flex-direction: column;
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const ItemWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const TextDetailItem = styled.p`
  margin-left: 8px;
`;
export const ButtonFavorite = styled.button`
  background-color: transparent;
  border: none;
`;
