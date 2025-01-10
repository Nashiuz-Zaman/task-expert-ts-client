"use client";

// react
import { useEffect } from "react";

// redux
import useRedux from "./useRedux";
import {
  setTotalTasks,
  setIsLoading,
  setPinnedTasks,
} from "@/lib/redux/features/task/taskSlice";

// utils
import { axiosCustom } from "@/utils/axios";
import { RootState } from "@/lib/redux/store";

const useGetInitialTasksData = () => {
  const { dispatch, useSelector } = useRedux();
  const { profileData } = useSelector((store: RootState) => store.auth);

  useEffect(() => {
    const getInitialTasks = async (email: string): Promise<void> => {
      dispatch(setIsLoading(true));

      const totalTasksPromise = axiosCustom.get(`/tasks?email=${email}`);
      const pinnedTasksPromise = axiosCustom.get(
        `/pinned-tasks?email=${email}`
      );

      const [totalTasksRes, pinnedTasksRes] = await Promise.all([
        totalTasksPromise,
        pinnedTasksPromise,
      ]);

      if (totalTasksRes.data.status === "success") {
        dispatch(setTotalTasks(totalTasksRes.data.tasks));
      }

      if (pinnedTasksRes.data.status === "success") {
        dispatch(setPinnedTasks(pinnedTasksRes.data.pinnedTasks));
      }
      dispatch(setIsLoading(false));
    };

    if (profileData?.email) {
      getInitialTasks(profileData.email);
    }
  }, [profileData, dispatch]);
};

export default useGetInitialTasksData;
