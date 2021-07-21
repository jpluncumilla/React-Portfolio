import React, {useState} from 'react';
import {AiOutlineUpSquare} from "react-icons/ai";
import { Button } from './ScrollButtonStyle';

export default function ScrollButton() {

    const [visible, setVisible] = useState(false);
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
      
      window.addEventListener('scroll', toggleVisible);

    return (
        <Button>
            <AiOutlineUpSquare onClick={scrollToTop} style={{display: visible ? "inline" : "none"}}/>
        </Button>
    )
}
