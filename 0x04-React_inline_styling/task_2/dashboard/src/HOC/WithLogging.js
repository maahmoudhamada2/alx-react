import { Component } from 'react';

export default function WithLogging(WrappedComponent) {
    const componentName = WrappedComponent.name || 'Component'
    class WithLogging extends Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            console.log(`Component ${componentName} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${componentName} is going to unmount`)
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    WithLogging.displayName = `WithLogging(${componentName})`
    return WithLogging
}