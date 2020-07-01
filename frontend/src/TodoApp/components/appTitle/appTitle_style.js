import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset())

const styles = {
  AppTitle: {
    margin: {
      bottom: '10px',
    },
    'text-align': 'center',
  }
}

const {classes} = jss.createStyleSheet(styles).attach()

export default classes;
