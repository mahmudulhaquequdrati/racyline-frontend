import Button from "./button";

/* eslint-disable react/prop-types */
const OnlineServices = ({
  img,
  flexDirection,
  title,
  head,
  subHead,
  para,
  lists,
  button,
}) => {
  return (
    <div
      className={`${flexDirection} justify-center items-center gap-4 lg:gap-16 mt-40 px-2`}
    >
      <img src={img} className="w-full lg:w-auto lg:h-[500px]" alt="" />
      <div className="flex flex-col justify-start items-start gap-2 lg:gap-4 p-2">
        <h5 className="text-[13px]">{title}</h5>
        <h2 className="lg:text-[36px] font-bold">{head}</h2>
        <p>
          <span className="font-bold">{subHead}</span>
          {para}
        </p>
        <ul className="list-disc pl-4">
          {lists?.map((list) => (
            <li key={list.subHeading} className="lg:mb-2">
              <span className="font-bold">{list.subHeading}</span>
              {list.list}
            </li>
          ))}
        </ul>
        {button && (
          <Button
            className="bg-[#033C5A] text-white mt-4"
            content={button}
          ></Button>
        )}
      </div>
    </div>
  );
};

export default OnlineServices;
