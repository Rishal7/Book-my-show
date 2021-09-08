import React from "react";

//Components
import Poster from "../Components/Poster/Poster.Component";
import PlayFilters from "../Components/PlayFilters/PlayFilters.Component";

const Plays = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <div className="w-full lg:flex lg:flex-row-reverse gap-4">
        <div className="lg:w-3/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">Plays in Delhi NCR</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 ">
              <Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                title="Qaidi"
                subtitle="Akshara Theatre: Delhi"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                title="Qaidi"
                subtitle="Akshara Theatre: Delhi"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                title="Qaidi"
                subtitle="Akshara Theatre: Delhi"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                title="Qaidi"
                subtitle="Akshara Theatre: Delhi"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                title="Qaidi"
                subtitle="Akshara Theatre: Delhi"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                title="Qaidi"
                subtitle="Akshara Theatre: Delhi"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                title="Qaidi"
                subtitle="Akshara Theatre: Delhi"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Poster
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00116213-jxbqebsgmm-portrait.jpg"
                title="Qaidi"
                subtitle="Akshara Theatre: Delhi"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 p-4 ">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div className="my-3 pl-3 py-2 bg-white rounded">
            <PlayFilters
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>
          <div className="my-3 pl-3 py-2  bg-white rounded">
            <PlayFilters
              title="Language"
              tags={["English", "Hindi", "Malayalam"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plays;
