import React, { useState } from 'react';
import Atm from '../ATM/atm-background';
import {
  IntuitiveAtmParent,
  IntuitiveAtmCardParent,
  PadDown,
  MarginUtilityContainer,
  IntuitiveAtmFormSpan,
  Input,
  IntuitiveAtmCardDetailsBlock,
  IntuitiveAtmCardDetailsBlocks,
  Select,
  Option,
  CVVInput,
  Button,
  IntuitiveAtmForm,
} from './form.style';
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
    'December',
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
    '2030',
  ];

  const [cardNo, setCardNo] = useState('');
  const [cardName, setCardName] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCvv] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(cardNo.length);
    const data = {
      cardNo: cardNo,
      cardName: cardName,
      month: month,
      year: year,
      cvv: cvv,
    };
    console.log(data);
  };

  return (
    <IntuitiveAtmParent>
      <IntuitiveAtmCardParent>
        <Atm
          cardNo={cardNo}
          cardName={cardName}
          month={month}
          year={year}
          cvv={cvv}
        />
      </IntuitiveAtmCardParent>
      <IntuitiveAtmForm>
        <PadDown>
          <MarginUtilityContainer>
            <IntuitiveAtmFormSpan>Card Number</IntuitiveAtmFormSpan>
            <Input type='text' onChange={(e) => setCardNo(e.target.value)} />
          </MarginUtilityContainer>
          <MarginUtilityContainer>
            <IntuitiveAtmFormSpan>Card Name</IntuitiveAtmFormSpan>
            <Input type='text' onChange={(e) => setCardName(e.target.value)} />
          </MarginUtilityContainer>
          <IntuitiveAtmCardDetailsBlock>
            <IntuitiveAtmCardDetailsBlocks>
              <IntuitiveAtmFormSpan>Expiration Date</IntuitiveAtmFormSpan>
              <Select onChange={(e) => setMonth(e.target.value)}>
                <Option value=''>Month</Option>
                {months.map((month) => (
                  <Option value={month}>{month}</Option>
                ))}
              </Select>
            </IntuitiveAtmCardDetailsBlocks>
            <IntuitiveAtmCardDetailsBlocks>
              <div>&nbsp;</div>
              <Select onChange={(e) => setYear(e.target.value)}>
                <Option value=''>Year</Option>
                {years.map((year) => (
                  <Option value={year}>{year}</Option>
                ))}
              </Select>
            </IntuitiveAtmCardDetailsBlocks>
            <IntuitiveAtmCardDetailsBlocks>
              <IntuitiveAtmFormSpan>CVV</IntuitiveAtmFormSpan>
              <CVVInput onChange={(e) => setCvv(e.target.value)} />
            </IntuitiveAtmCardDetailsBlocks>
          </IntuitiveAtmCardDetailsBlock>
          <Button type='submit'>Submit</Button>
        </PadDown>
      </IntuitiveAtmForm>
    </IntuitiveAtmParent>
  );
};

export default IntuitiveForm;
