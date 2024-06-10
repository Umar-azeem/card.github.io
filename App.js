import React from "react";
import { useState } from "react";
import { Class } from "./commponets/Class";
import pic1 from "./pic1.webp";
import pic2 from "./pic2.webp";
import pic3 from "./pic3.webp";
import { Star } from "./star";
import { Point } from "./star";
import { Sticker } from "./star";
function MyComponent() {
  const [star , setStar] = useState(0);
  const [point, setPoint] = useState(0);
  const [sticker, setSticker] = useState(0); // for 1st box 
  return (
    <>
    <div><Class/></div>
      <div className="container w-screen h-auto">
        <div className="flex justify-center">
          <div className="bg-pink-700 m-4 w-auto h-auto rounded-md"><img src={pic1} className=" py-10 px-10 hover:tex " /><h1 className="text-2xl px-6 font-bold"> 2in1</h1><div className="flex justify-between px-6"><p className="text-xl font-semibold ">Price</p><p className="text-xl font-semibold">Rs:250</p></div><button className="bg-blue-300 font-bold w-auto rounded-md py-4 px-28 m-8 hover:bg-blue-700 hover:text-white border-blue-400 border-opacity-20">Add to Cart</button>

          <div className=" flex justify-between">
            <div class="flex items-center m-4">
              {[1,2,3,4,5].map((v) => {
                const checkWhite = v <= star
                return (
                  <div  onClick={() => setStar(v)}>

                <Star key={v} color={checkWhite ? "yellow":"White"}/>
             </div>
              )
              }
              )
              }
    
            </div>
            <p className="text-xl border-spacing-x-11 m-4 ">items:@ Total-Price:@</p>
     </div>
          </div>
          <div className="bg-blue-700 m-4 w-96 h-auto rounded-md"><img src={pic2} className="  py-10 px-10 " /><h1 className="text-2xl px-6 font-bold">Ring Baring</h1><div className="flex justify-between px-6"><p className="text-xl font-semibold ">Price</p><p className="text-xl font-semibold">Rs:250</p></div><button className="bg-blue-300 rounded-md  py-4 px-28 m-8">Add to Cart</button>

          <div className=" flex justify-between">
            <div class="flex items-center m-4">
            {[1,2,3,4,5].map((x) => {
              const checkWhite = x <= point
             return(
              <div onClick={()=> setPoint(x)}>
                <Point key={x} color={checkWhite ? "yellow":"White"}/>
              </div>
             )
            
            } )
            }
            </div>
            <p className="text-xl border-spacing-x-11 m-4 ">items:@ Total-Price:@</p>
     </div>
          </div>
          <div className="bg-violet-700 m-4 w-96 h-auto rounded-md"><img src={pic3} className="  py-14 px-10 " /><h1 className="text-2xl px-6 font-bold">Ring 2in1 with Bracelet</h1><div className="flex justify-between px-6"><p className="text-xl font-semibold ">Price</p><p className="text-xl font-semibold">Rs:250</p></div><button className="bg-blue-300 rounded-md py-4 px-28 m-7 text-white">Add to Cart</button>
<div className=" flex justify-between">
            <div class="flex items-center m-4">
            {[1,2,3,4,5].map((z) => {
              const checkWhite = z <= sticker
             return(
              <div onClick={()=> setSticker(z)}>
                <Sticker key={z} color={checkWhite ? "yellow":"White"}/>
              </div>
             )
            
            } )
            }
            </div>
            <p className="text-xl border-spacing-x-11 m-4 ">items:@ Total-Price:@</p>
     </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyComponent;
