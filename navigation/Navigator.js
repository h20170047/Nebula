import { createStackNavigator, createAppContainer } from "react-navigation";
import GoalsAppScreen from '../Apps/Goals app/GoalsApp';
import TimerAppScreen from '../Apps/Timer app/TimerApp'
import AppsMenuScreen from '../Apps/Menu'

const Navigator= createStackNavigator({
    MenuScreen: AppsMenuScreen,
    GoalsScreen: GoalsAppScreen,
    TimerScreen: TimerAppScreen

});

export default createAppContainer(Navigator);