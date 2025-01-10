"use client";

// react
import { useCallback } from "react";

// redux
import useRedux from "./useRedux";
import {
  setTotalTasks,
  setPinnedTasks,
} from "@/lib/redux/features/task/taskSlice";

// utils
import { showToast } from "@/utils/showToast";

// data
import { statusOptions } from "@/uiData/formsUiData";
import { axiosCustom } from "@/utils/axios";
import { RootState } from "@/lib/redux/store";

const useTaskDatabaseMethods = () => {
  const { dispatch, useSelector } = useRedux();
  const { profileData } = useSelector((store: RootState) => store.auth);

  const sortByLatest = useCallback((arr) => {
    const sortedArr = [...arr].sort(
      (a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated)
    );

    return sortedArr;
  }, []);

  const createTask = async (newTaskData) => {
    try {
      const res = await axiosCustom.post(`/tasks`, newTaskData);
      if (res.data.status === "success") {
        showToast("Task Added", "success");
        dispatch(setTotalTasks(res.data.tasks));
      }
    } catch (error) {
      showToast("Something went wrong. Try again", "error");
    }
  };

  const editTask = useCallback(
    async (editedTaskId, editedTaskData, totalTasks) => {
      // return an updated array with the new data for the edited task only
      const updatedTasksAfterEdit = totalTasks.map((task) => {
        if (task._id === editedTaskId) {
          return { ...task, ...editedTaskData };
        }

        return task;
      });

      // set the new array to the total tasks state in redux
      dispatch(setTotalTasks(updatedTasksAfterEdit));

      // update in the database
      const res = await axiosCustom.put(
        `/tasks/edit/${editedTaskId}`,
        editedTaskData
      );

      if (res.data.status === "success") {
        showToast("Task Edited", "success");
      }
    },
    [dispatch, axiosCustom]
  );

  const updateTaskStatus = useCallback(
    async (taskId, statusLevel, totalTasks) => {
      // find latest time
      const lastUpdated = new Date().toISOString();
      const statusLevelText = statusOptions[statusLevel].text;

      // create a new array
      const updatedTasksAfterStatusChange = totalTasks.map((task) => {
        return task._id === taskId
          ? { ...task, statusLevel, lastUpdated }
          : task;
      });

      // update redux task state with new array
      dispatch(setTotalTasks(sortByLatest(updatedTasksAfterStatusChange)));

      // send the update information to the database
      const updatedTask = {
        statusLevel,
        lastUpdated,
      };

      const res = await axiosCustom.patch(
        `/tasks/update-status/${taskId}`,
        updatedTask
      );

      // show success toast on success
      if (res.data.status === "success") {
        showToast(`Task moved to ${statusLevelText}`, "success");
        return true;
      }

      return false;
    },
    [dispatch, sortByLatest]
  );

  const pinTask = useCallback(
    async (task, pinnedTasks) => {
      try {
        const newPinnedTask = {
          title: task.title,
          taskId: task._id,
          email: task.email,
          lastUpdated: new Date().toISOString(),
        };

        // no more than 6 tasks
        if (pinnedTasks.length === 6) {
          showToast("Max 6 Pinned Tasks Allowed", "error");
          return;
        }

        // if already in the list
        if (
          pinnedTasks.findIndex(
            (task) => task.taskId === newPinnedTask.taskId
          ) >= 0
        ) {
          showToast("Task Already Pinned", "warning");
          return;
        }

        const res = await axiosCustom.post("/pinned-tasks", newPinnedTask);

        if (res.data.status === "success") {
          dispatch(setPinnedTasks(res.data.pinnedTasks));
          showToast("Task Pinned", "success");
        }
      } catch (error) {
        showToast("Something went wrong. Try again", "error");
      }
    },
    [dispatch]
  );

  const unpinTask = useCallback(
    async (pinnedTaskId, pinnedTasks) => {
      try {
        const newPinnedTasks = pinnedTasks.filter(
          (task) => task._id !== pinnedTaskId
        );

        dispatch(setPinnedTasks(newPinnedTasks));

        const res = await axiosCustom.delete(
          `/pinned-tasks/${pinnedTaskId}?email=${profileData.email}`
        );

        if (res.data.status === "success") {
          showToast({ message: "Task Unpinned" });
        }
      } catch {
        showToast("Something went wrong. Try again", "error");
      }
    },
    [dispatch, profileData]
  );

  const deleteTask = useCallback(
    async (_id, tasks, pinnedTasks) => {
      const pinnedTask = pinnedTasks.find((task) => task.taskId === _id);

      if (pinnedTask?._id) {
        unpinTask(pinnedTask._id, pinnedTasks);
      }

      const remainingTasks = tasks.filter((task) => task._id !== _id);
      dispatch(setTotalTasks(remainingTasks));

      const res = await axiosCustom.delete(
        `/tasks/delete/${_id}?email=${profileData?.email}`
      );

      if (res.data.status === "success") {
        showToast({ message: "Task Deleted" });
      }
    },
    [dispatch, profileData, unpinTask]
  );

  return {
    sortByLatest,
    updateTaskStatus,
    deleteTask,
    createTask,
    editTask,
    pinTask,
    unpinTask,
  };
};

export default useTaskDatabaseMethods;
