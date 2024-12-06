import React, { useState, useEffect, useRef } from "react";
import { Typography, Dropdown, Tag, Badge, Avatar, Button } from "antd";
import { demoRestaurant } from "../../constant/demoRestaurant";
import FoodCard from "./FoodCard";
import { Map, Marker, useMap, MapProvider } from "react-map-gl";
import { FaMapMarker, FaChevronDown, FaMapMarkerAlt, FaRegClock, FaPhone } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa6";
import { restaurantActions } from "./restaurantSlice";
import { FaEarthAfrica } from "react-icons/fa6";
import moment from "moment";

const days = ["Sunday", "Monday", "Tuesday", "Webnesday", "Thursday", "Friday", "Saturday"];
const Restaurant = () => {
     const dispatch = useDispatch();

     const { mapRestaurant } = useMap();
     const mapRef = useRef(null);
     const [showTime, setShowTime] = useState(false);
     const selectedRestaurant = useSelector((state) => state?.restaurant?.selectedData);

     useEffect(() => {
          if (selectedRestaurant?.dataPosition?.place) {
               mapRef?.current?.flyTo({
                    center: [selectedRestaurant?.dataPosition?.place?.longitude, selectedRestaurant?.dataPosition?.place?.latitude],
               });
          }
     }, [selectedRestaurant]);

     console.log("selectedRestaurant", selectedRestaurant?.index);

     return (
          <div className="flex w-full relative h-full px-[32px] pt-[32px] overflow-hidden">
               <div className="guides-detail w-[50%] pr-[16px] overflow-auto max-h-[100vh]">
                    <div className="guide-title relative w-fit">
                         <Typography.Text className="text-[1.125rem] z-100" strong>
                              {demoRestaurant.title}
                         </Typography.Text>
                         <div className="h-[50%] z-10 w-[80%] b-2 absolute bg-[#fbd4d4a8]"></div>
                    </div>
                    <div className="guide-description mt-4">
                         <Typography.Text className="text-[1rem] text-left">{demoRestaurant?.headerTemplate?.topBlurb}</Typography.Text>
                    </div>
                    <div className="flex flex-col gap-2">
                         {demoRestaurant?.placeMetadata?.map((place, index) => (
                              <FoodCard
                                   onClick={() => {
                                        dispatch(
                                             restaurantActions.setSelectedData({
                                                  dataPosition: demoRestaurant.boardSections[0].blocks[index],
                                                  placeInfo: place,
                                                  index,
                                             })
                                        );
                                   }}
                                   data={place}
                                   image={place?.imageKeys}
                                   number={index + 1}
                                   title={place?.name}
                              />
                         ))}
                    </div>
               </div>
               <div className="detail-map flex  flex-1">
                    <MapProvider>
                         <Map
                              mapboxAccessToken="pk.eyJ1IjoibWluaHRyaTEyMDUiLCJhIjoiY2x5eWx4aHl1MWd0djJpc2I0aGJjc3RzMyJ9.QP5T8rdt-UijImXQZweQWg"
                              initialViewState={{
                                   longitude: 106.7217912,
                                   latitude: 10.7952219,
                                   zoom: 17,
                              }}
                              ref={mapRef}
                              id="mapRestaurant"
                              mapStyle="mapbox://styles/mapbox/streets-v9"
                         >
                              {/* {demoRestaurant.boardSections[0].blocks.map((marker, index) => {
                                   return (
                                        <Marker
                                             key={marker.selectedImageKey}
                                             color="blue"
                                             longitude={marker.place.longitude}
                                             latitude={marker.place.latitude}
                                             anchor="bottom"
                                        />
                                   );
                              })} */}
                              {demoRestaurant.boardSections[0].blocks.map((marker, index) => (
                                   <Marker
                                        key={marker.selectedImageKey}
                                        color="blue"
                                        longitude={marker.place.longitude}
                                        latitude={marker.place.latitude}
                                   >
                                        <div className="custom-location-icon z-50 ">
                                             <FaMapMarker
                                                  className={`${selectedRestaurant?.index == index && "!text-red-400"} marker`}
                                                  size={30}
                                             />
                                             <Typography.Text className="marker-number break-keep">{index + 1}</Typography.Text>
                                        </div>
                                   </Marker>
                              ))}
                         </Map>
                    </MapProvider>
               </div>
               {selectedRestaurant && (
                    <div className="active-card-maps">
                         <div className="flex">
                              <div className="custom-location-icon !mr-[6px]">
                                   <FaMapMarker size={30} className="marker" />
                                   <Typography.Text className="marker-number break-keep">{selectedRestaurant?.index + 1}</Typography.Text>
                              </div>
                              <Typography.Text className="text-[1.125rem]" strong>
                                   {selectedRestaurant?.placeInfo?.name}
                              </Typography.Text>
                         </div>
                         <Dropdown.Button
                              icon={<FaChevronDown />}
                              className="custom-dropdown-btn w-fit mt-[12px]"
                              // menu={{ items, onClick: onMenuClick }}
                         >
                              Add to trip
                         </Dropdown.Button>
                         <div className="flex flex-wrap py-2 gap-1">
                              {selectedRestaurant?.placeInfo?.categories?.map((tag, i) => (
                                   <Tag className="custom-tag">{tag}</Tag>
                              ))}
                         </div>
                         <div className="flex gap-1 items-center">
                              <FaStar className="text-yellow-500" />
                              <Typography>{selectedRestaurant?.placeInfo?.rating}</Typography>
                              <Typography>( {selectedRestaurant?.placeInfo?.numRatings} ) </Typography>
                         </div>
                         <div className="flex gap-1 items-center">
                              <FaMapMarkerAlt />
                              <Typography.Text>{selectedRestaurant?.placeInfo?.address}</Typography.Text>
                         </div>
                         <div>
                              <div className="flex gap-1 ">
                                   <Typography.Text className="mt-[4px]">
                                        <FaRegClock />
                                   </Typography.Text>
                                   <div className="flex flex-col gap-1">
                                        <div className="flex gap-1 items-center">
                                             <Typography.Text>{moment().format("dddd")}</Typography.Text>
                                             <Typography.Text>
                                                  {moment(
                                                       selectedRestaurant?.placeInfo?.openingPeriods[moment().day()]?.open?.time,
                                                       "HHmm"
                                                  ).format("hh:mm A")}
                                             </Typography.Text>
                                             <Typography.Text>-</Typography.Text>
                                             <Typography.Text>
                                                  {moment(
                                                       selectedRestaurant?.placeInfo?.openingPeriods[moment().day()]?.close?.time,
                                                       "HHmm"
                                                  ).format("hh:mm A")}
                                             </Typography.Text>
                                        </div>
                                        <div className="flex gap-1">
                                             {showTime ? (
                                                  <div>
                                                       {days.map((item, index) => (
                                                            <div>
                                                                 <Typography.Text>{item}: </Typography.Text>

                                                                 <Typography.Text>
                                                                      {moment(
                                                                           selectedRestaurant?.placeInfo?.openingPeriods[index]?.open?.time,
                                                                           "HHmm"
                                                                      ).format("hh:mm A")}
                                                                 </Typography.Text>
                                                                 <Typography.Text>-</Typography.Text>
                                                                 <Typography.Text>
                                                                      {moment(
                                                                           selectedRestaurant?.placeInfo?.openingPeriods[index]?.close
                                                                                ?.time,
                                                                           "HHmm"
                                                                      ).format("hh:mm A")}
                                                                 </Typography.Text>
                                                            </div>
                                                       ))}
                                                  </div>
                                             ) : (
                                                  days.map((item) => (
                                                       <Badge>
                                                            <Avatar size={18} shape="circle">
                                                                 {item?.slice(0, 2)}
                                                            </Avatar>
                                                       </Badge>
                                                  ))
                                             )}
                                             <Typography.Text
                                                  onClick={() => {
                                                       setShowTime(!showTime);
                                                  }}
                                                  className="text-blue-700 cursor-pointer"
                                             >
                                                  {showTime ? "Hide time" : "Show time"}
                                             </Typography.Text>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="flex gap-1 items-center">
                              <FaPhone />
                              <Typography.Text className="text-blue-700">
                                   {selectedRestaurant?.placeInfo?.internationalPhoneNumber}
                              </Typography.Text>
                         </div>
                         <div className="flex gap-1 items-center">
                              <FaEarthAfrica />
                              <Typography.Text className="text-blue-700">{selectedRestaurant?.placeInfo?.website}</Typography.Text>
                         </div>
                    </div>
               )}
          </div>
     );
};

export default Restaurant;
