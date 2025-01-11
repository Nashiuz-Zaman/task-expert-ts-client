// component
import { Text } from "@/components/shared";
import FeatureIcon from "../FeatureIcon/FeatureIcon";
import modifyComponentClassName from "@/utils/modifyComponentClassName";

export interface IFeatureData {
  id: number;
  heading: string;
  description: string;
  icon: string;
}

interface IProps extends IExtraClassNames {
  featureData: IFeatureData;
}

const Feature = ({ featureData, className = "" }: IProps) => {
  const { heading, description, icon } = featureData;

  return (
    <div
      className={modifyComponentClassName(
        className,
        "text-center rounded-lg md:rounded-xl lg:rounded-2xl p-6 2md:py-7 bg-white border border-neutral-200 shadow-sm"
      )}
    >
      <FeatureIcon icon={icon} className="mx-auto mb-5" />

      <h3 className="font-bold text-textPrimary text-xl mb-2">{heading}</h3>

      <Text text={description} />
    </div>
  );
};

export default Feature;
