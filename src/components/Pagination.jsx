import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Pagination = ({ page: currentPage, pageCount }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pageCountArr = Array.from(
    { length: pageCount },
    (_, index) => index + 1
  );

  const handlePageChange = (pageNumber) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('page', pageNumber);
    navigate(`?${newParams.toString()}`)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="join mt-16">
      {pageCountArr.map((item) => {

        return (
          <button
            key={item}
            className={`${
              item === currentPage
                ? "join-item btn btn-active"
                : "join-item btn"
            }`}
            onClick={() => handlePageChange(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
