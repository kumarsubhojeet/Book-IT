import React , {useState , useEffect} from "react";
import { Button } from "antd";
import { BsArrowLeft } from "react-icons/bs";
import {getRooms} from '../redux/action/roomAction'
import { useDispatch ,useSelector } from "react-redux";
import RoomItems from "./room/roomItems";

const HomePage = () => {
  const dispatch  = useDispatch()
  const { rooms } = useSelector(state => state.allRooms);
  console.log(rooms);

  useEffect(()=>{
    dispatch(getRooms())
  },[])

  return (
    <>
      <div className="home_page w-[80%] mx-auto py-10 ">
        <h1 className=" text-3xl font-bold ">Stay In New York</h1>
        <p className="flex items-center cursor-pointer hover:text-Secoundary_voilet text-primeBlue font-semibold ">
          <BsArrowLeft className=" mr-2 " /> Back to Search
        </p>
        {/* <RoomItems /> */}
      </div>
    </>
  );
};

export default HomePage;
