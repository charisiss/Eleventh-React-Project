import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETS = [
  {
    id: "m1",
    title: "Meetup 1",
    image:
      "https://cdn.britannica.com/61/179661-138-6F13E02A/Overview-Athens.jpg?w=800&h=450&c=crop",
    address: "Some Address 5, 12345",
    description: "This is the first Meetup",
  },
  {
    id: "m2",
    title: "Meetup 2",
    image:
      "https://cdn.britannica.com/61/179661-138-6F13E02A/Overview-Athens.jpg?w=800&h=450&c=crop",
    address: "Some Address 3, 12343",
    description: "This is the second Meetup",
  },
];
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETS,
//     },
//     revalidate: 10,
//   };
// }

export default HomePage;
