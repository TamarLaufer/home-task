
import { GridContainer, ImageCard } from './GalleryGrid.styles'

function GalleryGrid({ images, onImageClick }) {
  return (
    <GridContainer>
      {images.map((image) => (
        <ImageCard key={image.id} onClick={() => onImageClick(image)}>
          <img src={image.webformatURL} alt={image.tags} />
        </ImageCard>
      ))}
    </GridContainer>
  );
}

export default GalleryGrid; 