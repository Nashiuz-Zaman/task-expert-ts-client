// react

// component
import { UnpinBtn } from "@/components/buttons";

// hook
import { useTaskDatabaseMethods, useRedux, useFormVisiblity } from "@/hooks";

// redux
import {
  IPinnedTask,
  setTaskDetails,
} from "@/lib/redux/features/task/taskSlice";
import { RootState } from "@/lib/redux/store";
import modifyComponentClassName from "@/utils/modifyComponentClassName";

interface IProps extends IExtraClassNames {
  defaultValue?: boolean;
  task?: IPinnedTask;
}

const PinnedTask = ({ defaultValue = true, task, className = "" }: IProps) => {
  const { dispatch, useSelector } = useRedux();
  const { unpinTask } = useTaskDatabaseMethods();
  const { pinnedTasks } = useSelector((store: RootState) => store.task);
  const { setTaskDetailsPanelOpenF } = useFormVisiblity();

  return (
    <div
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        if (!defaultValue) {
          if (!(e.target as Element).closest(".unpin-custom-focus")) {
            dispatch(setTaskDetails(task!.taskId));
            setTaskDetailsPanelOpenF(true, true);
          }
        }
      }}
      title={task?.title ?? "No Pinned tasks"}
      className={modifyComponentClassName(
        className,
        `flex items-center gap-3 font-medium text-sm md:text-lg lg:text-xl px-4 py-2 rounded-default text-neutral-500 border border-neutral-200 shadow-md ${
          defaultValue ? "" : "cursor-pointer"
        } pointer`
      )}
    >
      <span className="truncate">
        {defaultValue ? "No Pinned Tasks" : task?.title}
      </span>

      {!defaultValue && (
        <UnpinBtn
          onClickFunction={(e) => {
            e!.preventDefault();
            unpinTask(task?._id, pinnedTasks);
          }}
          className="!ml-auto text-sm md:text-lg lg:text-xl unpin-custom-focus"
        />
      )}
    </div>
  );
};

export default PinnedTask;
