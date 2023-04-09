import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../../delete/project_3D_developer_portfolio/src/hoc";
import { technologies } from "../../delete/project_3D_developer_portfolio/src/constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
