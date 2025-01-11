"use client";

// react
import { useState } from "react";

// icons
import { Icon } from "@iconify/react";

// component
import { Text, AccordionVertical } from "@/components/shared";
import modifyComponentClassName from "@/utils/modifyComponentClassName";

interface IQuestionAnswer {
  id: number;
  question: string;
  answer: string;
}

interface IProps extends IExtraClassNames {
  data: IQuestionAnswer;
}

const QuestionAnswer = ({ data, className = "" }: IProps) => {
  const [expanded, setExpanded] = useState(false);
  const { question, answer } = data;

  return (
    <div
      onClick={() => setExpanded((prev) => !prev)}
      className={modifyComponentClassName(
        className,
        "bg-white border border-neutral-200 px-4 py-6 rounded-xl shadow-sm 2xl:shadow-small cursor-pointer"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        {/* question */}
        <p className="font-semibold text-xl">{question}</p>

        {/* caret button */}
        <button className="block text-primary" aria-label="Expand button">
          <Icon
            className={`text-xl 2xl:text-2xl transition-all duration-default ${
              expanded ? "rotate-180" : "rotate-0"
            }`}
            icon="ph:caret-down-fill"
          />
        </button>
      </div>

      {/* answer */}
      <AccordionVertical expanded={expanded} animate={true}>
        <Text text={answer} className="pt-4" />
      </AccordionVertical>
    </div>
  );
};

export default QuestionAnswer;
