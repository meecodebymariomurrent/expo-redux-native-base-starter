import { connect, ConnectedProps } from 'react-redux';
import { Component, ReactNode } from 'react';
import { Container, Button, Text } from 'native-base';
import { ViewStyle } from 'react-native';
import { RootAppState } from '../core/redux/actionTypes';
import { countUp, resetCounter } from '../core/redux/actions/counterAction';

class Home extends Component<CustomProps, State> {

    componentDidMount() {
    }

    countUp = (): void => {
        const {dispatchCountUp} = this.props;
        if (dispatchCountUp) {
            dispatchCountUp();
        }
    };

    reset = (): void => {
        const {resetCounter} = this.props;
        if (resetCounter) {
            resetCounter();
        }
    }

    render(): ReactNode {
        const {counter} = this.props;
        return <Container style={CONTAINER}>
            <Text>{counter.count}</Text>
            <Button onPress={this.countUp}>Count Up</Button>
            <Button onPress={this.reset}>Reset Counter</Button>
        </Container>
    }
}

const mapStateToProps = (state: RootAppState, ownProps: OwnProps) => ({
    counter: state.counter
});

const mapDispatchToProps = {
    dispatchCountUp: countUp,
    dispatchResetCounter: resetCounter
}

const connector = connect(mapStateToProps, mapDispatchToProps)(Home);

export default connector;

type OwnProps = {
    navigation: any;
};

type ReduxProps = ConnectedProps<typeof connector>;

type CustomProps = ReduxProps;

type State = {}


const CONTAINER: ViewStyle = {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
};
