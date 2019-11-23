import React, { Component } from 'react';
import Atm from './atm-background';
import classes from './intuitive-form.module.scss';
class IntuitiveForm extends Component {
  months = [
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
  years = [
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
  state = {
    cardNo: null,
    cardName: null,
    month: null,
    year: null,
    cvv: null
  };
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state.cardNo.length);
    const data = {
      cardNo: this.state.cardNo,
      cardName: this.state.cardName,
      month: this.state.month,
      year: this.state.year,
      cvv: this.state.cvv
    };
    console.log(data);
  };
  render() {
    return (
      <div className={classes.intuitiveAtm}>
        <div className={classes.intuitiveAtmCard}>
          <Atm
            cardNo={this.state.cardNo}
            cardName={this.state.cardName}
            month={this.state.month}
            year={this.state.year}
            cvv={this.state.cvv}
          />
        </div>

        <form
          className={classes.intuitiveAtmForm}
          onSubmit={this.submitHandler}
        >
          <div className={classes.padDown}>
            <div className="u-margin">
              <span className={classes.intuitiveAtmFormSpan}>Card Number</span>
              <input
                type="text"
                onChange={e => {
                  return this.setState({ cardNo: e.target.value });
                }}
              />
            </div>
            <div className="u-margin">
              <span className={classes.intuitiveAtmFormSpan}>Card Name</span>
              <input
                type="text"
                onChange={e => this.setState({ cardName: e.target.value })}
              />
            </div>
            <div className={classes.intuitiveAtmFormBlock}>
              <div className={classes.intuitiveAtmFormBlock1}>
                <span className={classes.intuitiveAtmFormSpan}>
                  Expiration Date
                </span>
                <select
                  onChange={e => this.setState({ month: e.target.value })}
                >
                  <option value="">Month</option>
                  {this.months.map(el => (
                    <option value={el}>{el}</option>
                  ))}
                </select>
              </div>
              <div className={classes.intuitiveAtmFormBlock1}>
                <div>&nbsp;</div>
                <select onChange={e => this.setState({ year: e.target.value })}>
                  <option value="">Year</option>
                  {this.years.map(el => (
                    <option value={el}>{el}</option>
                  ))}
                </select>
              </div>
              <div className={classes.intuitiveAtmFormBlock1}>
                <span className={classes.intuitiveAtmFormSpan}>CVV</span>
                <input
                  type="text"
                  className={classes.cvv}
                  onChange={e => this.setState({ cvv: e.target.value })}
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
  }
}

export default IntuitiveForm;
