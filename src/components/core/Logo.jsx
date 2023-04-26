import { Image } from 'react-native';
import sources from '../../utils/sources.js';

export default function Logo({ size, style }) {

    return(
        <Image
            alt='logo'
            source={sources.images.logo}
            style={[
                typeof size == 'number' 
                ? { width: size, height: size } 
                : { width: 72, height: 72 },
                style
            ]} />
    )
}