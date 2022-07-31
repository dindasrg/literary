import React from "react";

const Card = ({ book }) => {
  console.log(book);
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.thumbnail;
        let title = item.volumeInfo.title;
        if (thumbnail != undefined) {
          return (
            <>
              <div className="book">
                <div className="cover">
                  <img src={thumbnail} alt="book-cover" />
                </div>
                <div className="description">
                  <p className="title">
                    {title} <br />
                    {/* <span className="author">hi</span> */}
                  </p>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default Card;
