import ReactOnRails from 'react-on-rails';
import PlayGround from '../components/PlayGround';

// This is how react_on_rails can see the PlayGround in the browser.
ReactOnRails.register({
    PlayGround: PlayGround,
});