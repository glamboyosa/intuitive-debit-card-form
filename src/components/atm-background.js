import React from 'react';
import classes from './atm.module.scss';
import chip from '../resources/chip.png';
import mastercard from '../resources/mastercard.png';
import visa from '../resources/visa.png';
const atm = props => {
  // ATM GOES HERE
  return props.cvv !== null ? (
    <div className={classes.atm}>
      <div
        className={[
          classes.atmcard,
          classes.atmcardFront,
          classes.atmcardFrontRotate
        ].join(' ')}
      >
        <img src={chip} className={classes.atmChip} alt="Debit card chip" />
        {props.cardNo[0] === '4' ? (
          <img src={visa} className={classes.atmProvider} alt="Visa logo " />
        ) : (
          <img
            src={mastercard}
            className={classes.atmProvider}
            alt="Mastercard logo"
          />
        )}

        <p className={classes.atmDigits}>
          {props.cardNo !== null ? props.cardNo : '################'}
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
        <p className={classes.atmCvv}>{props.cvv && props.cvv}</p>
      </div>
    </div>
  ) : (
    <div className={classes.atm}>
      <div className={[classes.atmcard, classes.atmcardFront].join(' ')}>
        <img src={chip} className={classes.atmChip} alt="Debit card chip" />
        {props.cardNo !== null ? (
          props.cardNo[0] === '4' ? (
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
          {props.cardNo !== null ? props.cardNo : '################'}
        </p>
        <div className={classes.atmHolder}>
          <span className={classes.atmHolderTitle}>Card Holder</span>
          <span className={classes.atmHolderName}>
            {props.cardName !== null ? props.cardName : 'John Doe'}
          </span>
        </div>
        <div className={classes.atmExpiry}>
          <span className={classes.atmExpiryTitle}>Expires</span>
          <span className={classes.atmExpiryTimeMonth}>
            {props.month ? `${props.month}/` : 'MM/'}
          </span>
          <span className={classes.atmExpiryTimeYear}>
            {props.year ? props.year : 'YY'}
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
