import React from "react";
import AskQuestion from "../../components/AskQuestion";
import Body from "../../components/Body";
import Carousal from "../../components/Carousal";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Test from "../../components/Test";
import useUserStore from "../../store";

export default function Home() {
  const { userInfo } = useUserStore();
  const code = `
  BinarySearch(A[0..N-1], value, low, high) {  
    if (high < low)  
        return -1 // not found  
    mid = low + ((high - low) / 2) 
    if (A[mid] > value)  
        return BinarySearch(A, value, low, mid-1)  
    else if (A[mid] < value)  
        return BinarySearch(A, value, mid+1, high)  
    else
       return mid // found
    }
    }`;

  console.log(userInfo);
  return (
    <div>
      <NavBar />
      <Carousal />
      {/* <Test code={code} /> */}
      <AskQuestion />
      <Body />
      <br />
      <Footer />
    </div>
  );
}
