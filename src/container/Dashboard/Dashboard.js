import Layout from "../../layout/Dashboard";
import Art from "../../style/img/dashboard-art.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const Dashboard = () => {
  const numberList = [
    {
      listText: "Today",
      default: true,
    },
    {
      listText: "Yesterday",
    },
    {
      listText: "Last 7 Days",
    },
    {
      listText: "Last 30 Days",
    },
    {
      listText: "This Month",
    },
    {
      listText: "Last Month",
    },
  ];
  return (
    <>
      <Layout>
        <div className="page--title">
          <h2>Hello, Kirk</h2>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                Dashboard
              </li>
            </ol>
          </nav>
        </div>
        <div className="card__group">
          {/* Opt out requests Card */}
          <div className="card__group--item col4 OptoutBox">
            <div className="card">
              <div className="card__header">
                <h3>Opt out requests </h3>
              </div>
              <div className="card__body">
                <div className="dataList">
                  <div className="dataList__item contact">
                    <div className="left">
                      <Link className="contact__name">983 080 1012</Link>
                      <span>983080009</span>
                    </div>
                    <div className="right">
                      <span>David Luke</span>
                      <button className="btn--p btnStyle1">Opt-out</button>
                    </div>
                  </div>
                  <div className="dataList__item contact">
                    <div className="left">
                      <Link className="contact__name">990 124 9842</Link>
                      <span>983081119</span>
                    </div>
                    <div className="right">
                      <span>Ella</span>
                      <button className="btn--p btnStyle1">Opt-out</button>
                    </div>
                  </div>
                  <div className="dataList__item contact">
                    <div className="left">
                      <Link className="contact__name">967 192 0071</Link>
                      <span>983084232</span>
                    </div>
                    <div className="right">
                      <span>Alex syrup</span>
                      <button className="btn--p btnStyle1">Opt-out</button>
                    </div>
                  </div>
                  <div className="dataList__item contact">
                    <div className="left">
                      <Link className="contact__name">961 129 1012</Link>
                      <span>983086543</span>
                    </div>
                    <div className="right">
                      <span>Jack</span>
                      <button className="btn--p btnStyle1">Opt-out</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Latest numbers and Inbox of messages Card */}
          <div className="card__group--item col8 messageBox">
            <div className="card messageBox__body">
              <div className="card__header">
                <h3>Conversations </h3>
              </div>
              <div className="card__body">
                <div className="left">
                  <div className="left__body">
                    <div className="dataList">
                      <div className="dataList__item latestNumber ">
                        <div className="latestNumber__left">
                          <Link className="latestNumber__name">
                            967 192 0071
                          </Link>
                          <span>David Luke</span>
                        </div>
                        <div className="latestNumber__right">
                          <p className="btn--p lebalStyle1">983080009</p>
                        </div>
                      </div>
                      <div className="dataList__item latestNumber active">
                        <div className="latestNumber__left">
                          <Link className="latestNumber__name">
                            967 192 0071
                          </Link>
                          <span>David Luke</span>
                        </div>
                        <div className="latestNumber__right">
                          <p className="btn--p lebalStyle1">983080009</p>
                        </div>
                      </div>
                      <div className="dataList__item latestNumber ">
                        <div className="latestNumber__left">
                          <Link className="latestNumber__name">
                            967 192 0071
                          </Link>
                          <span>David Luke</span>
                        </div>
                        <div className="latestNumber__right">
                          <p className="btn--p lebalStyle1">983080009</p>
                        </div>
                      </div>
                      <div className="dataList__item latestNumber ">
                        <div className="latestNumber__left">
                          <Link className="latestNumber__name">
                            967 192 0071
                          </Link>
                          <span>David Luke</span>
                        </div>
                        <div className="latestNumber__right">
                          <p className="btn--p lebalStyle1">983080009</p>
                        </div>
                      </div>
                      <div className="dataList__item latestNumber ">
                        <div className="latestNumber__left">
                          <Link className="latestNumber__name">
                            967 192 0071
                          </Link>
                          <span>David Luke</span>
                        </div>
                        <div className="latestNumber__right">
                          <p className="btn--p lebalStyle1">983080009</p>
                        </div>
                      </div>
                      <div className="dataList__item latestNumber ">
                        <div className="latestNumber__left">
                          <Link className="latestNumber__name">
                            967 192 0071
                          </Link>
                          <span>David Luke</span>
                        </div>
                        <div className="latestNumber__right">
                          <p className="btn--p lebalStyle1">983080009</p>
                        </div>
                      </div>
                      <div className="dataList__item latestNumber ">
                        <div className="latestNumber__left">
                          <Link className="latestNumber__name">
                            967 192 0071
                          </Link>
                          <span>David Luke</span>
                        </div>
                        <div className="latestNumber__right">
                          <p className="btn--p lebalStyle1">983080009</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="right__body messageBody">
                    <div className="message">
                      <div className="message__header"></div>
                      <div className="message__body">
                        <ul className="message__chat--msg">
                          <li>
                            <div className="message__chat--content">
                              Lorem ipsum dolor sit.
                            </div>
                            <div className="message__chat--timing">
                              Today, 10:10 PM
                            </div>
                          </li>
                          <li>
                            <div className="message__chat--content">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Amet consequatur ratione
                              repellendus, unde suscipit illo molestiae saepe
                              veniam cum quod.
                            </div>
                            <div className="message__chat--timing">
                              Today, 11:10 PM
                            </div>
                          </li>
                          <li className="sender">
                            <div className="message__chat--content">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Quam, expedita.
                            </div>
                            <div className="message__chat--timing">
                              Today, 01:05 AM
                            </div>
                          </li>
                          <li>
                            <div className="message__chat--content">
                              Lorem ipsum dolor sit.
                            </div>
                            <div className="message__chat--timing">
                              Today, 10:10 PM
                            </div>
                          </li>
                          <li>
                            <div className="message__chat--content">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Amet consequatur ratione
                              repellendus, unde suscipit illo molestiae saepe
                              veniam cum quod.
                            </div>
                            <div className="message__chat--timing">
                              Today, 11:10 PM
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="message__footer">
                        <div className="message__chat--footer">
                          <form action="" className="message__chat--form">
                            <div className="input__field">
                              <div className="input__field--group">
                                <textarea
                                  type="text"
                                  placeholder=""
                                  name=""
                                  style={{ height: "65px" }}
                                ></textarea>
                              </div>
                            </div>
                            <ul className="message__chat--btnsGroup">
                              {/* <li className="message__chat--btnsItme">
                            <button>
                              <FontAwesomeIcon icon="book" />
                            </button>
                          </li> */}
                              <li className="message__chat--btnsItme">
                                <button>
                                  <FontAwesomeIcon icon="paper-plane" />
                                </button>
                              </li>
                            </ul>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming campaigns Card */}
          <div className="card__group--item col4 campaignsBox">
            <div className="card">
              <div className="card__header">
                <h3>Scheduled Campaigns</h3>
              </div>
              <div className="card__body">
                <div className="dataList">
                  <div className="dataList__item campaign">
                    <div className="left">
                      <Link className="campaign__name">Campaigns 1 </Link>
                      <span>Alex syrup</span>
                    </div>
                    <div className="right">
                      <span>Today 05:20 AM</span>
                      <p className="btn--p lebalStyle1">983080009</p>
                    </div>
                  </div>
                  <div className="dataList__item campaign">
                    <div className="left">
                      <Link className="campaign__name">Campaigns 2 </Link>
                      <span>Jack</span>
                    </div>
                    <div className="right">
                      <span>Tomorrow 11:30 PM </span>
                      <p className="btn--p lebalStyle1">983080009</p>
                    </div>
                  </div>
                  <div className="dataList__item campaign">
                    <div className="left">
                      <Link className="campaign__name">Campaigns 3 </Link>
                      <span>David Luke</span>
                    </div>
                    <div className="right">
                      <span>Apr 13, 2021 10:30 PM </span>
                      <p className="btn--p lebalStyle1">983080009</p>
                    </div>
                  </div>
                  <div className="dataList__item campaign">
                    <div className="left">
                      <Link className="campaign__name">Campaigns 4 </Link>
                      <span>Ella</span>
                    </div>
                    <div className="right">
                      <span>Apr 21, 2021 12:30 PM </span>
                      <p className="btn--p lebalStyle1">983080009</p>
                    </div>
                  </div>
                  <div className="dataList__item campaign">
                    <div className="left">
                      <Link className="campaign__name">Campaigns 5 </Link>
                      <span>Alex syrup</span>
                    </div>
                    <div className="right">
                      <span>Today 05:20 AM</span>
                      <p className="btn--p lebalStyle1">983080009</p>
                    </div>
                  </div>
                  <div className="dataList__item campaign">
                    <div className="left">
                      <Link className="campaign__name">Campaigns 6 </Link>
                      <span>Jack</span>
                    </div>
                    <div className="right">
                      <span>Tomorrow 11:30 PM </span>
                      <p className="btn--p lebalStyle1">983080009</p>
                    </div>
                  </div>
                  <div className="dataList__item campaign">
                    <div className="left">
                      <Link className="campaign__name">Campaigns 7 </Link>
                      <span>David Luke</span>
                    </div>
                    <div className="right">
                      <span>Apr 13, 2021 10:30 PM </span>
                      <p className="btn--p lebalStyle1">983080009</p>
                    </div>
                  </div>
                  <div className="dataList__item campaign">
                    <div className="left">
                      <Link className="campaign__name">Campaigns 8 </Link>
                      <span>Ella</span>
                    </div>
                    <div className="right">
                      <span>Apr 21, 2021 12:30 PM </span>
                      <p className="btn--p lebalStyle1">983080009</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Card */}
          <div className="card__group--item col4 numbersBox">
            <div className="card">
              <div className="card__header">
                <h3>Usage</h3>
              </div>
              <div className="card__body">
                <div className="dataList">
                  <div className="dataList__item latestNumber">
                    <div className="left">
                      <span>983080009</span>
                      <Tooltip
                        title="Incoming"
                        position="left"
                        arrow={true}
                        animation="fade"
                      >
                        <h4>
                          30,009
                          <FontAwesomeIcon icon="arrow-down" />
                        </h4>
                      </Tooltip>
                    </div>
                    <div className="right">
                      <Tooltip
                        title="Outgoing"
                        position="left"
                        arrow={true}
                        animation="fade"
                      >
                        <h4>
                          <span>22,009</span>
                          <FontAwesomeIcon icon="arrow-up" />
                        </h4>
                      </Tooltip>
                      <Tooltip
                        title="Opt-outs"
                        position="left"
                        arrow={true}
                        animation="fade"
                      >
                        <h4>
                          <span>7,961</span>
                          <FontAwesomeIcon icon="times" />
                        </h4>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="dataList__item latestNumber">
                    <div className="left">
                      <span>983080009</span>
                      <Tooltip
                        title="Incoming"
                        position="left"
                        arrow={true}
                        animation="fade"
                      >
                        <h4>
                          18,339
                          <FontAwesomeIcon icon="arrow-down" />
                        </h4>
                      </Tooltip>
                    </div>
                    <div className="right">
                      <Tooltip
                        title="Outgoing"
                        position="left"
                        arrow={true}
                        animation="fade"
                      >
                        <h4>
                          <span>1,009</span>
                          <FontAwesomeIcon icon="arrow-up" />
                        </h4>
                      </Tooltip>
                      <Tooltip
                        title="Opt-outs"
                        position="left"
                        arrow={true}
                        animation="fade"
                      >
                        <h4>
                          <span>17,961</span>
                          <FontAwesomeIcon icon="times" />
                        </h4>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="dataList__item latestNumber">
                    <div className="left">
                      <span>983080009</span>
                      <Tooltip
                        title="Incoming"
                        position="left"
                        arrow={true}
                        animation="fade"
                      >
                        <h4>
                          14,009
                          <FontAwesomeIcon icon="arrow-down" />
                        </h4>
                      </Tooltip>
                    </div>
                    <div className="right">
                      <Tooltip
                        title="Outgoing"
                        position="left"
                        arrow={true}
                        animation="fade"
                      >
                        <h4>
                          <span>10,009</span>
                          <FontAwesomeIcon icon="arrow-up" />
                        </h4>
                      </Tooltip>
                      <Tooltip
                        title="Opt-outs"
                        position="left"
                        arrow={true}
                        animation="fade"
                      >
                        <h4>
                          <span>4,961</span>
                          <FontAwesomeIcon icon="times" />
                        </h4>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="dataList__item latestNumber">
                    <div className="left">
                      <span>983080009</span>
                      <Tooltip
                        title="Incoming"
                        position="left"
                        arrow={true}
                        animation="fade"
                      >
                        <h4>
                          18,339
                          <FontAwesomeIcon icon="arrow-down" />
                        </h4>
                      </Tooltip>
                    </div>
                    <div className="right">
                      <Tooltip
                        title="Outgoing"
                        position="left"
                        arrow={true}
                        animation="fade"
                      >
                        <h4>
                          <span>1,009</span>
                          <FontAwesomeIcon icon="arrow-up" />
                        </h4>
                      </Tooltip>
                      <Tooltip
                        title="Opt-outs"
                        position="left"
                        arrow={true}
                        animation="fade"
                      >
                        <h4>
                          <span>17,961</span>
                          <FontAwesomeIcon icon="times" />
                        </h4>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* List of users card */}
          <div className="card__group--item col4 usersBox">
            <div className="card">
              <div className="card__header">
                <h3>Users</h3>
              </div>
              <div className="card__body">
                <div className="dataList">
                  <div className="dataList__item user">
                    <div className="left">
                      <Link className="user__name">David Luke</Link>
                      <span>davidluke@gmail.com</span>
                    </div>
                    <div className="right">
                      <span className="role manager lebalStyle1">Manager</span>
                    </div>
                  </div>
                  <div className="dataList__item user">
                    <div className="left">
                      <Link className="user__name">Jack</Link>
                      <span>jack92378@gmail.com</span>
                    </div>
                    <div className="right">
                      <span className="role manager lebalStyle1">Manager</span>
                    </div>
                  </div>
                  <div className="dataList__item user">
                    <div className="left">
                      <Link className="user__name">Ella</Link>
                      <span>ella93783@gmail.com</span>
                    </div>
                    <div className="right">
                      <span className="role user lebalStyle1">User</span>
                    </div>
                  </div>
                  <div className="dataList__item user">
                    <div className="left">
                      <Link className="user__name">Alex syrup</Link>
                      <span>alexsyrup11@gmail.com</span>
                    </div>
                    <div className="right">
                      <span className="role user lebalStyle1">User</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Dashboard;
