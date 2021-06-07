import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import red from './assets/red.png';

export const navigationRef = React.createRef();

export const navigate = (name) => {
  navigationRef.current?.navigate(name);
};
