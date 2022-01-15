import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CancerPage from './src/pages/cancer/index';
import ExamPage from './src/pages/exam/index';
import PreganancePage from './src/pages/pregnance/index';
import RoutinePage from './src/pages/routine/index';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Câncer de colo do utero">
        <Drawer.Screen name="Câncer de colo do útero" component={CancerPage} />
        <Drawer.Screen name="Exame do colo do útero" component={ExamPage} />
        <Drawer.Screen name="Câncer na gravidez" component={PreganancePage} />
        <Drawer.Screen name="Rotina" component={RoutinePage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
