import React, { memo } from "react";
import { AvDates } from "@/constants/constants";
import { Alert } from "@mui/material";
// import {
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup,
// } from "@mui/material";

type TAvDate = {
  setAVDate: (...args: any[]) => void;
};

const AvailableDates = ({ setAVDate }: TAvDate) => {
  const getDay = new Date().getDate() + 2;
  const getMonth = new Date().getDate();

  return (
    <div className="Avdate">
      <div className="day">
        <div className="dateHead">Today</div>
        <div className="dates">
          {AvDates.map((e) => {
            return (
              <span
                onClick={(r) => {
                  setAVDate(`Today At ${e}  `);
                }}
                key={Math.random() * 10}
              >
                {e}
              </span>
            );
          })}
          {/* <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Today</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {AvDates.map((e) => {
                return (
                  <span key={Math.random() * 10}>
                    <FormControlLabel value={e} control={<Radio />} label={e} />
                  </span>
                );
              })}
            </RadioGroup>
          </FormControl> */}
        </div>
      </div>
      <div className="day">
        <div className="dateHead">Tomorrow</div>
        <div className="dates">
          {AvDates.map((e) => {
            return (
              <span
                onClick={() => {
                  setAVDate(`Tomorrow At ${e}  `);
                }}
                key={Math.random() * 10}
              >
                {e}
              </span>
            );
          })}
        </div>
      </div>
      <div className="day">
        <div className="dateHead">{`${getDay} / ${getMonth} `}</div>
        <div className="dates">
          {AvDates.map((e) => {
            return (
              <span
                onClick={() => {
                  setAVDate(`${getDay} / ${getMonth} At ${e}  `);
                }}
                key={Math.random() * 10}
              >
                {e}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(AvailableDates);
