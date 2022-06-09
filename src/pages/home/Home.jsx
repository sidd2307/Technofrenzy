import React from "react";
import Body from "../../components/Body";
import Carousal from "../../components/Carousal";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Test from "../../components/Test";

export default function Home() {
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
  return (
    <div>
      <NavBar />
      <Carousal />
      {/* <Test code={code} /> */}
      <br />
      <Body />
      <br />
      <Footer />
    </div>
  );
}
