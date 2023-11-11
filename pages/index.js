import { MongoClient } from 'mongodb';

import MeetupList from '@/components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://img.freepik.com/premium-photo/husainabad-clock-tower_78361-2526.jpg?w=2000',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://img.freepik.com/premium-photo/husainabad-clock-tower_78361-2526.jpg?w=2000',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!',
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image:
      'https://img.freepik.com/premium-photo/husainabad-clock-tower_78361-2526.jpg?w=2000',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a third meetup!',
  }
];

import { Fragment } from 'react';
import Head from 'next/head';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Meetups</title>
        <meta
          name='description'
          content='Go for the huge meetup List!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

export async function getStaticProps() {
    const client = await MongoClient.connect(
        process.env.MONGODB_CONNECTION_URL
      );
      const db = client.db();
    
      const meetupsCollection = db.collection('meetups');
    
      const meetups = await meetupsCollection.find().toArray();
    
      client.close();
    
      return {
        props: {
          meetups: meetups.map((meetup) => ({
            title: meetup.title,
            address: meetup.address,
            image: meetup.image,
            id: meetup._id.toString(),
          })),
        },
        revalidate: 1,
      };
    }
    
    export default HomePage;