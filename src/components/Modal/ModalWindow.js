import { LocationWrap, Rating, TitleBox } from 'components/Card/Card.styled';
import {
  ContentModal,
  GalleryWrapper,
  ImageGallery,
  LinkAdd,
  ListAdd,
  TextModal,
  WrappModal,
  TitleModal,
  LocationModal,
  PriceModal,
  ItemAdd,
  BtnClose,
} from './ModalWindow.styled';
import Modal from 'react-modal';
import sprite from '../sprite.svg';
import { useState } from 'react';
import { Features } from 'components/Features/Features';
import { Reviews } from 'components/Reviews/Reviews';
Modal.setAppElement('#root');
const customStyles = {
  overlay: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: '1200',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    overflow: 'aria-hidden',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export const ModalWindow = ({ isOpen, onClose, data }) => {
  const [activeTab, setActiveTab] = useState('features');
  const [isFeaturesContentVisible, setIsFeaturesContentVisible] =
    useState(true);

  const handleTabChange = tab => {
    setActiveTab(tab === activeTab ? null : tab);
    setIsFeaturesContentVisible(tab === 'features');
  };
  const closeOnWrapper = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
          <WrappModal onClick={closeOnWrapper}>
            <ContentModal>
              <div>
                <TitleBox>
                  <TitleModal>{data.name}</TitleModal>
                  <BtnClose onClick={onClose}>
                    <svg width="20px" height="20px">
                      <use xlinkHref={sprite + '#icon-close'} />
                    </svg>
                  </BtnClose>
                </TitleBox>
                <LocationWrap>
                  <Rating>
                    <svg width="16px" height="16px">
                      <use xlinkHref={sprite + '#icon-Rating'} />
                    </svg>
                    {data.rating} ({data.reviews.length} Reviews)
                  </Rating>
                  <LocationModal>
                    <svg width="16px" height="16px">
                      <use xlinkHref={sprite + '#icon-map-pin'} />
                    </svg>{' '}
                    {data.location}
                  </LocationModal>
                </LocationWrap>
                <PriceModal>€{data.price},00</PriceModal>
                <GalleryWrapper>
                  {data.gallery.map((name, index) => (
                    <ImageGallery
                      key={index}
                      src={name}
                      alt={`Image ${index + 1}`}
                    />
                  ))}
                </GalleryWrapper>
                <TextModal>{data.description}</TextModal>
              </div>
              <ListAdd>
                <ItemAdd>
                  <LinkAdd
                    onClick={() => handleTabChange('features')}
                    active={activeTab === 'features'}
                    className={activeTab === 'features' ? 'active' : ''}
                  >
                    Features
                  </LinkAdd>
                </ItemAdd>
                <ItemAdd>
                  <LinkAdd
                    onClick={() => {
                      handleTabChange('reviews');
                    }}
                    active={activeTab === 'reviews'}
                    className={activeTab === 'reviews' ? 'active' : ''}
                  >
                    Reviews
                  </LinkAdd>
                </ItemAdd>
              </ListAdd>
              {isFeaturesContentVisible && <Features id={data._id} {...data} />}
              {activeTab === 'reviews' && <Reviews reviews={data.reviews} />}
            </ContentModal>
          </WrappModal>
        </Modal>
      )}
    </>
  );
};
