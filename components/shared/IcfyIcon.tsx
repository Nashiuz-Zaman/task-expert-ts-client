"use client";

// lib
import { Icon } from "@iconify/react";

interface IProps extends IExtraClassNames {
  icon: string;
  style?: object;
}

const IcfyIcon = ({ icon, style = {}, className = "" }: IProps) => {
  const styles = { display: "block", ...style };

  return <Icon icon={icon} style={styles} className={className} />;
};

export default IcfyIcon;
