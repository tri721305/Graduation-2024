import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { places } from "../../constant/staticDataDemo/places";
import { Typography } from "antd";
import Card from "../DetailTrip/Card/Card";

// ============================ CSS =============================
import "./style.scss";
const DetailTravelGuides = () => {
     const params = useParams();

     return (
          <div className="flex w-full h-full overflow-hidden">
               <div className="guides-detail w-[50%]">
                    <div className="guide-title relative w-fit">
                         <Typography.Text className="text-[1.125rem] z-100" strong>
                              {places.title}
                         </Typography.Text>
                         <div className="h-[50%] z-10 w-[80%] b-2 absolute bg-[#fbd4d4a8]"></div>
                    </div>
                    <div className="guide-body">
                         {places?.placeMetadata?.map((place, index) => {
                              console.log("place", place?.imageKeys, places?.placeMetadata);
                              return (
                                   <Card
                                        number={index + 1}
                                        title={place.name}
                                        tags={place?.categories}
                                        description={place?.generatedDescription}
                                        image={
                                             place?.imageKeys?.length > 0
                                                  ? `https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImageSmall/${place?.imageKeys[0]}`
                                                  : null
                                        }
                                        comments={place?.reviews}
                                   />
                              );
                         })}
                    </div>
               </div>
          </div>
     );
};

export default DetailTravelGuides;
