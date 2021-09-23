export default function Portfolio({ portfolio_items }) {
  return (
    <div class="Portfolio">
      <h2>porttari</h2>
      <ul>
        <li>uli</li>
        <li>{portfolio_items}</li>
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      portfolio_items: 'test items',
    },
  };
}
