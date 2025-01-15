"use client";

// write imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITask {
  _id: string;
  title: string;
  description: string;
  deadline: Date;
  priorityLevel: number;
  statusLevel: number;
  email: string;
  lastUpdated: Date;
}

export interface IPinnedTask {
  _id: string;
  title: string;
  taskId: string;
  email: string;
  lastUpdated: Date;
}

interface ITaskSlice {
  totalTasks: ITask[];
  statusSpecificTasks: ITask[];
  taskToEdit: ITask | null;
  taskDetails: ITask | null;
  pinnedTasks: IPinnedTask[];
  isLoading: boolean;
  taskDetailsPanelOpen: boolean;
  taskCreateErrors: string[] | null;
  taskEditErrors: string[] | null;
}

const initialState: ITaskSlice = {
  totalTasks: [],
  statusSpecificTasks: [],
  taskToEdit: null,
  taskDetails: null,
  pinnedTasks: [],
  isLoading: true,
  taskDetailsPanelOpen: false,
  taskCreateErrors: null,
  taskEditErrors: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTotalTasks: (
      state: ITaskSlice,
      { payload }: PayloadAction<ITaskSlice["totalTasks"]>
    ) => {
      state.totalTasks = payload;
    },
    setTaskToEdit: (
      state: ITaskSlice,
      { payload }: PayloadAction<ITaskSlice["taskToEdit"]>
    ) => {
      state.taskToEdit = payload;
    },
    setTaskDetails: (state: ITaskSlice, { payload }: PayloadAction<string>) => {
      state.taskDetails = state.totalTasks.find(
        (task) => task._id === payload
      ) as ITask;
    },
    setPinnedTasks: (
      state: ITaskSlice,
      { payload }: PayloadAction<ITaskSlice["pinnedTasks"]>
    ) => {
      state.pinnedTasks = payload;
    },
    setStatusSpecificTasks: (
      state: ITaskSlice,
      { payload }: PayloadAction<ITaskSlice["statusSpecificTasks"]>
    ) => {
      state.statusSpecificTasks = payload;
    },
    setTaskDetailsPanelOpen: (
      state: ITaskSlice,
      { payload }: PayloadAction<ITaskSlice["taskDetailsPanelOpen"]>
    ) => {
      state.taskDetailsPanelOpen = payload;
    },
    setIsLoading: (
      state: ITaskSlice,
      { payload }: PayloadAction<ITaskSlice["isLoading"]>
    ) => {
      state.isLoading = payload;
    },
    setTaskCreateErrors: (
      state: ITaskSlice,
      { payload }: PayloadAction<ITaskSlice["taskCreateErrors"]>
    ) => {
      state.taskCreateErrors = payload;
    },
    setTaskEditErrors: (
      state: ITaskSlice,
      { payload }: PayloadAction<ITaskSlice["taskEditErrors"]>
    ) => {
      state.taskEditErrors = payload;
    },
  },
});

const { actions, reducer } = taskSlice;

export default reducer;
export const {
  setTotalTasks,
  setPinnedTasks,
  setStatusSpecificTasks,
  setIsLoading,
  setTaskToEdit,
  setTaskDetails,
  setTaskDetailsPanelOpen,
  setTaskCreateErrors,
  setTaskEditErrors,
} = actions;
