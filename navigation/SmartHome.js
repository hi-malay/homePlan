import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Dashboard from "../screens/Dashboard";
import Settings from "../screens/Settings.js";

export default createStackNavigator(
    {
        Dashboard,
        Settings
    },
    {
        initialRouteName: "Dashboard"
    }
);
