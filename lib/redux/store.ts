import { configureStore } from "@reduxjs/toolkit";

// reducers
import backdropReducer from "@/lib/redux/features/backdrop/backdropSlice";
import mediaQueryReducer from "@/lib/redux/features/mediaQuery/mediaQuerySlice";
import mobileNavReducer from "@/lib/redux/features/mobileNav/mobileNavSlice";
import authReducer from "@/lib/redux/features/auth/authSlice";
// import formReducer from "@/lib/redux/features/form/formSlice";
import dashboardReducer from "@/lib/redux/features/dashboard/dashboardSlice";
import taskReducer from "@/lib/redux/features/task/taskSlice";
import searchReducer from "@/lib/redux/features/search/searchSlice";
import filterReducer from "@/lib/redux/features/filter/filterSlice";
import sortReducer from "@/lib/redux/features/sort/sortSlice";
import loginReducer from "@/lib/redux/features/login/loginSlice";
import signupReducer from "@/lib/redux/features/signup/signupSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    login: loginReducer,
    signup: signupReducer,
    backdrop: backdropReducer,
    mediaQuery: mediaQueryReducer,
    mobileNav: mobileNavReducer,
    // form: formReducer,
    dashboard: dashboardReducer,
    task: taskReducer,
    search: searchReducer,
    filter: filterReducer,
    sort: sortReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
