import React from "react";
import ReactApexChart from "react-apexcharts";

const chartOptions = {
  chart: {
    id: "basic-line",
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  series: [
    {
      name: "Series 1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 85, 95],
    },
  ],
};

const Summary1 = () => {
  return (
    <>
      <div class="col-xl-6">
        <div class="card balance-data">
          <div class="card-header border-0 flex-wrap">
            <h4 class="fs-18 font-w600">Your Balance Summary</h4>
            <div class="d-flex align-items-center">
              <div class="round" id="dzNewSeries">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="balance_summary"
                  value="monthly"
                />
                <label for="checkbox" class="checkmark monthy"></label>
                <span>Monthly</span>
              </div>
              <div class="round" id="dzOldSeries">
                <input
                  type="checkbox"
                  id="checkbox1"
                  name="balance_summary"
                  value="weekly"
                />
                <label for="checkbox1" class="checkmark weekly"></label>
                <span>Weekly</span>
              </div>
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="btn-link btn sharp tp-btn-light btn-primary"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.33319 9.99985C8.33319 10.9203 9.07938 11.6665 9.99986 11.6665C10.9203 11.6665 11.6665 10.9203 11.6665 9.99986C11.6665 9.07938 10.9203 8.33319 9.99986 8.33319C9.07938 8.33319 8.33319 9.07938 8.33319 9.99985Z"
                      fill="#B9A8FF"
                    />
                    <path
                      d="M8.33319 3.33329C8.33319 4.25376 9.07938 4.99995 9.99986 4.99995C10.9203 4.99995 11.6665 4.25376 11.6665 3.33329C11.6665 2.41282 10.9203 1.66663 9.99986 1.66663C9.07938 1.66663 8.33319 2.41282 8.33319 3.33329Z"
                      fill="#B9A8FF"
                    />
                    <path
                      d="M8.33319 16.6667C8.33319 17.5871 9.07938 18.3333 9.99986 18.3333C10.9203 18.3333 11.6665 17.5871 11.6665 16.6667C11.6665 15.7462 10.9203 15 9.99986 15C9.07938 15 8.33319 15.7462 8.33319 16.6667Z"
                      fill="#B9A8FF"
                    />
                  </svg>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="javascript:void(0);">
                    Delete
                  </a>
                  <a class="dropdown-item" href="javascript:void(0);">
                    Edit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body py-0 custome-tooltip">
            <div class="d-flex align-items-center flex-wrap income">
              <div class="d-flex align-items-center mb-2 me-3 arrow">
                <div class="me-3">
                  <svg
                    class="theme-col"
                    width="45"
                    height="45"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="26" cy="26" r="26" fill="var(--bs-body-bg)" />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M34.9293 30.4004C34.9294 30.3966 34.9293 30.3927 34.9293 30.3889L34.9371 18.5152C34.9369 18.4212 34.9264 18.3275 34.906 18.2357L34.8284 17.9716L34.7507 17.8163L34.6653 17.7309C34.5585 17.5759 34.4243 17.4417 34.2693 17.3348L34.1916 17.2572L34.0984 17.164L33.8965 17.1019C33.783 17.0683 33.6654 17.0499 33.547 17.0475L21.6112 17.0708C20.8167 17.0676 20.17 17.7092 20.1668 18.5037C20.1668 18.5075 20.1668 18.5114 20.1668 18.5152C20.1853 19.3009 20.8178 19.9334 21.6035 19.9519L28.6935 19.9596C28.9967 19.9626 29.2402 20.2109 29.2372 20.5141C29.2358 20.6552 29.1802 20.7903 29.0818 20.8915L17.5187 32.4546C16.9568 33.0164 16.9568 33.9273 17.5186 34.4892C18.0804 35.0511 18.9913 35.0511 19.5532 34.4893C19.5533 34.4893 19.5533 34.4892 19.5534 34.4892L31.1164 22.9261C31.3338 22.7147 31.6815 22.7196 31.8929 22.937C31.9912 23.0382 32.0469 23.1733 32.0483 23.3144L32.0405 30.3889C32.0551 31.1805 32.6933 31.8188 33.4849 31.8333C34.2795 31.8365 34.9262 31.195 34.9293 30.4004Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath>
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(26 9.02945) rotate(45)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <span class="fs-14">Income</span>
                  <h4 class="fs-5 font-w600">$459,234.08</h4>
                </div>
              </div>
              <div class="d-flex align-items-center ms-sm-2 mb-2 arrow">
                <div class="me-3">
                  <svg
                    class=""
                    width="45"
                    height="45"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="26"
                      cy="26"
                      r="26"
                      transform="rotate(-180 26 26)"
                      fill="#5E3ED0"
                    />
                    <g clip-path="url(#clip0)">
                      <path
                        d="M17.0707 21.5996C17.0706 21.6034 17.0707 21.6073 17.0707 21.6111L17.0629 33.4848C17.0631 33.5788 17.0736 33.6725 17.094 33.7643L17.1716 34.0284L17.2493 34.1837L17.3347 34.2691C17.4415 34.4241 17.5757 34.5583 17.7307 34.6652L17.8084 34.7428L17.9016 34.836L18.1035 34.8981C18.217 34.9317 18.3346 34.9501 18.453 34.9525L30.3888 34.9292C31.1833 34.9324 31.83 34.2908 31.8332 33.4963C31.8332 33.4925 31.8332 33.4886 31.8332 33.4848C31.8147 32.6991 31.1822 32.0666 30.3965 32.0481L23.3065 32.0404C23.0033 32.0374 22.7598 31.7891 22.7628 31.4859C22.7642 31.3448 22.8198 31.2097 22.9182 31.1085L34.4813 19.5454C35.0432 18.9836 35.0432 18.0727 34.4814 17.5108C33.9196 16.9489 33.0087 16.9489 32.4468 17.5107C32.4467 17.5107 32.4467 17.5108 32.4466 17.5108L20.8836 29.0739C20.6662 29.2853 20.3185 29.2804 20.1071 29.063C20.0088 28.9618 19.9531 28.8267 19.9517 28.6856L19.9595 21.6111C19.9449 20.8195 19.3067 20.1812 18.5151 20.1667C17.7205 20.1635 17.0738 20.805 17.0707 21.5996Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath>
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(26 42.9706) rotate(-135)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <span class="fs-14">Expense</span>
                  <h4 class="fs-5 font-w700">$ 23,456</h4>
                </div>
              </div>
            </div>
            {/* <div id="reservationChart" class="reservationChart"></div> */}
            <ReactApexChart options={chartOptions} series={chartOptions.series} type="line" class="reservationChart" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary1;
