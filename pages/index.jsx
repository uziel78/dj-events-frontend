import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function HomePage({ events }) {
  // logs client-side/browser
  //console.log(events);
  return (
    <Layout>
      <h1>Upcoming Events</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  //console.log(events);  -logs server-side/terminal

  return {
    props: { events },
    revalidate: 1,
  };
}
