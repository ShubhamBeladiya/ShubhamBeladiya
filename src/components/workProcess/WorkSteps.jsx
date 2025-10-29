import { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`rounded-xl hover:drop-shadow-2xl shadow-gray-300 ease-out duration-1000  ${
        style && style
      }`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className={`w-11 h-11 sm:w-18 sm:h-18 text-center center rounded-md`}
        style={{ backgroundColor: hover ? 'var(--color-picto-primary)' : 'rgba(153,41,251,0.14)' }}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-sm:p-2 sm:w-8 sm:h-8"
        >
          <path d={data?.svgPath} fill={hover ? '#FFFFFF' : 'var(--color-picto-primary)'} />
        </svg>
      </div>
      <div className="mt-3 xs:mt-4 sm:mt-8">
        <p className="font-semibold sm:text-xl">{`${data?.id}. ${data?.title}`}</p>
        <p className="mt-3 text-[13px] sm:text-[16px]" style={{ color: 'var(--text-muted)' }}>
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;
