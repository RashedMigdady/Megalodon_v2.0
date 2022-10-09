import React, { useEffect, useState } from "react";
import './scroll.css'


export const ScrollToTop = () => {

  const [arrow_visible, setArrow_visible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setArrow_visible(true);
    } else {
      setArrow_visible(false);

    }
  }

  useEffect(() => {
    document.addEventListener("scroll", () => toggleVisibility())
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (<>
    <div className="scroll-to-top">
      {arrow_visible && (
        <div onClick={() => scrollToTop()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="38.735"
            width="33.749"
          >
            <g transform="translate(-18.121 -3.364)">
              <rect
                ry="4.928"
                y="3.364"
                x="18.121"
                height="38.735"
                width="33.749"
                fill="black"
              />
              <g transform="translate(-.48 2.134)">
                <rect
                  ry="4.928"
                  y="1.229"
                  x="18.601"
                  height="38.735"
                  width="33.749"
                  fill="url(#b)"
                />
                <g fill="yellow">
                  <path d="M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z" />
                  <path d="M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
    </div>
  </>)
}