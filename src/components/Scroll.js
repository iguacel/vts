import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useScroll from "react-use-scroll";
import { useSpring, animated } from "react-spring";

const Last = ({ data }) => {
  const scroll = useScroll();

  const navAnimation = useSpring({
    transform: scroll > 260 ? `translate3d(0,0,0)` : `translate3d(0,-100%,0)`
  });

  return (
    <>
      {scroll > 260 && (
        <>
          <AnchorLink href="#inicio" aria-label="inicio">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "red"
              }}
            >
              <animated.div
                className="center op8 bold"
                style={{
                  ...navAnimation,
                  transition: "200ms transform",
                  willChange: "transform",
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  background: "RGBA(9, 11, 14, 1.00)",
                  height: "80px",
                  padding: "0 1em",
                  color: "white",
                  zIndex: 1
                }}
              >
                <h6>
                  <strong>Scroll to top</strong>
                </h6>
              </animated.div>
            </div>
          </AnchorLink>
        </>
      )}
    </>
  );
};

export default Last;
