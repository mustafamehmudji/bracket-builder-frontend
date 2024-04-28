import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ILoginBody, ISignupBody } from "../../types/auth";
import * as service from "../services/auth";
import { IUser } from "../../types/user";

export interface AuthState {
  user: IUser | null;
  logged_in: boolean;
  loading: boolean;
  error: boolean;
}

export const fetchSignup = createAsyncThunk(
  "auth/signup",
  async (data: ISignupBody) => {
    const response = await service.fetchSignup(data);
    return response;
  }
);

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }: ILoginBody) => {
    const response = await service.fetchLogin({ email, password });
    return response;
  }
);

export const fetchLogout = createAsyncThunk("auth/logout", async () => {
  const response = await service.fetchLogout();
  return response;
});

const initialState: AuthState = {
  user: null,
  logged_in: false,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedInUserData: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignup.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchSignup.fulfilled, (state, action) => {
        state.user = action.payload.data.data;
        state.logged_in = true;
        state.loading = false;
      })
      .addCase(fetchSignup.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.user = action.payload.data.data;
        state.logged_in = true;
        state.loading = false;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchLogout.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchLogout.fulfilled, (state, action) => {
        state.user = null;
        state.logged_in = false;
        state.loading = false;
      })
      .addCase(fetchLogout.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

// export const { } = authSlice.actions;

export default authSlice.reducer;
export const { setLoggedInUserData } = authSlice.actions;
