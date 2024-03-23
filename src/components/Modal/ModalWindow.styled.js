import styled from '@emotion/styled';

export const WrappModal = styled.div`
  border-radius: 20px;
  padding: 40px;
  width: 982px;
  height: 720px;
`;
export const ContentModal = styled.div``;
export const GalleryWrapper = styled.div`
  width: 902px;
  height: 310px;
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;
export const ImageGallery = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
`;
export const TextModal = styled.p`
  margin-bottom: 44px;
`;
export const ListAdd = styled.ul`
  display: flex;
  gap: 40px;
  // margin-bottom: 24px;
  border-bottom: 1px solid #e7e9fc;
`;
export const ItemAdd = styled.li`
  padding-bottom: 24px;
`;
export const LinkAdd = styled.a`
  // color: ${({ active }) => (active ? '#E44848' : 'black')};
  position: relative;
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 24px;
  &:hover {
    color: #e44848;
  }
  &::after {
    content: ${({ active }) => (active ? '""' : 'none')};
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
    bottom: -1px;
    background-color: #e44848;
    border-radius: 2px;
  }
`;
export const TitleModal = styled.h2`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 24px;
`;
export const LocationModal = styled.p`
  margin-bottom: 16px;
`;
export const PriceModal = styled.p`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 24px;
`;
