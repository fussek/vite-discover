import React from 'react';
import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';

const NewsAllData = ({ data }) => {
  const { img, title, _id } = data;
  return (
    <Card className='rounded-none '>
      <CardHeader className='shadow-none' floated={false}>
        <img src={img} alt='image' className='shadow-none w-[70%] grayscale-5' />
      </CardHeader>
      <CardBody className='text-center'>
        <Typography className='mb-3'>{title}</Typography>
      </CardBody>
    </Card>
  );
};

export default NewsAllData;
