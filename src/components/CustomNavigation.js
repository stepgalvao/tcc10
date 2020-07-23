import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate({name, param}) {  
  console.log(`CustomNavigation navigate(${name},${param})`)  
  navigationRef.current?.navigate(name, param);
  //navigationRef.current?.navigate(name);
}

export function asBackPage(){
    const routesLength = navigationRef.current?.getRootState().routes.length
    console.log(`asBackPage: ${routesLength}`)
    return (routesLength >=2)
}

export function goBack(){
    navigationRef.current?.goBack()
}

