import React from "react";
import { Typography, Button, Dropdown, Rate, Tag } from "antd";
import { FaMapMarker, FaChevronDown, FaStar, FaGoogle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { AiOutlineGoogle } from "react-icons/ai";
import { LuDot } from "react-icons/lu";
import { TbBrandTripadvisor } from "react-icons/tb";
import { IoMdInformationCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
const FoodCard = (props) => {
     const onMenuClick = (e) => {};

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
          <div onClick={props?.onClick} className="food-card-container   p-[12px]">
               <div className="food-card-header flex">
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
               <div className="food-card-body">
                    <div>
                         <Swiper
                              className="mySwiper"
                              slidesPerView={1}
                              navigation={true}
                              modules={[Navigation]}
                              pagination={{ type: "fraction" }}
                         >
                              {props?.image?.map((img, index) => {
                                   return (
                                        <SwiperSlide>
                                             <div className="rounded-[12px] overflow-hidden max-h-[400px]">
                                                  <img
                                                       className="object-cover"
                                                       alt="logo"
                                                       src={`https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImage/${img}`}
                                                  />
                                             </div>
                                        </SwiperSlide>
                                   );
                              })}
                         </Swiper>
                    </div>
                    <div className="flex flex-col gap-2">
                         <div className="flex items-end text-[1rem] gap-2">
                              <Rate defaultValue={props?.data?.tripadvisorRating} allowHalf />
                              <div className="flex h-full gap-2 items-center">
                                   <Typography.Text className="inline" strong>
                                        {props?.data?.rating}

                                        <span> ({props?.data?.numRatings})</span>
                                   </Typography.Text>
                                   <Typography>
                                        <AiOutlineGoogle classNam="text-[1rem]" />
                                   </Typography>
                                   <LuDot />
                                   <Typography.Text className="inline" strong>
                                        {props?.data?.tripadvisorRating}

                                        <span> ({props?.data?.tripadvisorNumRatings})</span>
                                   </Typography.Text>
                                   <TbBrandTripadvisor />
                              </div>
                         </div>
                         <div className="flex flex-wrap py-2 gap-1">
                              {props?.data?.categories?.map((tag, index) => (
                                   <Tag className="custom-tag">{tag}</Tag>
                              ))}
                         </div>
                         <div>
                              <Typography.Paragraph>{props?.data?.generatedDescription}</Typography.Paragraph>
                         </div>
                         <div className="w-full flex justify-end ">
                              {props?.data?.reviews && (
                                   <div className="comments__container border-l-slate-400 border-l-2  w-[80%] custom-swiper mt-4 ">
                                        <Swiper
                                             pagination={{
                                                  type: "fraction",
                                             }}
                                             key="comment"
                                             slidesPerView={"1"}
                                             navigation={true}
                                             modules={[Navigation]}
                                             className="mySwiper"
                                        >
                                             {props?.data?.reviews?.map((comment, index) => (
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
                         <div className="flex  items-center gap-2">
                              <IoMdInformationCircle />
                              <Typography.Text>{props?.data?.address}</Typography.Text>
                              <LuDot />
                              <Typography.Text className="italic text-blue-500 cursor-pointer">{props?.data?.website}</Typography.Text>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default FoodCard;
