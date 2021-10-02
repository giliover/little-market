/**
 * Nome: Carlos Alberto
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import {AuthProvider} from './src/contexts/auth';
import {CartProvider} from './src/contexts/cart';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

// const Section: React.FC<{
//   title: string;
// }> = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
