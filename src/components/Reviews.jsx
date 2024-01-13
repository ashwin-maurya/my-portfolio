import React from "react";

export default function Reviews() {
  return (
    <>
      <div class="w-full h-full  flex items-center justify-center ">
        <div class="w-full  mx-auto">
          <div class="text-center max-w-xl mx-auto">
            <h1 class="text-xl  font-bold mb-2 text-gray-600">
              What people are saying.
            </h1>
            <h3 class="text-xl mb-2 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div class="text-center mb-5">
              <span class="inline-block w-1 h-1 rounded-full bg-gray-500 ml-1"></span>
              <span class="inline-block w-3 h-1 rounded-full bg-gray-500 ml-1"></span>
              <span class="inline-block w-40 h-1 rounded-full bg-gray-500 ml-1"></span>
              <span class="inline-block w-3 h-1 rounded-full bg-gray-500 ml-1"></span>
              <span class="inline-block w-1 h-1 rounded-full bg-gray-500 ml-1"></span>
            </div>
          </div>
          <div class="flex justify-center items-start">
            <div class="px-3 md:w-2/3 flex">
              <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div class="w-full flex mb-4 items-center">
                  <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-sm uppercase text-gray-600">
                      Kenzie Edgar.
                    </h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-sm leading-tight">
                    <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sunt ratione dolor exercitationem minima quas itaque
                    saepe quasi architecto vel! Accusantium.
                    <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div class="w-full flex mb-4 items-center">
                  <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=2" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-sm uppercase text-gray-600">
                      Stevie Tifft.
                    </h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-sm leading-tight">
                    <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
                    Dolore quod necessitatibus, labore sapiente, est,
                    dignissimos ullam error ipsam sint quam tempora vel.
                    <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
