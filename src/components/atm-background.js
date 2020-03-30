import React from 'react';
import classes from './atm.module.scss';
import chip from '../resources/chip.png';
import mastercard from '../resources/mastercard.png';
import visa from '../resources/visa.png';
const atm = ({ cvv, cardName, month, year, cardNo }) => {
  // ATM GOES HERE
  return cvv !== null ? (
    <div className={classes.atm}>
      <div
        className={[
          classes.atmcard,
          classes.atmcardFront,
          classes.atmcardFrontRotate
        ].join(' ')}
      >
        <img src={chip} className={classes.atmChip} alt="Debit card chip" />
        {cardNo[0] === '4' ? (
          <img src={visa} className={classes.atmProvider} alt="Visa logo " />
        ) : (
          <img
            src={mastercard}
            className={classes.atmProvider}
            alt="Mastercard logo"
          />
        )}

        <p className={classes.atmDigits}>
          {cardNo !== null ? cardNo : '################'}
        </p>
        <div className={classes.atmHolder}>
          <span className={classes.atmHolderTitle}>Card Holder</span>
          <span className={classes.atmHolderName}>John Doe</span>
        </div>
        <div className={classes.atmExpiry}>
          <span className={classes.atmExpiryTitle}>Expires</span>
          <span className={classes.atmExpiryTimeMonth}>MM/</span>
          <span className={classes.atmExpiryTimeYear}>YY</span>
        </div>
      </div>
      <div
        className={[
          classes.atmcard,
          classes.atmcardBack,
          classes.atmcardBackRotate
        ].join(' ')}
      >
        <p className={classes.atmCvv}>{cvv && cvv}</p>
      </div>
    </div>
  ) : (
    <div className={classes.atm}>
      <div className={[classes.atmcard, classes.atmcardFront].join(' ')}>
        <img src={chip} className={classes.atmChip} alt="Debit card chip" />
        {cardNo !== null ? (
          cardNo[0] === '4' ? (
            <img src={visa} className={classes.atmProvider} alt="Visa logo " />
          ) : (
            <img
              src={mastercard}
              className={classes.atmProvider}
              alt="Mastercard logo"
            />
          )
        ) : (
          <img
            src={mastercard}
            className={classes.atmProvider}
            alt="Mastercard logo"
          />
        )}
        <p className={classes.atmDigits}>
          {cardNo !== null ? cardNo : '################'}
        </p>
        <div className={classes.atmHolder}>
          <span className={classes.atmHolderTitle}>Card Holder</span>
          <span className={classes.atmHolderName}>
            {cardName !== null ? cardName : 'John Doe'}
          </span>
        </div>
        <div className={classes.atmExpiry}>
          <span className={classes.atmExpiryTitle}>Expires</span>
          <span className={classes.atmExpiryTimeMonth}>
            {month ? `${month}/` : 'MM/'}
          </span>
          <span className={classes.atmExpiryTimeYear}>
            {year ? year : 'YY'}
          </span>
        </div>
      </div>
      <div className={[classes.atmcard, classes.atmcardBack].join(' ')}>
        &nbsp;
      </div>
    </div>
  );
};

export default atm;
