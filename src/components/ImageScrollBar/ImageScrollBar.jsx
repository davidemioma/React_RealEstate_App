import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import classes from "./ImageScrollBar.module.css";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div className={classes.iconLeft}>
      <FaArrowAltCircleLeft onClick={() => scrollPrev()} />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div className={classes.iconRight}>
      <FaArrowAltCircleRight onClick={() => scrollNext()} />
    </div>
  );
};

const ImageScrollBar = ({ photos }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    >
      {photos?.map((photo) => (
        <div className={classes.container} key={photo.id}>
          <img className={classes.images} src={photo.url} alt="" />
        </div>
      ))}
    </ScrollMenu>
  );
};

export default ImageScrollBar;
