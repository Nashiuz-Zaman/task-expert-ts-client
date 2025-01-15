"use client";

// components
import PinnedTask from "./PinnedTask";
import DashboardNavHeading from "./DashboardNavHeading";
import DashboardNavLink from "./DashboardNavLink";

// hook
import { useDashboardMobileNav } from "@/hooks";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

const DashboardNavContent = ({ className = "" }: IExtraClassNames) => {
  const { pinnedTasks } = useSelector((store: RootState) => store.task);
  const { profileData } = useSelector((store: RootState) => store.auth);
  const { closeDashboardMobileNav } = useDashboardMobileNav();

  const primaryOptions = [
    {
      text: "Manage Tasks",
      icon: "fluent:tasks-app-20-filled",
      href: `/manage-tasks?id=${profileData?._id}`,
    },
    {
      text: "Analytics",
      icon: "solar:chart-2-bold",
      href: `/analytics?id=${profileData?._id}`,
    },
  ];

  const accountOptions = [
    {
      text: "Settings",
      icon: "solar:settings-bold",
      href: `/settings?id=${profileData?._id}`,
    },
  ];

  return (
    <div className={`space-y-3 md:space-y-6 ${className}`}>
      {/* pinned tasks */}
      <div className="pb-3 md:pb-6 border-b border-neutral-200">
        <DashboardNavHeading text="Pinned Task" className="mb-2 md:mb-6" />

        {/* if no pinned tasks */}
        {!pinnedTasks?.length && <PinnedTask className="ml-4" />}

        {/* if pinned tasks  */}
        {pinnedTasks?.length > 0 && (
          <div className="space-y-2">
            {pinnedTasks.map((task) => (
              <PinnedTask
                key={task._id}
                defaultValue={false}
                task={task}
                className="ml-4"
              />
            ))}
          </div>
        )}
      </div>

      {/* dashboard pages */}
      <div className="pb-6 border-b border-neutral-200">
        <DashboardNavHeading text="Menu" className="mb-2 md:mb-6" />

        {/* the navigation menu */}
        <ul className="space-y-3">
          {primaryOptions.map((option, i) => {
            return (
              <li key={i} className="ml-4">
                <DashboardNavLink
                  onClickFunction={() => closeDashboardMobileNav()}
                  linkData={option}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* account pages */}
      <div>
        <DashboardNavHeading text="Account" className="mb-2 md:mb-6" />

        {/* the navigation menu */}
        <ul className="space-y-3">
          {accountOptions.map((option, i) => {
            return (
              <li key={i} className="ml-4">
                <DashboardNavLink
                  onClickFunction={() => closeDashboardMobileNav()}
                  linkData={option}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavContent;
