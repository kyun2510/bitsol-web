import React from 'react'
import './list-pagination.css'
import {Pagination} from "@mui/material";

export default function ListPagination({ nav, setNav }) {

  return (
    <div className={'list-pagination life'}>
      <Pagination
        page={nav.page}
        count={Math.floor(nav.total_count / nav.pagerow) + (nav.total_count % nav.pagerow > 0 ? 1 : 0)}
        shape="rounded"
        showFirstButton
        showLastButton
        onChange={(e, page) => {
          setNav({
            ...nav,
            page: page,
          })
        }}
      />
    </div>
  )

}

