import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="max-w-84 p-3 md:p-3.75 lg:p-6 flex xs:not-odd:my-3 rounded-[10px] bg-white  hover:scale-[1] duration-450  cursor-pointer hover:shadow-[0px_0px_37px_5px_rgba(0,_0,_0,_0.1)] shadow-gray-200 max-sm:mx-auto"
      /* Scale effect:  */
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`h-10 md:h-12 aspect-square center rounded-[4px]`}
        style={{ backgroundColor: hover ? 'var(--color-picto-primary)' : 'rgba(153,41,251,0.14)' }}
      >
        <FontAwesomeIcon
          icon={item?.icon}
          className={`text-lg md:text-xl ${
            hover ? "text-white" : "text-picto-primary"
          }`}
        />
      </div>
      <div className="ms-3.25">
        <p className="text-[12px] md:text-[14px] font-normal" style={{ color: 'var(--text-muted)' }}>
          {item?.title}:
        </p>
        <p className="text-[14px] md:text-[16px] font-medium" style={{ color: 'var(--color-on-surface)' }}>
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default Address;
