// RootNavigation.js

import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate(name:  any, params = {}) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

// add other navigation functions that you need and export them