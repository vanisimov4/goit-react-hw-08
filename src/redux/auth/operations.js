import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk("auth/register", async () => {});

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk("auth/login", async () => {});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk("auth/logout", async () => {});

export const refreshUser = createAsyncThunk("auth/refresh", async () => {});
