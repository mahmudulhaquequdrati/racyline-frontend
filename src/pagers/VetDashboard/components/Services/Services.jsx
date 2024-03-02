import image from "../../../../assets/images/image.png";
import image20 from "../../../../assets/images/image (20).png";
import image21 from "../../../../assets/images/image (21).png";
import image22 from "../../../../assets/images/image (22).png";

const Services = () => {
  const items = [
    {
      img: image20,
      heading: "Aumenta la visibilità",
    },
    {
      img: image21,
      heading: "Aumenta la visibilità",
    },
    {
      img: image22,
      heading: "Aumenta la visibilità",
    },
    {
      img: image,
      heading: "Aumenta la visibilità",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 bg-[#033C5A]">
      {items.map((item) => (
        <div
          key={item.img}
          className="p-10 flex flex-col justify-center items-center gap-5"
        >
          <img src={item.img} alt="" />
          <h2 className="text-2xl text-white text-center tracking-tighter font-semibold">
            {item.heading}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Services;
