// components

import DashboardClient from "@/components/shared/DashboardClient";
import { getInitialTaskData } from "@/utils/getInitialData";
import { cookies } from "next/headers";

const DashboardLayout = async ({ children }: ILayoutProps) => {
  const cookieStr = (await cookies()).toString();
  const data = await getInitialTaskData(cookieStr, "nashiuz.zaman@gmail.com");

  return <DashboardClient data={data}>{children}</DashboardClient>;
};

export default DashboardLayout;
