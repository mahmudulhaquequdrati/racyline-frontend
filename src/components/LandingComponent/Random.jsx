const Random = ({ backgroundColor, flexDirection, image, heading, para }) => {
  return (
    <div className={`${backgroundColor} py-2`}>
      <div
        className={`max-w-[1140px] mx-auto ${flexDirection} justify-center items-center gap-x-20 md:my-10 p-[16px]`}
      >
        <img
          src={image}
          className="w-full md:w-[300px]  md:h-[400px] rounded-lg my-5 md:my-0"
          alt=""
        />
        <div>
          <h1 className="text-3xl font-bold mb-5 ">{heading}</h1>
          <p className="text-lg text-gray-500 ">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default Random;
