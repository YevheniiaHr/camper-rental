import {
  LocationWrap,
  Rating,
  // Text,
  TitleBox,
} from 'components/Card/Card.styled';
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
  const [activeTab, setActiveTab] = useState('null');

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <WrappModal>
        <ContentModal>
          {/* <span className="close" onClick={onClose}>
            &times;
          </span> */}
          <div>
            <TitleBox>
              <TitleModal>{data.name}</TitleModal>
              <svg width="20px" height="20px">
                <use xlinkHref={sprite + '#icon-close'} />
              </svg>
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
            <PriceModal>${data.price}</PriceModal>
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
          {/* <ListAdd>
            <LinkAdd
              to="features"
              onClick={() => handleTabChange('features')}
              className={activeTab === 'features' ? 'active' : ''}
            >
              Features
            </LinkAdd>

            <LinkAdd
              to="reviews"
              onClick={() => handleTabChange('reviews')}
              className={activeTab === 'reviews' ? 'active' : ''}
            >
              Reviews
            </LinkAdd>
          </ListAdd> */}

          {/* {activeTab === 'features' && (
            <div>
            
              <ul>
                {Object.entries(data.details).map(([key, value]) => (
                  <li key={key}>
                    {key}:{' '}
                    {typeof value === 'object' ? JSON.stringify(value) : value}
                  </li>
                ))}
              </ul>
            </div>
          )} */}
          {/* <Features data={data} /> */}
          <ListAdd>
            <ItemAdd>
              <LinkAdd
                onClick={() => handleTabChange('features')}
                active={activeTab === 'features'}
              >
                Features
              </LinkAdd>
            </ItemAdd>
            <ItemAdd>
              <LinkAdd
                onClick={() => handleTabChange('reviews')}
                active={activeTab === 'reviews'}
              >
                Reviews
              </LinkAdd>
            </ItemAdd>
          </ListAdd>
          {activeTab === 'features' && <Features details={data.details} />}
          {activeTab === 'reviews' && <Reviews reviews={data.reviews} />}
        </ContentModal>
      </WrappModal>
    </Modal>
  );
};
