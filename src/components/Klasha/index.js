import styles from "./klashsa.module.css";

import Chartbar from "../Charts/Chartbar";

const Klasha = () => {
  const payoutData = [
    {
      Payout_ID: "KLA12578DHQ",

      Source: "Vel pellentesque ornare",

      Date: "25th November, 2020",
      Amount: "$1,200",
    },
    {
      Payout_ID: "KLA12578DHQ",

      Source: "Vel pellentesque ornare",

      Date: "25th November, 2020",
      Amount: "$1,200",
    },
    {
      Payout_ID: "KLA12578DHQ",

      Source: "Vel pellentesque ornare",

      Date: "25th November, 2020",
      Amount: "$1,200",
    },
    {
      Payout_ID: "KLA12578DHQ",

      Source: "Vel pellentesque ornare",

      Date: "25th November, 2020",
      Amount: "$1,200",
    },
    {
      Payout_ID: "KLA12578DHQ",

      Source: "Vel pellentesque ornare",

      Date: "25th November, 2020",
      Amount: "$1,200",
    },
  ];

  let currentDate = new Date("2021-06-05T10:12:50.5000z").toDateString();

  return (
    <div className={styles.laysout}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <img src="./klashaAssets/logo.svg" alt="klasha_logo" width="100px" />
        </div>
        <div className={styles.sideMenu_items}>
          <div>
            <h5 className={styles.menu_head}>Main Pages</h5>
          </div>
          <ul>
            <li className={`${styles.list_item}  ${styles.active}`}>
              <img
                src="./klashaAssets/Category.svg"
                alt="dashboard category_icon"
              />{" "}
              <span>Dashboard</span>
            </li>
            <li className={styles.list_item}>
              <img
                src="./klashaAssets/wallet.svg"
                alt="dashboard balances icon"
              />
              <small>Balances</small>
            </li>
            <li className={styles.list_item}>
              <img
                src="./klashaAssets/user.svg"
                alt="dashboard customer icon"
              />
              <span>Customers</span>
            </li>
            <li className={styles.list_item}>
              <img
                src="./klashaAssets/Activity.svg"
                alt="dashboard analytics icon"
              />
              <span>Analytics</span>
            </li>
          </ul>
          <div>
            <h5 className={styles.menu_head}>General</h5>
          </div>
          <ul>
            <li className={styles.list_item}>
              <img
                src="./klashaAssets/Filter.svg"
                alt="dashboard setting_icon"
              />{" "}
              <span>Settings</span>
            </li>
            <li className={styles.list_item}>
              <img
                src="./klashaAssets/Starteam.svg"
                alt="dashboard team icon"
              />
              <span>Team</span>
            </li>
            <li className={styles.list_item}>
              <img
                src="./klashaAssets/Callcontact.svg"
                alt="dashboard contact icon"
              />
              <span>Contact</span>
            </li>
            <li className={styles.list_item}>
              <img
                src="./klashaAssets/Logoutlogout.svg"
                alt="dashboard logout icon"
              />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
      <aside className={styles.main_board}>
        <div className={styles.main_container}>
          <div className={styles.header}>
            <div>
              {" "}
              <h3 style={{ color: "#2A2A2A" }}>Balances</h3>
              <span>Today, {currentDate}</span>
            </div>
            <div className={styles.header_items}>
              <div className={styles.notification_holder}>
                <img
                  src="./klashaAssets/Notification.svg"
                  alt="notification icon"
                  width="10px"
                />
              </div>
              <div className={styles.image}>
                <img
                  src="./klashaAssets/avatar.svg"
                  alt="user avatar"
                  width="30px"
                />
              </div>
            </div>
          </div>
          <div className={styles.userBoard_checker}>
            <div style={{ width: "60%", padding: "0 10px" }}>
              <div className={styles.total}>
                <p style={{ color: "#2C665D" }}>Total account balance</p>

                <select className={styles.select} style={{ width: "auto" }}>
                  <option style={{ marginTop: "12px" }} value="USD">
                    USD
                  </option>
                  <option value="KES">KES</option>
                  <option value="NGN">NGN</option>
                  <option value="GHC">GHC</option>
                </select>
              </div>
              <div className={styles.contentt}>
                <div>
                  <p>$5,332.18</p>
                  <p style={{ color: "#A6ABB2" }}>1 USD = 381.97 NGN</p>
                </div>
              </div>
            </div>
            <div className={styles.showboard}>
              <p className={styles.title}>Funds on hold</p>
              <div className={styles.contenstt}>
                <p style={{ fontWeight: "bold", fontSize: "34px" }}>
                  $5,332.18
                </p>
              </div>
            </div>
          </div>
          {/* </div> */}
          <div>
            <p>Payout Table</p>
            <div>
              <Chartbar width={95} />
              <div className={styles.searchContainer}>
                <input
                  className={styles.searchBox}
                  type="search"
                  name="search"
                  placeholder="Search something..."
                />
                <img
                  className={styles.searchIcon}
                  src="./klashaAssets/Search.svg"
                  alt="search icon"
                />
              </div>
            </div>
          </div>
          <div>
            {/* <table className={styles.payout_table}>
              <tr>
                <th>Payout ID</th>
                <th>Source</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
              {payoutData?.map((transaction) => (
                <tr>
                  <td>{transaction.Payout_ID}</td>
                  <td>{transaction.Source}</td>
                  <td>{transaction.Date}</td>
                  <td>{transaction.Amount}</td>
                </tr>
              ))}
            </table> */}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Klasha;
