import Link from 'next/link';

const Home = props => (
    <div>
        <p>Hey!</p>
        <Link>
            <a href="/sell">Sell!</a>
        </Link>
    </div>
);

export default Home;