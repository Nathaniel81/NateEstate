import { createSlice} from "@reduxjs/toolkit"

const initialState = {
	userInfo: null,
  
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    resetUser: (state) => {
      state.userInfo = null;
    },
    setListings: (state, action) => {
      state.listings = action.payload.listings
    },
    setWishList: (state, action) => {
      state.userInfo.wishList = action.payload
    },
    setTripList: (state, action) => {
      state.userInfo.tripList = action.payload
    },
  }
})

export const {
  addUser,
  resetUser,
  setListings,
  setWishList,
  setTripList
} = appSlice.actions;
export default appSlice.reducer
