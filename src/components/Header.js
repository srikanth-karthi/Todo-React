import PropTypes from 'prop-types';
import { Button } from './Button';

const Header = ({ title, showtask,showadd }) => { // Fixed prop name

    return (
        <header className='header '> {/* Fixed className typo */}
            <h1>{title}</h1>
            
            <Button color={showadd ? 'red' : 'green'} text={showadd ? 'Close' : 'Add'} showtask={showtask} />
        </header>
    );
};

Header.defaultProps = {
    title: 'TASK TRACKER'
};

Header.propTypes = { 
    title: PropTypes.string.isRequired
};

export default Header;