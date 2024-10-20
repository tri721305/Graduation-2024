import React from "react";
import "./style.scss";
import { Avatar, Button, Typography, Tag } from "antd";
import hcm3 from "../../assets/images/hcm3.jpg";
import { FaRegHeart, FaShare } from "react-icons/fa";
import { IoChatboxOutline, IoArrowUndo } from "react-icons/io5";
import { dataDetail } from "../../constant/demoData";
import { CiMenuFries } from "react-icons/ci";
import Card from "./Card/Card";
import Map from "react-map-gl";

const DetailTrip = () => {
     return (
          <div className="flex w-full h-full overflow-hidden">
               <div className="detailtrip-container w-[35%] min-w-[760px] ">
                    <div className="detailtrip-top flex items-center py-[12px] justify-between">
                         <Button className="custom-btn-text ml-[30px]" icon={<IoArrowUndo />}>
                              Undo
                         </Button>
                         <div className="flex gap-2 items-center">
                              <Button className="graduation-btn-black">
                                   <FaShare /> Share
                              </Button>
                              <Button className="custom-btn-menu">
                                   <CiMenuFries />
                              </Button>
                         </div>
                    </div>
                    <div className=" detail-trip-scroll">
                         <div className="relative">
                              <img src={hcm3} alt="img" />
                              <div className="absolute bottom-0 left-0 px-[32px] py-[20px]">
                                   <Typography.Text className="title-detailtrip font-bold text-[36px] text-[#fff]">
                                        Hồ Chí Minh city
                                   </Typography.Text>
                                   <div>
                                        <Tag color="magenta">Verified guide</Tag>
                                        <Tag color="volcano">Ho Chi Minh city guide</Tag>
                                   </div>
                              </div>
                         </div>
                         <div className="detailtrip py-[20px] px-[32px]">
                              <div className="detailtrip-description ">
                                   <div className="flex justify-between">
                                        <div className="flex gap-1 items-center">
                                             <Avatar size={40} src="" alt="" />
                                             <div className="flex flex-col ">
                                                  <Typography.Text>Minh Trí</Typography.Text>
                                                  <Typography.Text>14th Sep 2024 • 19829 views</Typography.Text>
                                             </div>
                                        </div>
                                        <div className="flex gap-1">
                                             <Button className="custom-btn-orange">Follow</Button>
                                             <Button type="text" className="min-h-[40px] flex items-center gap-2">
                                                  <FaRegHeart /> 200
                                             </Button>
                                             <Button type="text" className="min-h-[40px] flex items-center gap-2">
                                                  <IoChatboxOutline />
                                             </Button>
                                             <Button type="text" className="min-h-[40px] flex items-center gap-2">
                                                  <FaShare />
                                             </Button>
                                        </div>
                                   </div>
                                   <div className="my-[16px]">
                                        <Typography.Text className="graduation-text-detail">{dataDetail.description}</Typography.Text>
                                   </div>
                                   <div className="mt-[24px]">
                                        {dataDetail.places.map((convenience, index) => (
                                             <div>
                                                  <div className="mb-[16px]">
                                                       <Typography.Text className="graduation-title">
                                                            {convenience.conveninceName}
                                                       </Typography.Text>
                                                  </div>
                                                  {convenience.listPlaces.map((place, index) => (
                                                       <Card
                                                            number={index + 1}
                                                            title={place.name}
                                                            description={place.description}
                                                            tags={place.tags}
                                                            image={place.image}
                                                       />
                                                  ))}
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="detail-map flex-1">
                    <Map
                         mapboxAccessToken="pk.eyJ1IjoibWluaHRyaTEyMDUiLCJhIjoiY2x5eWx4aHl1MWd0djJpc2I0aGJjc3RzMyJ9.QP5T8rdt-UijImXQZweQWg"
                         initialViewState={{
                              longitude: 106.6926148,
                              latitude: 10.7708772,
                              zoom: 14,
                         }}
                         mapStyle="mapbox://styles/mapbox/streets-v9"
                    />
               </div>
          </div>
     );
};

export default DetailTrip;
