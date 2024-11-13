import Place from '../Place/Place';
import { places } from '../../data/places.js';

export default function List({ imageSize }) {
    const listItems = places.map(place =>
        <li key={place.id}>
            <Place
                place={place}
                imageSize={imageSize}
            />
        </li>
    );
    return <ul>{listItems}</ul>;
}