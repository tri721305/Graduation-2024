import React, { useState } from "react";
import { Input, Typography, Tooltip, Button } from "antd";
import Spacer from "../../../components/Spacer/Spacer";
import { HiChevronRight } from "react-icons/hi";
import CustomCard from "../CustomCard/CustomCard";
import { FaMapMarkerAlt, FaPlus, FaShoppingBag, FaTrashAlt } from "react-icons/fa";
import { CiStickyNote } from "react-icons/ci";
import { GiChecklist } from "react-icons/gi";
const Places = () => {
     const [showAddNote, setShowAddNote] = useState(false);
     const [showChecklist, setShowCheklist] = useState(false);
     return (
          <div className="places-container flex gap-2 flex-col">
               <div className="flex gap-1 items-center mb-2">
                    <Typography.Text strong>Places to visit</Typography.Text>
                    <HiChevronRight />
               </div>
               <CustomCard place="Hồ Chí Minh City" description={"hello"} index={1} />
               <div className="flex ">
                    <Input
                         prefix={<CiStickyNote />}
                         size="large"
                         placeholder="Write or paste notes here"
                         className="rounded-lg bg-[#f3f4f5] flex-1 custom-input"
                    />
                    <div className="w-[40px] graduation-trash flex justify-center items-start ">
                         <FaTrashAlt className="mt-2 text-[red]" />
                    </div>
               </div>
               <div className="flex  graduation-checklists">
                    <div className=" bg-[#f3f4f5] flex-1 pt-[6.5px] rounded-lg ">
                         <Typography.Text className="ml-[11px]" strong>
                              Checklists
                         </Typography.Text>
                         <div className="flex gap-2 border-b-black-100 border-b-2">
                              <Input
                                   className="rounded-lg bg-[#f3f4f5] custom-input"
                                   placeholder="Add some items"
                                   prefix={<GiChecklist />}
                                   size="large"
                              />
                              <Tooltip key="add note " title="Add note">
                                   <Button
                                        onClick={() => {
                                             setShowAddNote(true);
                                        }}
                                        className="btn-icon"
                                   >
                                        <FaPlus />
                                   </Button>
                              </Tooltip>
                         </div>
                         <div className="p-[6.5px] flex gap-2 items-center w-fit cursor-pointer hover:text-blue-400">
                              <FaShoppingBag />
                              <span className="font-bold">Pre-made lists</span>
                         </div>
                    </div>
                    <div className="w-[40px] graduation-trash flex justify-center items-start ">
                         <FaTrashAlt className="mt-2 text-[red]" />
                    </div>
               </div>
               <div className="flex gap-1">
                    <Input
                         className="rounded-lg bg-[#f3f4f5] custom-input"
                         placeholder="Add a place"
                         prefix={<FaMapMarkerAlt />}
                         size="large"
                    />
                    <Tooltip key="add note " title="Add note">
                         <Button
                              onClick={() => {
                                   setShowAddNote(true);
                              }}
                              className="btn-icon"
                         >
                              <CiStickyNote />
                         </Button>
                    </Tooltip>
                    <Tooltip key="add list" title="Add checklist">
                         <Button
                              onClick={() => {
                                   setShowCheklist(true);
                              }}
                              content="hello"
                              className="btn-icon"
                         >
                              <GiChecklist />
                         </Button>
                    </Tooltip>
               </div>
               <Spacer />
          </div>
     );
};

export default Places;
