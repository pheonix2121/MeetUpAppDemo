import MeetupList from "@/components/meetups/MeetupList";

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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {

  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }; 
}

export default HomePage;