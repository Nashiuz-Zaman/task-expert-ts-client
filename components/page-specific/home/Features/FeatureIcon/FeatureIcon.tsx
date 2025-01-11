"use client";

// components
import IcfyIcon from "@/components/shared/IcfyIcon";

// utils
import modifyComponentClassName from "@/utils/modifyComponentClassName";

interface IProps extends IExtraClassNames {
  icon: string;
}

const FeatureIcon = ({ icon, className = "" }: IProps) => {
  return (
    <div
      className={modifyComponentClassName(
        className,
        "aspect-square text-3xl text-white w-max p-4 bg-primaryLight rounded-full"
      )}
    >
      <IcfyIcon icon={icon} />
    </div>
  );
};

export default FeatureIcon;
