import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchImagesFromAPI } from '../services/api';

const initialState = {
  images: [],
  currentPage: 1,
  category: 'nature',
  sortBy: 'id',
  loading: false,
  error: null,
  selectedImage: null,
};

export const fetchImages = createAsyncThunk(
  'gallery/fetchImages',
  async ({ category, page, sortBy }) => {
    return await fetchImagesFromAPI({ category, page, sortBy });
  }
);

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    clearSelectedImage: (state) => {
      state.selectedImage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload.hits;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { 
  setCategory, 
  setCurrentPage, 
  setSortBy, 
  setSelectedImage, 
  clearSelectedImage 
} = gallerySlice.actions;

export default gallerySlice.reducer; 