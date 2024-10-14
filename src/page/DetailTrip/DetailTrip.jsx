import React from "react";
import "./style.scss";
import { Avatar, Button, Typography, Tag } from "antd";
import hcm3 from "../../assets/images/hcm3.jpg";
import { FaRegHeart, FaShare } from "react-icons/fa";
import { IoChatboxOutline, IoArrowUndo } from "react-icons/io5";
const DetailTrip = () => {
     return (
          <div className="detailtrip-container w-[40%] ">
               <div className="detailtrip-top flex items-center py-[12px] justify-around">
                    <Button className="custom-btn-text" icon={<IoArrowUndo />}>
                         Undo
                    </Button>
                    <div className="flex gap-2">
                         <Button>Share</Button>
                         <Button>Menu Icon</Button>
                    </div>
               </div>
               <div className="relative">
                    <img src={hcm3} alt="img" />
                    <div className="absolute bottom-0 left-0 px-[32px] py-[20px]">
                         <Typography.Text className="title-detailtrip font-bold text-[36px] text-[#fff]">Hồ Chí Minh city</Typography.Text>
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
                         <div>
                              <Typography.Text>Description</Typography.Text>
                         </div>
                         <div>
                              <div>
                                   <Typography.Text>Day 1</Typography.Text>
                              </div>
                              <div>
                                   <div></div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default DetailTrip;
