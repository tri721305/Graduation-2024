import React from "react";
import Spacer from "../../../components/Spacer/Spacer";
import { Input, Typography } from "antd";
import { HiChevronRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { detailActions } from "../detailSlice";
const Notes = (props) => {
     const dispatch = useDispatch();
     return (
          <div className="notes-container" ref={props?.ref}>
               <div className="flex gap-1 items-center mb-2">
                    <Typography.Text strong>Notes</Typography.Text>
                    <HiChevronRight />
               </div>
               <Input.TextArea
                    rows={4}
                    className="border-none bg-[#f3f4f5] rounded-lg p-2"
                    placeholder="Write or paste anything here: how to get around, tips and tricks"
                    onChange={(e) => {
                         dispatch(detailActions.setNotes(e.target.value));
                    }}
               />
               <Spacer />
          </div>
     );
};

export default Notes;
