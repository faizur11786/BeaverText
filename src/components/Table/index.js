import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tippy";
import TableFilter from "../TableFilter";

const DataTableCard = ({ children, TotalContent, tableData, tableCol }) => {
  const columns = useMemo(() => tableCol, []);
  const data = useMemo(() => tableData, []);

  const MakeMeAdmin = (index) => {
    if (window.confirm("Are you sure?")) {
      console.log("yes");
    } else {
      console.log("No");
    }
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  const GetVerification = () => {
    if (window.confirm("Are you sure?")) {
      console.log("yes");
    } else {
      console.log("No");
    }
  };

  return (
    <>
      <div className=" db__card">
        <div className=" db__card--header">
          <div className="db__card--header-left">
            {children}
            <TableFilter filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
        </div>
        <div className=" db__card--body">
          <div className="table__content">
            <table className="table" {...getTableProps()}>
              <thead>
                <tr className="total__content">
                  {TotalContent === true ? (
                    <>
                      <td colSpan="2">Totals</td>
                      <td>
                        <p>Outbound</p>
                        <h4>112,233</h4>
                      </td>
                      <td>
                        <p>Inbound</p>
                        <h4>85,100</h4>
                      </td>
                      <td>
                        <p>Opt Outs</p>
                        <h4>34</h4>
                      </td>
                    </>
                  ) : (
                    ""
                  )}
                </tr>
                {headerGroups.map((item, index) => (
                  <tr {...item.getHeaderGroupProps()} key={index}>
                    {item.headers.map((col) => (
                      <th {...col.getHeaderProps()}>{col.render("Header")}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((item) => {
                  prepareRow(item);
                  return (
                    <tr {...item.getRowProps()}>
                      {item.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {/* {console.log(cell.column)} */}
                            {cell.column.id === cell.column.clickable ? (
                              <Link to={"/conversations-flow/" + cell.value}>
                                {cell.render("Cell")}
                              </Link>
                            ) : (
                              cell.render("Cell")
                            )}

                            {cell.column.Autoforward ? (
                              <>
                                {cell.row.original.auto_forward !== null ? (
                                  <>
                                    {" "}
                                    <Tooltip
                                      className="center"
                                      title={"Auto-forwarding is activated."}
                                      arrow={true}
                                      animation="fade"
                                    >
                                      <FontAwesomeIcon icon="arrow-alt-circle-right" />
                                    </Tooltip>
                                  </>
                                ) : (
                                  ""
                                )}
                              </>
                            ) : (
                              ""
                            )}

                            {cell.column.roleTag ? (
                              <div className="contentCenter">
                                <spna
                                  className={
                                    "role " +
                                    (cell.row.values.role === false
                                      ? "user"
                                      : "manager")
                                  }
                                >
                                  {cell.row.values.role === false
                                    ? "User"
                                    : "Manager"}
                                </spna>
                              </div>
                            ) : null}

                            {cell.column.customSwitch ? (
                              <div className="contentCenter">
                                <div
                                  className={
                                    "customSwitch " +
                                    (cell.row.values.role === true
                                      ? ""
                                      : "disabled")
                                  }
                                >
                                  {console.log(cell.row.values)}
                                  <input
                                    type="checkbox"
                                    className="customSwitch__input"
                                    name="isadmin"
                                    id={cell.row.values.name}
                                    defaultChecked={
                                      cell.value === true ? true : false
                                    }
                                    onClick={() => MakeMeAdmin(cell.row)}
                                  />
                                  <label
                                    htmlFor={cell.row.values.name}
                                    className="customSwitch__label"
                                  ></label>
                                </div>
                              </div>
                            ) : null}

                            {cell.column.statusTag ? (
                              <div className="contentCenter">
                                {cell.column.id === cell.column.statusTag ? (
                                  <span
                                    className={
                                      "status__" +
                                      (cell.value === true
                                        ? "active"
                                        : "inactive")
                                    }
                                  >
                                    {cell.value === true
                                      ? "Active"
                                      : "Inactive"}
                                  </span>
                                ) : null}
                              </div>
                            ) : null}

                            {/* {console.log("h")} */}
                            {cell.column.Header === "Actions" ? (
                              <div className="contentCenter">
                                {cell.column.cog && (
                                  <Tooltip
                                    className="center"
                                    title={cell.column.cog}
                                    arrow={true}
                                    animation="fade"
                                  >
                                    <Link to="/auto-forwar">
                                      <FontAwesomeIcon icon="cog" />
                                    </Link>
                                  </Tooltip>
                                )}
                                {cell.column.clone && (
                                  <Tooltip
                                    className="center"
                                    title={cell.column.clone[0]}
                                    arrow={true}
                                    animation="fade"
                                  >
                                    <Link to={cell.column.clone[1]}>
                                      <FontAwesomeIcon icon="clone" />
                                    </Link>
                                  </Tooltip>
                                )}

                                {cell.column.add && (
                                  <Tooltip
                                    className="center"
                                    title={cell.column.add[0]}
                                    arrow={true}
                                    animation="fade"
                                  >
                                    <Link to={cell.column.add[1]}>
                                      <FontAwesomeIcon icon="plus" />
                                    </Link>
                                  </Tooltip>
                                )}

                                {cell.column.pen && (
                                  <Tooltip
                                    className="center"
                                    title={cell.column.pen[0]}
                                    arrow={true}
                                    animation="fade"
                                  >
                                    <Link to={cell.column.pen[1]}>
                                      <FontAwesomeIcon icon="pen" />
                                    </Link>
                                  </Tooltip>
                                )}

                                {cell.column.pauseCircle && (
                                  <Tooltip
                                    className="center"
                                    title={cell.column.pauseCircle}
                                    arrow={true}
                                    animation="fade"
                                  >
                                    <Link to="#">
                                      <FontAwesomeIcon icon="pause-circle" />
                                    </Link>
                                  </Tooltip>
                                )}

                                {cell.column.seeConversation && (
                                  <Tooltip
                                    className="center"
                                    title={cell.column.seeConversation}
                                    arrow={true}
                                    animation="fade"
                                  >
                                    <Link to="#">
                                      <FontAwesomeIcon icon="history" />
                                    </Link>
                                  </Tooltip>
                                )}

                                {cell.column.quickMessage && (
                                  <Tooltip
                                    className="center"
                                    title={cell.column.quickMessage}
                                    arrow={true}
                                    animation="fade"
                                  >
                                    <Link to="/message-send">
                                      <FontAwesomeIcon icon="paper-plane" />
                                    </Link>
                                  </Tooltip>
                                )}

                                {cell.column.delete && (
                                  <Tooltip
                                    className="center"
                                    title={cell.column.delete}
                                    arrow={true}
                                    animation="fade"
                                  >
                                    <Link
                                      to="#"
                                      className="delete"
                                      onClick={GetVerification}
                                    >
                                      <FontAwesomeIcon icon="trash-alt" />
                                    </Link>
                                  </Tooltip>
                                )}

                                {cell.column.block && (
                                  <Tooltip
                                    className="center"
                                    title={cell.column.block}
                                    arrow={true}
                                    animation="fade"
                                  >
                                    <Link to="#" className=" delete">
                                      <FontAwesomeIcon icon="ban" />
                                    </Link>
                                  </Tooltip>
                                )}
                              </div>
                            ) : null}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {page.length >= 10 || pageIndex !== 0 ? (
              <nav className="pagination">
                <ul className="pagination__ul">
                  <li
                    className={
                      "pagination__item " + (!canPreviousPage && "disabled")
                    }
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                  >
                    Previous
                  </li>
                  <li
                    className="pagination__item"
                    onClick={() => gotoPage(pageIndex + 1)}
                  >
                    1
                  </li>
                  <li
                    className="pagination__item"
                    onClick={() => gotoPage(pageIndex + 2)}
                  >
                    2
                  </li>
                  <li
                    className="pagination__item"
                    onClick={() => gotoPage(pageIndex + 3)}
                  >
                    3
                  </li>
                  <li
                    className={
                      "pagination__item " + (!canNextPage && "disabled")
                    }
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                  >
                    Next
                  </li>
                </ul>
              </nav>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTableCard;
