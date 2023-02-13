import React from "react";
import styles from "./Pagination.module.css";

let Pagination = ({ totalCount, pageSize, currentPage, onPageChange }) => {
  let pagesCount = Math.ceil(totalCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  //доработать кнопки!!!
  return (
    <div>
      {currentPage !== 1 ? (
        <button
          className={styles.paginationButton}
          onClick={() => {
            onPageChange(currentPage - 1);
          }}
        >
          ←
        </button>
      ) : (
        <button disabled={true} className={styles.paginationButtonDisabled}>
          ←
        </button>
      )}
      {/* {currentPage !== 1 && (
        <button
          className={styles.paginationButton}
          onClick={() => {
            onPageChange(currentPage - 1);
          }}
        >
          ←
        </button>
      )} */}
      {pages.map((page) => (
        <span
          key={page}
          className={currentPage === page ? styles.selectedPage : null}
          onClick={() => {
            onPageChange(page);
          }}
        >
          {page}
        </span>
      ))}
      {/* {currentPage !== pagesCount && (
        <button
          className={styles.paginationButton}
          onClick={() => {
            onPageChange(currentPage + 1);
          }}
        >
          →
        </button>
      )} */}
      {currentPage !== pagesCount ? (
        <button
          className={styles.paginationButton}
          onClick={() => {
            onPageChange(currentPage + 1);
          }}
        >
          →
        </button>
      ) : (
        <button disabled={true} className={styles.paginationButtonDisabled}>
          →
        </button>
      )}
    </div>
  );
};

export default Pagination;
