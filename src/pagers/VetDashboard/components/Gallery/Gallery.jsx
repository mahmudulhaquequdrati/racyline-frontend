import image24 from "../../../../assets/images/image (24).png";
import image25 from "../../../../assets/images/image (25).png";
import image26 from "../../../../assets/images/image (26).png";
import image27 from "../../../../assets/images/image (27).png";
import image28 from "../../../../assets/images/image (28).png";
import image29 from "../../../../assets/images/image (29).png";
import image30 from "../../../../assets/images/image (30).png";
import image31 from "../../../../assets/images/image (31).png";
import image32 from "../../../../assets/images/image (32).png";
import image34 from "../../../../assets/images/image (34).png";
import text1 from "../../../../assets/images/text/Group-1.png";
import text2 from "../../../../assets/images/text/Group-2.png";
import text3 from "../../../../assets/images/text/Group-3.png";
import text4 from "../../../../assets/images/text/Group-4.png";
import text5 from "../../../../assets/images/text/Group-5.png";
import text6 from "../../../../assets/images/text/Group-6.png";
import text7 from "../../../../assets/images/text/Group-7.png";
import text8 from "../../../../assets/images/text/Group-8.png";
import text9 from "../../../../assets/images/text/Group-9.png";
import text10 from "../../../../assets/images/text/Group-10.png";
import text11 from "../../../../assets/images/text/Group-11.png";
import text12 from "../../../../assets/images/text/Group-12.png";
import text13 from "../../../../assets/images/text/Group-13.png";
import text14 from "../../../../assets/images/text/Group-14.png";
import text15 from "../../../../assets/images/text/Group-15.png";
import text16 from "../../../../assets/images/text/Group-16.png";
import text17 from "../../../../assets/images/text/Group-17.png";
import text18 from "../../../../assets/images/text/Group-18.png";
import text19 from "../../../../assets/images/text/Group-19.png";
import text20 from "../../../../assets/images/text/Group-20.png";
import text21 from "../../../../assets/images/text/Group-21.png";
import text22 from "../../../../assets/images/text/Group-22.png";
import text23 from "../../../../assets/images/text/Group-23.png";
import text24 from "../../../../assets/images/text/Group-24.png";
import dash1 from "../../../../assets/images/text/Vector.png";
import dash2 from "../../../../assets/images/text/Vector-1.png";
const texts = [
  dash1,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
  text11,
  text12,
  text13,
  text14,
  text15,
  text16,
  text17,
  text18,
  text19,
  text21,
  text22,
  text23,
  text24,
  dash2,
];

const Gallery = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-2">
      <div>
        <img src={image24} className=" w-[276px] mx-auto h-[330px]" alt="" />
        <img src={image29} className="w-[276px] mx-auto h-[330px]" alt="" />
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-3">
        <img
          src={image25}
          className="hidden lg:block w-[276px] mx-auto h-[295px]"
          alt=""
        />

        <img src={image26} className="w-[276px] mx-auto h-[295px]" alt="" />
        <img src={image27} className="w-[276px] mx-auto h-[295px]" alt="" />
        <span className=" lg:col-span-3 bg-[#033C5A] py-2 text-center text-white text-3xl">
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 p-2">
            {texts.map((text) => (
              <img key={text} src={text} alt=""></img>
            ))}
          </div>
        </span>
        <img src={image30} className="w-[276px] mx-auto h-[295px]" alt="" />
        <img
          src={image31}
          className="hidden lg:block w-[276px] mx-auto h-[295px]"
          alt=""
        />
        <img src={image32} className="w-[276px] mx-auto h-[295px]" alt="" />
      </div>
      <div>
        <img src={image28} className="w-[276px] mx-auto h-[330px]" alt="" />
        <img src={image34} className="w-[276px] mx-auto h-[330px]" alt="" />
      </div>
    </div>
  );
};

export default Gallery;
