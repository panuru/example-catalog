import React, { Component } from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import './Pagination.scss';

class Pagination extends Component {
  render () {
    const {currentPage, totalPages, linkTemplate} = this.props;
    return (
      <nav className="Pagination">
        <ul>
          {Array(totalPages).fill(0).map((_, i) => {
            const page = i + 1;

            return <li key={page}>
              <Link
                to={linkTemplate(page)}
                className={classNames('Pagination-link', {
                  'Pagination-link--active': page === currentPage
                })}
              >{page}</Link>
            </li>
          })}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
