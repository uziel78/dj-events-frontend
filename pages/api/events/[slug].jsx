const { events } = require('./data.json');

// function only allows GET requests, filterd down to single event based of the slug
export default function handler(req, res) {
  const evt = events.filter((ev) => ev.slug === req.query.slug);

  if (req.method === 'GET') {
    res.status(200).json(evt);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
