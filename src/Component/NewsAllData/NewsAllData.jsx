import React from 'react';
import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';

const NewsAllData = ({ data }) => {
  const { newsPreviewImage, newsTitle, _id } = data;
  return (
    <Card>
      <CardHeader floated={false}>
        <img src={newsPreviewImage} alt='profile-picture' />
      </CardHeader>
      <CardBody className='text-center'>
        <Typography className='mb-2'>{newsTitle}</Typography>
      </CardBody>
    </Card>
  );
};

export default NewsAllData;
