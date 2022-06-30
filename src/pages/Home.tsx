import { connect, ConnectedProps } from 'react-redux';
import { Component, ReactNode } from 'react';
import { Container, Button, Text } from 'native-base';
import { TextStyle, ViewStyle } from 'react-native';
import { RootState } from '../core/redux/store';
import { countUp, resetCounter } from '../core/redux/reducers/counterReducer';

class Home extends Component<CustomProps, State> {

    countUp = (): void => {
        const {dispatchCountUp} = this.props;
        if (dispatchCountUp) {
            dispatchCountUp();
        }
    };

    reset = (): void => {
        const {dispatchResetCounter} = this.props;
        if (dispatchResetCounter) {
            dispatchResetCounter();
        }
    }

    render(): ReactNode {
        const {counter} = this.props;
        return <Container style={CONTAINER}>
            <Text style={TEXT}>{counter.count}</Text>
            <Button style={BUTTON} onPress={this.countUp}>Count Up</Button>
            <Button style={BUTTON} onPress={this.reset}>Reset Counter</Button>
        </Container>
    }
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
    counter: state.counter
});

const mapDispatchToProps = {
    dispatchCountUp: countUp,
    dispatchResetCounter: resetCounter
}

const connector = connect<CustomProps>(mapStateToProps, mapDispatchToProps)(Home);

export default connector;

type OwnProps = {
    navigation: any;
};

type ReduxProps = ConnectedProps<typeof connector>;

type CustomProps = ReduxProps;

type State = {
}

const CONTAINER: ViewStyle = {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
};

const TEXT: TextStyle = {
    padding: 10
};

const BUTTON: ViewStyle = {
    padding: 10,
    margin: 10
}
