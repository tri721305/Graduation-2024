import { Typography, Button, Tag, Dropdown, Rate } from "antd";
import React, { forwardRef, useRef } from "react";
import { FaMapMarker, FaChevronDown, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "../style.scss";
import RecommendCard from "../../Detail/CustomCard/RecommendCard";

const RenderStar = ({ rating }) => {
     console.log("rating");
     return <div>{rating}</div>;
};

const Card = forwardRef((props, ref) => {
     const onMenuClick = (e) => {};

     console.log("props", props?.image);
     const items = [
          {
               key: "1",
               label: "1st item",
          },
          {
               key: "2",
               label: "2nd item",
          },
          {
               key: "3",
               label: "3rd item",
          },
     ];

     return (
          <div ref={ref} className={`card-detail-trip ${props.active ? "card-active" : ""} cursor-pointer p-4`}>
               <div className="card-detail-trip-header flex">
                    <div className="custom-location-icon">
                         <FaMapMarker size={30} className="marker" />
                         <Typography.Text className="marker-number break-keep">{props.number}</Typography.Text>
                    </div>
                    <div className="flex  items-center justify-between mb-[8px] flex-1">
                         <Typography.Text className="text-[1.125rem] leading-5" strong>
                              {props?.title}
                         </Typography.Text>
                         <Dropdown.Button
                              icon={<FaChevronDown />}
                              className="custom-dropdown-btn w-fit"
                              menu={{ items, onClick: onMenuClick }}
                         >
                              Add to trip
                         </Dropdown.Button>
                    </div>
               </div>
               <div className="card-detail-trip-body flex">
                    <div className="flex-1 overflow-hidden ">
                         <div className="tags-container flex mb-2 flex-wrap">
                              {props?.tags?.map((tag, index) => (
                                   <Tag className="custom-tag" key="index">
                                        {tag}
                                   </Tag>
                              ))}
                         </div>
                         {props?.image && (
                              <div className=" float-right w-[200px] ml-[16px] rounded-[12px] overflow-hidden h-[120px]">
                                   <img className="w-[200px] h-[120px]" src={props?.image} alt="images" key={props?.key} />
                              </div>
                         )}
                         <Typography.Text className="detail-description">{props?.description}</Typography.Text>
                         <div className="w-full flex justify-end ">
                              {props?.comments && (
                                   <div className="comments__container border-l-slate-400 border-l-2  w-[80%] custom-swiper mt-4 ">
                                        <Swiper
                                             pagination={{
                                                  type: "fraction",
                                             }}
                                             slidesPerView={"1"}
                                             navigation={true}
                                             modules={[Navigation]}
                                             className="mySwiper"
                                        >
                                             {props.comments?.map((comment, index) => (
                                                  <SwiperSlide>
                                                       <div className="px-[25px]">
                                                            <Typography.Paragraph
                                                                 className="detail-comment"
                                                                 ellipsis={{
                                                                      rows: 3,
                                                                      expandable: true,
                                                                      symbol: "more",
                                                                 }}
                                                            >
                                                                 {comment?.reviewText}
                                                            </Typography.Paragraph>
                                                            <div className="flex gap-1">
                                                                 <Rate disabled defaultValue={comment?.rating} />
                                                            </div>
                                                            <Typography.Text className="text-[#3f52e3] font-semibold">{`${comment?.reviewerName} - Google Review`}</Typography.Text>
                                                       </div>
                                                  </SwiperSlide>
                                             ))}
                                        </Swiper>
                                   </div>
                              )}
                         </div>
                    </div>
               </div>
          </div>
     );
});

export default Card;
