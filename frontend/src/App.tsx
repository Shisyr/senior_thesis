import * as React from 'react';
const styles = require('./App.scss');

export class App extends React.Component {
    render() {
        return (
            <div className={styles.mainClass}>
                Hello
            </div>
        )
    }
}
