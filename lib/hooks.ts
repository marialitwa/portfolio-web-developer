import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold: threshold
        // defining threshold: Only when 75% (see default value 0.75 as option) 
        // of the section is in view the section is set to active
        // Otherwise the section becomes active with the first pixel showing 
        // up in the viewpost
      });
      // console.log(inView); => will show as true or false when section is in viewport
    
      const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection(sectionName);
        }
      }, [inView, setActiveSection, timeOfLastClick, sectionName]);
    
      return {
        ref
        // REVIEW "inView" comments
      };
    }