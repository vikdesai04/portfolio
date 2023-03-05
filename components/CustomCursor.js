import React from 'react'
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import '../styles/Home.module.css'

import { motion } from "framer-motion"

const CustomCursor = (props) => {

    useEffect(() => {
      let mouseCursor = document.querySelector("#cursor");
      let links = document.getElementsByTagName('a');
      let toggler = document.getElementById("toggler")
    
      //allows for all links to make custom cursor dialate
      for(let i = 0;i < links.length; i++) {
        links[i].addEventListener('mouseover', () => {
          mouseCursor.style.transform = 'scale(2)';
          links[i].style.transform = 'opacity(0.5)'
        })

        links[i].addEventListener('mouseleave', () => {
          mouseCursor.style.transform = 'scale(1)';
          links[i].style.transform = 'opacity(1)'
        })
      }

      //Dialates cursor on hover
      toggler.addEventListener('mouseover', () => {
        mouseCursor.style.transform = 'scale(2)';
      })

      toggler.addEventListener('mouseleave', () => {
        mouseCursor.style.transform = 'scale(1)';
      })

      //Disables cursor on mobile
      document.addEventListener('touchstart', () => {
        mouseCursor.style.visibility = 'hidden';
      })

      //Allows custom cursor to follow mouse
      document.addEventListener('mousemove', (e) => {
        if (props.dark) {
          mouseCursor.style.border = '2px solid white';
        } else {
          mouseCursor.style.border = '2px solid black';
        }
        mouseCursor.style.top = e.pageY - 15 + 'px';
        mouseCursor.style.left = e.pageX - 20 + 'px';
      });

      return () => {
        document.removeEventListener('mousemove', cursor);
      }
    })

    return (
        <motion.div whileTap={{scale: 0.5}} className="cursor" id='cursor'></motion.div>
    )
}

export default CustomCursor
