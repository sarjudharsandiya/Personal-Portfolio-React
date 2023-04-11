import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Minim dolor adipisicing magna deserunt Lorem officia nisi quis reprehenderit. Adipisicing cupidatat reprehenderit sint labore aliquip dolor officia esse cillum sit ullamco cupidatat. Pariatur officia elit Lorem qui ut adipisicing. Consequat est culpa veniam anim. Enim ullamco eu amet incididunt dolore veniam sint officia officia ex velit elit. Ea occaecat consectetur et commodo minim pariatur veniam ad et enim consequat.",
    },
    {
      img: profilePic2,
      review:
        "Amet pariatur esse ullamco aliquip et in dolor laborum. Eiusmod reprehenderit quis ut officia velit ea esse consectetur qui mollit fugiat veniam veniam nisi. Eu exercitation minim ipsum quis dolor adipisicing cupidatat veniam labore proident reprehenderit voluptate consectetur.",
    },
    {
      img: profilePic3,
      review:
        "Est cillum aliqua non commodo. Ex laboris mollit in et elit Lorem aute dolore ea nostrud est occaecat dolor id. Et duis est consequat adipisicing elit veniam laborum ullamco consectetur aliquip quis veniam adipisicing nostrud. Sint mollit deserunt nostrud ea id do reprehenderit culpa velit culpa ipsum. Voluptate aute eiusmod consectetur duis non non veniam quis reprehenderit. Ex qui eiusmod velit veniam occaecat sit culpa. Quis nisi amet aliquip qui magna ad aliqua nulla excepteur consectetur id quis officia id.",
    },
    {
      img: profilePic4,
      review:
        "Culpa incididunt velit et tempor. Sit veniam eiusmod aute id est eu. Qui sint laborum dolore amet proident. Aliqua mollit labore in duis commodo cupidatat non cupidatat ut sit. Dolor elit est commodo cillum. Commodo excepteur incididunt eiusmod ad irure consectetur consequat duis reprehenderit ad tempor. Lorem ad sunt laboris tempor ut incididunt do do duis consectetur fugiat velit tempor cupidatat.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
