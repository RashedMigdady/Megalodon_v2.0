import React, { useState } from "react";
import "./comment.css";
import swal from "sweetalert";
import { addComment } from '../../servicesMethods/CommentsServices/commentsServices';
import { Spinner } from '../../ShareComponents/SpinnerComponent/Spinner';

export const AddComment = () => {
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createComment = async () => {
    setIsLoading(true);
    const res = await addComment({comment});
    if (res)
      swal(res);
    setIsLoading(false);
  };

  return (
    <>
      <div className="commentPerant">
        <Spinner isActive={isLoading} />
        <div className="container33">
          <div className="form44">
            <h4> Send us a Message</h4>
            <div className="detailsComment"><input className="detalisUser" placeholder="your Name" type="text" /> <input type="email" className="detalisUser" placeholder="your Email" /></div>
            <div className="container22">
              <textarea
                className="textareaaa"
                cols="30"
                rows="6"
                placeholder="Write your opinion . . .
              "
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              ></textarea>
              <div className="clearrr">
                <button
                  type="submit"
                  className="signupbtnn"
                  onClick={createComment}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
