import React from "react";
import HomeCarosel from "../../HomeCarosel/HomeCarosel";
import HomeSectionCarosel from "../../HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../../Data/mens_kurta";


function HomePage() {
  return (
    <div>
      <HomeCarosel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's kurta"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's shirt"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Dress"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Saree"} />
        
      </div>
    
    </div>
  );
}

export default HomePage;
