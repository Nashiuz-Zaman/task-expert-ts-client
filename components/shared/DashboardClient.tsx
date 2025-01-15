"use client";

import {
  IPinnedTask,
  ITask,
  setPinnedTasks,
  setTotalTasks,
} from "@/lib/redux/features/task/taskSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import DashboardNav from "./DashboardNav/DashboardNav";
import DashboardHeader from "./DashboardHeader";

interface IProps {
  children: React.ReactNode;
  data: {
    pinnedTasksData: { status: string; pinnedTasks: IPinnedTask[] };
    tasksData: { status: string; tasks: ITask[] };
  };
}

const DashboardClient = ({ children, data }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      data?.pinnedTasksData?.status === "success" &&
      data?.tasksData?.status === "success"
    ) {
      dispatch(setTotalTasks(data?.tasksData?.tasks));
      dispatch(setPinnedTasks(data?.pinnedTasksData?.pinnedTasks));
    }
  }, [data, dispatch]);

  return (
    <div className="max-w-[120rem] mx-auto h-screen grid grid-cols-1 2xl:grid-cols-[22.5rem_1fr]">
      <DashboardNav className="hidden 2xl:block border-r border-neutral-200" />

      <div className="h-full">
        <DashboardHeader />
        <div className="h-[calc(100vh-3.4375rem)] md:h-[calc(100vh-4rem)] 2md:h-[calc(100vh-5.8rem)] relative overflow-y-auto !bg-cover !bg-no-repeat !bg-center">
          {/* page  */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
