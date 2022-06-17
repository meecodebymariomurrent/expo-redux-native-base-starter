import { ViewStyle } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { configure } from './src/core/redux/store';
import { Provider } from 'react-redux';
import { NavigationHandler } from './src/navigation/Navgation';

const store = configure();

export default function App() {
    return (
        <Provider store={store}>
            <GestureHandlerRootView style={GESTURE_HANDLER}>
                <NativeBaseProvider>
                    <NavigationHandler/>
                </NativeBaseProvider>
            </GestureHandlerRootView>
        </Provider>
    );
}

const GESTURE_HANDLER: ViewStyle = {
    flex: 1
};
