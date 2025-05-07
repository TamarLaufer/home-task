import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, setCategory, setSelectedImage, clearSelectedImage, setCurrentPage } from './store/gallerySlice';
import Header from './components/header/Header';
import GalleryGrid from './components/galleryGrid/GalleryGrid';
import StatusMessage from './components/statusMessage/StatusMessage';
import CategoryModal from './components/categoryModal/CategoryModal';
import ImageModal from './components/imageModal/ImageModal';
import { AppContainer } from './App.styles';

function App() {
  const dispatch = useDispatch();
  const { images, currentPage, category, sortBy, loading, error, selectedImage } = useSelector(
    (state) => state.gallery
  );
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  useEffect(() => {
    dispatch(fetchImages({ category, page: currentPage, sortBy }));
  }, [dispatch, category, currentPage, sortBy]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const handleImageClick = (image) => {
    dispatch(setSelectedImage(image));
  };

  const handleCategorySelect = (newCategory) => {
    dispatch(setCategory(newCategory));
    setShowCategoryModal(false);
  };

  if (loading) return <StatusMessage type="loading" message="Loading..." />;
  if (error) return <StatusMessage type="error" message={`Error: ${error}`} />;

  return (
    <AppContainer>
      <Header
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        onCategoryClick={() => setShowCategoryModal(true)}
      />

      <GalleryGrid
        images={images}
        onImageClick={handleImageClick}
      />

      {showCategoryModal && (
        <CategoryModal
          onClose={() => setShowCategoryModal(false)}
          onSelect={handleCategorySelect}
        />
      )}

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => dispatch(clearSelectedImage())}
        />
      )}
    </AppContainer>
  );
}

export default App; 