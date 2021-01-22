import React from 'react';
import chip from '../../resources/chip.png';
import mastercard from '../../resources/mastercard.png';
import visa from '../../resources/visa.png';
import {
  ATMCVV,
  ATMExpiryDetailsYear,
  ATMExpiryDetailsMonth,
  ATMExpiryTitle,
  ATMExpiry,
  ATMHolderName,
  ATMHolderTitle,
  ATMHolder,
  ATMDigits,
  ATMProvider,
  ATMChip,
  BackofCard,
  FrontofCard,
  ATMBackground,
} from './atm.style';
const atm = ({ cvv, cardName, month, year, cardNo }) => {
  // ATM GOES HERE
  return (
    <ATMBackground>
      <FrontofCard rotate={cvv.length >= 1}>
        <ATMChip src={chip} alt='Debit card chip' />
        {!!cardNo && cardNo[0] === '4' ? (
          <ATMProvider src={visa} alt='Visa Logo' />
        ) : (
          <ATMProvider src={mastercard} alt='Mastercard Logo' />
        )}
        <ATMDigits>
          {cardNo.length >= 1 ? cardNo : '################'}
        </ATMDigits>
        <ATMHolder>
          <ATMHolderTitle>Card Holder</ATMHolderTitle>
          <ATMHolderName>
            {cardName.length >= 1 ? cardName : 'John Doe'}
          </ATMHolderName>
        </ATMHolder>
        <ATMExpiry>
          <ATMExpiryTitle>Expires</ATMExpiryTitle>
          <ATMExpiryDetailsMonth>
            {month.length >= 1 ? `${month}/` : 'MM/'}
          </ATMExpiryDetailsMonth>
          <ATMExpiryDetailsYear>
            {year.length >= 1 ? `${year}` : 'YY'}
          </ATMExpiryDetailsYear>
        </ATMExpiry>
      </FrontofCard>
      <BackofCard rotate={cvv.length >= 1}>
        <ATMCVV>{cvv ? cvv : '&nbsp;'}</ATMCVV>
      </BackofCard>
    </ATMBackground>
  );
};

export default atm;
