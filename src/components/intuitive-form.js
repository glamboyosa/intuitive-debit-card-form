import React, { useState } from 'react';
import Atm from './atm-background';
import classes from './intuitive-form.module.scss';
const IntuitiveForm = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const years = [
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030'
  ];

  const [cardNo, setCardNo] = useState(null);
  const [cardName, setCardName] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [cvv, setCvv] = useState(null);
  const submitHandler = e => {
    e.preventDefault();
    console.log(cardNo.length);
    const data = {
      cardNo: cardNo,
      cardName: cardName,
      month: month,
      year: year,
      cvv: cvv
    };
    console.log(data);
  };

  return (
    <div className={classes.intuitiveAtm}>
      <div className={classes.intuitiveAtmCard}>
        <Atm
          cardNo={cardNo}
          cardName={cardName}
          month={month}
          year={year}
          cvv={cvv}
        />
      </div>

      <form className={classes.intuitiveAtmForm} onSubmit={submitHandler}>
        <div className={classes.padDown}>
          <div className="u-margin">
            <span className={classes.intuitiveAtmFormSpan}>Card Number</span>
            <input
              type="text"
              onChange={e => {
                return setCardNo(e.target.value);
              }}
            />
          </div>
          <div className="u-margin">
            <span className={classes.intuitiveAtmFormSpan}>Card Name</span>
            <input type="text" onChange={e => setCardName(e.target.value)} />
          </div>
          <div className={classes.intuitiveAtmFormBlock}>
            <div className={classes.intuitiveAtmFormBlock1}>
              <span className={classes.intuitiveAtmFormSpan}>
                Expiration Date
              </span>
              <select onChange={e => setMonth(e.target.value)}>
                <option value="">Month</option>
                {months.map(el => (
                  <option value={el}>{el}</option>
                ))}
              </select>
            </div>
            <div className={classes.intuitiveAtmFormBlock1}>
              <div>&nbsp;</div>
              <select onChange={e => setYear(e.target.value)}>
                <option value="">Year</option>
                {years.map(el => (
                  <option value={el}>{el}</option>
                ))}
              </select>
            </div>
            <div className={classes.intuitiveAtmFormBlock1}>
              <span className={classes.intuitiveAtmFormSpan}>CVV</span>
              <input
                type="text"
                className={classes.cvv}
                onChange={e => setCvv(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className={classes.btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default IntuitiveForm;
