import React, { useState, useEffect } from "react";
import { getAllReviews } from "../../servicesMethods/ReviewsServices/reviewsServices";
import { Spinner } from '../../ShareComponents/SpinnerComponent/Spinner';
import "./review.css";
import moment from 'moment';


export const Review = () => {
  const [review, setAllReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  useEffect(async () => {
    setIsLoading(true);
    const res = await getAllReviews();
    if (res)
      setAllReview(res);
      console.log("al", res);
    setIsLoading(false);
  }, [getAllReviews]);

  return (
    <div className="review">
      <Spinner isActive={isLoading} />
      <div className="image-review">
        <h3 className="reh3">
          {" "}
          Customers Review{" "}
          <img
            src="https://cdn-icons-png.flaticon.com/256/4108/4108233.png"
            style={{ width: "50px", height: "50px", marginTop: "-20px" }}
          />
        </h3>
        <h5 className="reh5"> What Our Customers Say About Us </h5>
      </div>
      {review &&
        review.map((element, index) => {
          return (
            <>
              {index % 2 == 0 ? (
                <div className="divRev">
                  <div className="inforReview">

                    <img src={element && element.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />
                    <h5>{element && element.firstName}</h5>
                    <h5>{element && element.comment}</h5>
                    <p className="dateReview">
                      {element && element.date_of_comment && moment(element.date_of_comment).format('MMMM Do YYYY, h:mm A') || 'N/A'}
                    </p>
                  </div>
                  <div className="imgReview">
                    <img src="https://www.pngall.com/wp-content/uploads/2018/04/Gym-Free-Download-PNG.png" />
                  </div>
                </div>
              ) : (
                <div className="divRev">
                  <div className="imgReview">
                    <img src="https://www.pngall.com/wp-content/uploads/2018/04/Gym-Free-Download-PNG.png" />
                  </div>
                  <div className="inforReview">
                    <img src={element && element.image} />
                    <h5>{element && element.firstName}</h5>
                    <h5>{element && element.comment}</h5>
                  </div>
                </div>
              )}
            </>
          );
        })}
    </div>
  );
};
